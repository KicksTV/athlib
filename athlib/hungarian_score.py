"""IAAF Hungarian (non-combined-events) scoring system

IAAF has published a book of scoring factors, containing about 183,000
individual data points.  It is alleged that the formula herein gives the 
exact same answers.  We'll find out shortly ;-)

score = floor(b * (performance + a)**2  + c), 1)

See https://github.com/GlaivePro/IaafPoints

"""
from math import floor
from athlib.utils import check_event_code

def score(gender, inout, event_code, performance):

    assert inout in ('IN', 'OUT'), "Must specify indoor (IN) or outdoor (OUT)"
    assert gender in 'MFX', "Gender must be M , F or X. X will be looked up in Male points tables!"
    ec = check_event_code(event_code)
    assert ec is not None, "Unrecognised event code"


    key = (gender, inout, event_code)
    tbl = get_lookup_table()
    (a,b,c) = tbl[key]
    return floor(a * (performance - b)**2 + c) 


_table = None
def get_lookup_table():
    global _table
    if _table is None:
        _table = {}
        for (gender, inout, event_code, a, b, c) in FACTORS:
            key = (gender, inout, event_code)
            value = (a,b,c)
            _table[key] = value
    return _table

FACTORS = [  # Gender, indoor/outdoor, a, b, c 
  ["M","OUT","100",24.63,17,0  ],
  ["M","OUT","110H",7.66,25.8,0  ],
  ["M","OUT","200",5.08,35.5,0  ],
  ["M","OUT","300",1.83,57.2,0  ],
  ["M","OUT","400",1.02,79,0  ],
  ["M","OUT","400H",0.54,95.5,0  ],
  ["M","OUT","600",0.36,131,0  ],
  ["M","OUT","800",0.19,182,0  ],
  ["M","OUT","1000",0.1,240,0  ],
  ["M","OUT","1500",0.04,385,0  ],
  ["M","OUT","MILE",0.03,415,0  ],
  ["M","OUT","2000",0.02,528,0  ],
  ["M","OUT","2000SC",0.01,660,0  ],
  ["M","OUT","3000",0,840,0  ],
  ["M","OUT","3000SC",0,1020,0  ],
  ["M","OUT","2M",0,904.8,0  ],
  ["M","OUT","5000",0,1440,0  ],
  ["M","OUT","10000",0,3150,0  ],
  ["M","OUT","4x100",1.23,69.5,0  ],
  ["M","OUT","4x200",0.29,144,0  ],
  ["M","OUT","4x400",0.05,334,0  ],
  ["M","OUT","HJ",32.29,11.53,5000  ],
  ["M","OUT","PV",3.04,39.39,5000  ],
  ["M","OUT","LJ",1.92,48.41,5000  ],
  ["M","OUT","TJ",0.46,98.63,5000  ],
  ["M","OUT","SP",0.04,687.7,20000  ],
  ["M","OUT","DT",0,2232.6,20000  ],
  ["M","OUT","HT",0,2693,20000  ],
  ["M","OUT","JT",0,2908.7,20000  ],
  ["M","OUT","10K",0,3150,0  ],
  ["M","OUT","15K",0,4868,0  ],
  ["M","OUT","10",0,5250,0  ],
  ["M","OUT","20K",0,6629,0  ],
  ["M","OUT","HM",0,7020,0  ],
  ["M","OUT","25K",0,8536,0  ],
  ["M","OUT","30K",0,10531,0  ],
  ["M","OUT","Mar",0,15600,0  ],
  ["M","OUT","100K",0,48600,0  ],
  ["M","OUT","3W",0,1760,0  ],
  ["M","OUT","5W",0,2940,0  ],
  ["M","OUT","10W",0,5920,0  ],
  ["M","OUT","20W",0,12000,0  ],
  ["M","OUT","30W",0,19800,0  ],
  ["M","OUT","35W",0,23940,0  ],
  ["M","OUT","50W",0,37200,0  ],
  ["M","OUT","Dec",0,71617,5000  ],
  ["M","OUT","3000W",0,1760,0  ],
  ["M","OUT","5000W",0,2940,0  ],
  ["M","OUT","10000W",0,5920,0  ],
  ["M","OUT","20000W",0,12000,0  ],
  ["M","OUT","30000W",0,19800,0  ],
  ["M","OUT","35000W",0,23940,0  ],
  ["M","OUT","50000W",0,37200,0  ],
  ["M","IN","50",95.8,9.2,0  ],
  ["M","IN","55",78.9,10,0  ],
  ["M","IN","60",68.6,10.7,0  ],
  ["M","IN","50H",34.2,12.35,0  ],
  ["M","IN","55H",30.07,13.35,0  ],
  ["M","IN","60H",23.9,14.6,0  ],
  ["M","IN","200",5.04,36,0  ],
  ["M","IN","300",1.8,58,0  ],
  ["M","IN","400",0.98,80.6,0  ],
  ["M","IN","500",0.56,106,0  ],
  ["M","IN","600",0.39,131,0  ],
  ["M","IN","4x200",0.31,144,0  ],
  ["M","IN","4x400",0.04,340,0  ],
  ["M","IN","800",0.19,184,0  ],
  ["M","IN","1000",0.11,240,0  ],
  ["M","IN","1500",0.04,386,0  ],
  ["M","IN","Mile",0.03,415,0  ],
  ["M","IN","2000",0.02,528,0  ],
  ["M","IN","3000",0,840,0  ],
  ["M","IN","2M",0,907,0  ],
  ["M","IN","5000",0,1440,0  ],
  ["M","IN","HJ",32.29,11.53,5000  ],
  ["M","IN","PV",3.04,39.39,5000  ],
  ["M","IN","LJ",1.92,48.41,5000  ],
  ["M","IN","TJ",0.46,98.63,5000  ],
  ["M","IN","SP",0.04,687.7,20000  ],
  ["M","IN","Hep",0,53175,5000  ],
  ["F","OUT","100",9.92,22,0  ],
  ["F","OUT","100H",3.98,30,0  ],
  ["F","OUT","200",2.24,45.5,0  ],
  ["F","OUT","300",0.7,77,0  ],
  ["F","OUT","400",0.33,110,0  ],
  ["F","OUT","400H",0.2,130,0  ],
  ["F","OUT","600",0.11,184,0  ],
  ["F","OUT","800",0.06,250,0  ],
  ["F","OUT","1000",0.03,330,0  ],
  ["F","OUT","1500",0.01,540,0  ],
  ["F","OUT","Mile",0.01,580,0  ],
  ["F","OUT","2000",0,750,0  ],
  ["F","OUT","2000SC",0,880,0  ],
  ["F","OUT","3000",0,1200,0  ],
  ["F","OUT","3000SC",0,1510,0  ],
  ["F","OUT","2M",0,1296.3,0  ],
  ["F","OUT","5000",0,2100,0  ],
  ["F","OUT","10000",0,4500,0  ],
  ["F","OUT","4x1",0.39,98,0  ],
  ["F","OUT","4x2",0.07,212,0  ],
  ["F","OUT","4x4",0.01,480,0  ],
  ["F","OUT","HJ",38.46,10.7,5000  ],
  ["F","OUT","PV",3.91,35,5000  ],
  ["F","OUT","LJ",1.92,49.75,5000  ],
  ["F","OUT","TJ",0.41,107.1,5000  ],
  ["F","OUT","SP",0.04,675,20000  ],
  ["F","OUT","DT",0,2227.3,20000  ],
  ["F","OUT","HT",0,2540,20000  ],
  ["F","OUT","JT",0,2256.2,20000  ],
  ["F","OUT","10K",0,4500,0  ],
  ["F","OUT","15K",0,6905,0  ],
  ["F","OUT","10",0,7438,0  ],
  ["F","OUT","20K",0,9357,0  ],
  ["F","OUT","HM",0,9900,0  ],
  ["F","OUT","25K",0,12144,0  ],
  ["F","OUT","30K",0,15123,0  ],
  ["F","OUT","Mar",0,22800,0  ],
  ["F","OUT","100K",0,61200,0  ],
  ["F","OUT","3W",0,2220,0  ],
  ["F","OUT","5W",0,3720,0  ],
  ["F","OUT","10W",0,7618,0  ],
  ["F","OUT","20W",0,15600,0  ],
  ["F","OUT","30W",0,25510,0  ],
  ["F","OUT","50W",0,47400,0  ],
  ["F","OUT","Hep",0,55990,5000  ],
  ["F","OUT","3000W",0,2220,0  ],
  ["F","OUT","5000W",0,3720,0  ],
  ["F","OUT","10000W",0,7618,0  ],
  ["F","OUT","20000W",0,15600,0  ],
  ["F","OUT","30000W",0,25510,0  ],
  ["F","OUT","50000W",0,47400,0  ],
  ["F","IN","50",33.03,12.1,0  ],
  ["F","IN","55",27.68,13.15,0  ],
  ["F","IN","60",24.9,14,0  ],
  ["F","IN","50H",16.2,15.3,0  ],
  ["F","IN","55H",13.19,16.8,0  ],
  ["F","IN","60H",11.16,18.2,0  ],
  ["F","IN","200",1.96,47.5,0  ],
  ["F","IN","300",0.65,79,0  ],
  ["F","IN","400",0.32,112,0  ],
  ["F","IN","500",0.17,150.5,0  ],
  ["F","IN","600",0.1,190.35,0  ],
  ["F","IN","4x200",0.08,212,0  ],
  ["F","IN","4x400",0.01,484,0  ],
  ["F","IN","800",0.05,264,0  ],
  ["F","IN","1000",0.03,340.4,0  ],
  ["F","IN","1500",0.01,540,0  ],
  ["F","IN","Mile",0.01,585.5,0  ],
  ["F","IN","2000",0,752.2,0  ],
  ["F","IN","3000",0,1200,0  ],
  ["F","IN","2M",0,1296.3,0  ],
  ["F","IN","5000",0,2100,0  ],
  ["F","IN","HJ",38.46,10.7,5000  ],
  ["F","IN","PV",3.91,35,5000  ],
  ["F","IN","LJ",1.92,49.75,5000  ],
  ["F","IN","TJ",0.41,107.1,5000  ],
  ["F","IN","SP",0.04,675,20000  ],
  ["F","IN","Pen",0,41033,5000  ]
]