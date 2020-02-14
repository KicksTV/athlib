// automatically generated by ../../scripts/make-patterns-js.py

var FIELD_EVENTS = [
  'HJ',
  'SHJ',
  'PV',
  'LJ',
  'SLJ',
  'TJ',
  'STJ',
  'DT',
  'JT',
  'HT',
  'SP',
  'WT',
  'SWT',
  'BT',
  'ST',
  'GDT',
  'OT'
];
var FIELD_SORT_ORDER = [
  'HJ',
  'SHJ',
  'PV',
  'LJ',
  'SLJ',
  'TJ',
  'STJ',
  'SP',
  'DT',
  'HT',
  'JT',
  'ST',
  'GDT',
  'BT',
  'WT',
  'SWT',
  'OT'
];
var JUMPS = [
  'HJ',
  'SHJ',
  'PV',
  'LJ',
  'SLJ',
  'TJ',
  'STJ'
];
var MULTI_EVENTS = [
  'BI',
  'TRI',
  'QUAD',
  'PEN',
  'HEX',
  'HEP',
  'OCT',
  'ENN',
  'DEC',
  'HEN',
  'DOD',
  'ICO',
  'PENI',
  'PENWT',
  'MUL'
];
var STANDARD_FEMALE_TRACK_EVENTS = [
  '100',
  '200',
  '400',
  '800',
  '1500',
  '5000',
  '10000',
  '100H',
  '400H',
  '3000SC',
  '4x100',
  '4x400'
];
var STANDARD_MALE_TRACK_EVENTS = [
  '100',
  '200',
  '400',
  '800',
  '1500',
  '5000',
  '10000',
  '110H',
  '400H',
  '3000SC',
  '4x100',
  '4x400'
];
var THROWS = [
  'DT',
  'JT',
  'HT',
  'SP',
  'WT',
  'SWT',
  'BT',
  'ST',
  'GDT',
  'OT'
];
var PAT_EVENT_CODE = /^(?:[bB][iI]|[tT][rR][iI]|[qQ][uU][aA][dD]|[pP][eE][nN]|[hH][eE][xX]|[hH][eE][pP]|[oO][cC][tT]|[eE][nN][nN]|[dD][eE][cC]|[hH][eE][nN]|[dD][oO][dD]|[iI][cC][oO]|[pP][eE][nN][iI]|[pP][eE][nN][wW][tT]|(?:(\d+)\s*([lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC]|[yY]|[wW])?)|[sS][cC]|[2345][mM][tT]|[lL][hH]|[sS][hH]|(?:[mM][iI][lL][eE]|[mM][aA][rR]|[hH][mM])[wW]?|[xX][cC]|(?:\d{1,3}(\.\d\d?)?(?:[MKk]|[MKk][wW]|[wW]))|[dD][tT](\d\.?\d*[Kk]|)|[jJ][tT]([45678]00|)|[hH][tT](\d\.?\d*[Kk]|)|[sS][pP](\d\.?\d*[Kk]|)|[wW][tT](\d?\d\.?\d*[Kk]|)|[sS][sW][tT](\d\.?\d*[Kk]|)|[bB][tT](\d\.?\d*[Kk]|)|[sS][tT](\d\.?\d*[Kk]|)|[gG][dD][tT](\d\.?\d*[Kk]|)|[oO][tT](\d\.?\d*[Kk]|)||[sS]?[hH][jJ]|[pP][vV]|[sS]?[lL][jJ]|[sS]?[tT][jJ]|(\d{1,2})[xX](\d{2,5}[hH]?|[rR][eE][lL][aA][yY])|(\d{2,4})(?:[lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC])|\d\d?([hH](?:[rR]|[wW])))$/;
var PAT_FIELD = /^(?:[dD][tT](\d\.?\d*[Kk]|)|[jJ][tT]([45678]00|)|[hH][tT](\d\.?\d*[Kk]|)|[sS][pP](\d\.?\d*[Kk]|)|[wW][tT](\d?\d\.?\d*[Kk]|)|[sS][sW][tT](\d\.?\d*[Kk]|)|[bB][tT](\d\.?\d*[Kk]|)|[sS][tT](\d\.?\d*[Kk]|)|[gG][dD][tT](\d\.?\d*[Kk]|)|[oO][tT](\d\.?\d*[Kk]|)|)$|^(?:[sS]?[hH][jJ]|[pP][vV]|[sS]?[lL][jJ]|[sS]?[tT][jJ])$/;
var PAT_FINISH_RECORD = /^(\d{1,2}:)?(\d{1,2}:)?(\d{1,2})(\.?\d+)?$|^(DNF|DQ|DNS)$/;
var PAT_HORIZONTAL_JUMPS = /^(?:[sS]?[lL][jJ]|[sS]?[tT][jJ])$/;
var PAT_HURDLES = /^(?:(\d{2,4})(?:[lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC]))$/;
var PAT_JUMPS = /^(?:[sS]?[hH][jJ]|[pP][vV]|[sS]?[lL][jJ]|[sS]?[tT][jJ])$/;
var PAT_LEADING_DIGITS = /^\d+/;
var PAT_LEADING_FLOAT = /^\d+\.\d*/;
var PAT_LENGTH_EVENT = /^(?:[sS]?[lL][jJ]|[sS]?[tT][jJ]|[dD][tT](\d\.?\d*[Kk]|)|[jJ][tT]([45678]00|)|[hH][tT](\d\.?\d*[Kk]|)|[sS][pP](\d\.?\d*[Kk]|)|[wW][tT](\d?\d\.?\d*[Kk]|)|[sS][sW][tT](\d\.?\d*[Kk]|)|[bB][tT](\d\.?\d*[Kk]|)|[sS][tT](\d\.?\d*[Kk]|)|[gG][dD][tT](\d\.?\d*[Kk]|)|[oO][tT](\d\.?\d*[Kk]|)|)$/;
var PAT_LONG_SECONDS = /^\d{3,6}(\.?\d+)?$/;
var PAT_MULTI = /^(?:[bB][iI]|[tT][rR][iI]|[qQ][uU][aA][dD]|[pP][eE][nN]|[hH][eE][xX]|[hH][eE][pP]|[oO][cC][tT]|[eE][nN][nN]|[dD][eE][cC]|[hH][eE][nN]|[dD][oO][dD]|[iI][cC][oO]|[pP][eE][nN][iI]|[pP][eE][nN][wW][tT])$/;
var PAT_NOT_FINISHED = /^(DNF|DQ|DNS)$/;
var PAT_PERF = /^(\d{1,2}:)?(\d{1,2}:)?(\d{1,2})(\.?\d+)?$/;
var PAT_RACES_FOR_DISTANCE = /^(?:\d\d?([hH](?:[rR]|[wW])))$/;
var PAT_RELAYS = /^(?:(\d{1,2})[xX](\d{2,5}[hH]?|[rR][eE][lL][aA][yY]))$/;
var PAT_ROAD = /^(?:(?:[mM][iI][lL][eE]|[mM][aA][rR]|[hH][mM])[wW]?|[xX][cC]|(?:\d{1,3}(\.\d\d?)?(?:[MKk]|[MKk][wW]|[wW])))$/;
var PAT_RUN = /^(?:(?:(\d+)\s*([lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC]|[yY]|[wW])?)|[sS][cC]|[2345][mM][tT]|[lL][hH]|[sS][hH])$|^(?:(?:[mM][iI][lL][eE]|[mM][aA][rR]|[hH][mM])[wW]?|[xX][cC]|(?:\d{1,3}(\.\d\d?)?(?:[MKk]|[MKk][wW]|[wW])))$/;
var PAT_THROWS = /^(?:[dD][tT](\d\.?\d*[Kk]|)|[jJ][tT]([45678]00|)|[hH][tT](\d\.?\d*[Kk]|)|[sS][pP](\d\.?\d*[Kk]|)|[wW][tT](\d?\d\.?\d*[Kk]|)|[sS][sW][tT](\d\.?\d*[Kk]|)|[bB][tT](\d\.?\d*[Kk]|)|[sS][tT](\d\.?\d*[Kk]|)|[gG][dD][tT](\d\.?\d*[Kk]|)|[oO][tT](\d\.?\d*[Kk]|)|)$/;
var PAT_TIMED_EVENT = /^(?:(?:(\d+)\s*([lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC]|[yY]|[wW])?)|[sS][cC]|[2345][mM][tT]|[lL][hH]|[sS][hH]|(\d{2,4})(?:[lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC])|(?:[mM][iI][lL][eE]|[mM][aA][rR]|[hH][mM])[wW]?|[xX][cC]|(?:\d{1,3}(\.\d\d?)?(?:[MKk]|[MKk][wW]|[wW]))|(\d{1,2})[xX](\d{2,5}[hH]?|[rR][eE][lL][aA][yY]))$/;
var PAT_TRACK = /^(?:(?:(\d+)\s*([lLsS]?[hH]\s*((3[36])|(\d{2,3}\.?\d*cm)\s*(\d{1,3}\.?\d*m)(?:\s*(\d{1,3}\.?\d*m))?)?|[sS][cC]|[yY]|[wW])?)|[sS][cC]|[2345][mM][tT]|[lL][hH]|[sS][hH])$/;
var PAT_VERTICAL_JUMPS = /^(?:[sS]?[hH][jJ]|[pP][vV])$/;
var FIELD_EVENT_RECORDS_BY_GENDER = {
  all: {
    PV: 6.16,
    JT: 104.8,
    SP: 23.12,
    LJ: 8.95,
    HT: 86.74,
    HJ: 2.45,
    WT: 24.57,
    TJ: 18.29,
    DT: 76.8
  },
  m: {
    PV: 6.16,
    JT: 104.8,
    SP: 23.12,
    LJ: 8.95,
    HT: 86.74,
    HJ: 2.45,
    WT: 24.57,
    TJ: 18.29,
    DT: 74.08
  },
  f: {
    PV: 5.06,
    JT: 72.28,
    SP: 22.63,
    LJ: 7.52,
    HT: 82.98,
    HJ: 2.09,
    WT: 22.5,
    TJ: 15.5,
    DT: 76.8
  }
};

var __codesmap = {
  PAT_EVENT_CODE: {meters: 1, msfx: 2, hsfx: 3, hhi: 4, hhh: 5, hsd: 6,
    hid: 7, dtnum: 9, jtnum: 10, htnum: 11, spnum: 12, wtnum: 13, swtnum: 14,
    btnum: 15, stnum: 16, gdtnum: 17, otnum: 18},
  PAT_FIELD: {dtnum: 1, jtnum: 2, htnum: 3, spnum: 4, wtnum: 5, swtnum: 6,
    btnum: 7, stnum: 8, gdtnum: 9, otnum: 10},
  PAT_LENGTH_EVENT: {dtnum: 1, jtnum: 2, htnum: 3, spnum: 4, wtnum: 5,
    swtnum: 6, btnum: 7, stnum: 8, gdtnum: 9, otnum: 10},
  PAT_RUN: {meters: 1, msfx: 2, hsfx: 3, hhi: 4, hhh: 5, hsd: 6, hid: 7},
  PAT_THROWS: {dtnum: 1, jtnum: 2, htnum: 3, spnum: 4, wtnum: 5, swtnum: 6,
    btnum: 7, stnum: 8, gdtnum: 9, otnum: 10},
  PAT_TIMED_EVENT: {meters: 1, msfx: 2, hsfx: 3, hhi: 4, hhh: 5, hsd: 6,
    hid: 7},
  PAT_TRACK: {meters: 1, msfx: 2, hsfx: 3, hhi: 4, hhh: 5, hsd: 6, hid: 7}
};
var __patObjs = [PAT_NOT_FINISHED, PAT_ROAD, PAT_LEADING_DIGITS, PAT_JUMPS,
  PAT_RUN, PAT_THROWS, PAT_FIELD, PAT_LONG_SECONDS, PAT_HORIZONTAL_JUMPS,
  PAT_FINISH_RECORD, PAT_LENGTH_EVENT, PAT_RACES_FOR_DISTANCE, PAT_MULTI,
  PAT_LEADING_FLOAT, PAT_EVENT_CODE, PAT_RELAYS, PAT_VERTICAL_JUMPS,
  PAT_TIMED_EVENT, PAT_PERF, PAT_TRACK, PAT_HURDLES];
var __patNames = ['PAT_NOT_FINISHED', 'PAT_ROAD', 'PAT_LEADING_DIGITS',
  'PAT_JUMPS', 'PAT_RUN', 'PAT_THROWS', 'PAT_FIELD', 'PAT_LONG_SECONDS',
  'PAT_HORIZONTAL_JUMPS', 'PAT_FINISH_RECORD', 'PAT_LENGTH_EVENT',
  'PAT_RACES_FOR_DISTANCE', 'PAT_MULTI', 'PAT_LEADING_FLOAT',
  'PAT_EVENT_CODE', 'PAT_RELAYS', 'PAT_VERTICAL_JUMPS', 'PAT_TIMED_EVENT',
  'PAT_PERF', 'PAT_TRACK', 'PAT_HURDLES'];

function codesmap(pattern, groupname, match) {
  var gx;

  if (typeof pattern === 'object') pattern = __patNames[__patObjs.indexOf(pattern)];
  gx = __codesmap[pattern];
  if (!gx) return null;
  gx = gx[groupname];
  if (gx == null) return null;
  gx = match[gx];
  return gx == null ? null : gx;
}

module.exports = {
  FIELD_EVENTS,
  FIELD_SORT_ORDER,
  JUMPS,
  MULTI_EVENTS,
  STANDARD_FEMALE_TRACK_EVENTS,
  STANDARD_MALE_TRACK_EVENTS,
  THROWS,
  PAT_EVENT_CODE,
  PAT_FIELD,
  PAT_FINISH_RECORD,
  PAT_HORIZONTAL_JUMPS,
  PAT_HURDLES,
  PAT_JUMPS,
  PAT_LEADING_DIGITS,
  PAT_LEADING_FLOAT,
  PAT_LENGTH_EVENT,
  PAT_LONG_SECONDS,
  PAT_MULTI,
  PAT_NOT_FINISHED,
  PAT_PERF,
  PAT_RACES_FOR_DISTANCE,
  PAT_RELAYS,
  PAT_ROAD,
  PAT_RUN,
  PAT_THROWS,
  PAT_TIMED_EVENT,
  PAT_TRACK,
  PAT_VERTICAL_JUMPS,
  FIELD_EVENT_RECORDS_BY_GENDER,
  codesmap
};
