#!/usr/bin/env python
import sys, os, json, re, time
medir = os.path.dirname(sys.argv[0])
if not medir: medir = os.getcwd()
try:
    from athlib import codes
except ImportError:
    sys.path.insert(0,os.path.dirname(medir))
    from athlib import codes

def textWrapper(itext, texts, endText='}', endRemoveChars='\x20,', lim=80, wtext=4*'\x20'):
    L = [itext]
    w = len(itext)
    wtext = '\n' + wtext
    nwtext = len(wtext)
    for s in texts:
        ws = len(s)
        w += ws
        if w >= lim:
            while L[-1].endswith(' '): L[-1] = L[-1][:-1]
            s = wtext + s
            w = nwtext+ws
        L.append(s)
    while L[-1] and L[-1][-1] in endRemoveChars: L[-1] = L[-1][:-1]
    L[-1] += endText
    return ''.join(L)

ng_pat = re.compile(r'\(\?P<[^>]*>',re.M)
def jsversion(r):
    return ng_pat.sub('(',r)

def main():
    install = '--install' in sys.argv
    if install:
        install = True
        while '--install' in sys.argv:
            sys.argv.remove('--install')
    md = []
    mp = {}
    pat_set = set()
    prog = os.path.join(os.path.basename(medir),os.path.basename(sys.argv[0]))
    startComment = '// start code generated by %s' % prog
    endComment = '// end code generated by %s' % prog
    out = ['%s %s' % (startComment,time.asctime())].append
    for pat in dir(codes):
        obj = getattr(codes,pat)
        if isinstance(obj,re.Pattern):
            mp[pat] = obj.pattern
            I = obj.groupindex
            if pat.startswith('PAT_'): pat_set.add(pat)
            if I:
                md.append(textWrapper('  %s: {' % pat, (('%s: %s, ' % i) for i in I.items())))

    PAT_LIST='''PAT_EVENT_CODE
                PAT_FIELD
                PAT_FINISH_RECORD
                PAT_HORIZONTAL_JUMPS
                PAT_HURDLES
                PAT_JUMPS
                PAT_LEADING_DIGITS
                PAT_LEADING_FLOAT
                PAT_LENGTH_EVENT
                PAT_LONG_SECONDS
                PAT_MULTI
                PAT_NOT_FINISHED
                PAT_PERF
                PAT_RACES_FOR_DISTANCE
                PAT_RELAYS
                PAT_ROAD
                PAT_RUN
                PAT_THROWS
                PAT_TIMED_EVENT
                PAT_TRACK
                PAT_VERTICAL_JUMPS'''.split();
    PAT_SET = set(PAT_LIST)
    for pat in PAT_LIST:
        out('var %s = /%s/;' %(pat,jsversion(mp[pat])))

    if PAT_SET!=pat_set:
        out(40*'!')
        out('! PAT_SET does not match observed PATS_.....')
        out('! pat_set=%r' % pat_set)
        out('! PAT_SET=%r' % PAT_SET)
        out(40*'!')
    if md:
        out('var __codesmap = {')
        out(',\n'.join(md))
        out('};')
        out(textWrapper('var __patObjs = [',('%s, ' % k for k in sorted(pat_set)),endText='];',wtext='  '))
        out(textWrapper('var __patNames = [',('%r, ' % k for k in sorted(pat_set)),endText='];',wtext='  '))
        out('''\nfunction codesmap(pattern, groupname, match) {
  var gx;

  if (typeof pattern === 'object') pattern = __patNames[__patObjs.indexOf(pattern)];
  gx = __codesmap[pattern];
  if (groupname == null) return gx;
  if (!gx) return null;
  gx = gx[groupname];
  if (gx == null) return null;
  gx = match[gx];
  return gx == null ? null : gx;
}''')
    out(endComment)
    out = '\n'.join(out.__self__)
    if install:
        fn = os.path.normpath(os.path.join(medir,'..','js','src','patterns.js'))
        if not os.path.isfile(fn):
            raise ValueError('cannot locate file %r' % fn)
        with open(fn,'r') as f:
            txt = f.read()
        i = txt.find('\n'+startComment)
        if i>=0:
            end = '\n'+endComment
            j = txt.find(end)
            if j>=i:
                j += len(end)
            else:
                raise ValueError('found start of codemaps.py stuff did not find end')
            txt = txt[:i] + '\n' + out + txt[j:]
        else:
            raise ValueError('did not find start of codemaps.py output')
        bfn = os.path.normpath(os.path.join(medir,'..','tmp','patterns-%s.js' % int(time.time())))
        import shutil
        shutil.move(fn, bfn)
        with open(fn,'w') as f:
            f.write(txt)
    else:
        print(out)

if __name__=='__main__':
    main()
