import { expect } from 'chai';
import Athlib from '../index.js';

var ESAA_2015_HJ = [
    //Eglish Schools Senior Boys 2015 - epic jumpoff ending in a draw
    //We did not include all other jumpers
    //See http://www.esaa.net/v2/2015/tf/national/results/fcards/tf15-sb-field.pdf
    //and http://www.englandathletics.org/england-athletics-news/great-action-at-the-english-schools-aa-championships
    ["place", "order", "bib", "first_name", "last_name", "team", "category",
        "1.81", "1.86", "1.91", "1.97", "2.00", "2.03", "2.06", "2.09", "2.12", "2.12", "2.10", "2.12", "2.10", "2.12"],
    ["", 1, 85, "Harry", "Maslen", "WYork", "SB", "o", "o", "o", "xo", "xxx"],
    ["", 2, 77, "Jake", "Field", "Surrey", "SB", "xxx"],
    ["1", 4, 53, "William", "Grimsey", "Midd", "SB", "", "", "", "o", "o", "o", "o", "o", "xxx", "x", "o", "x", "o", "x"],
    ["1", 5, 81, "Rory", "Dwyer", "Warks",     "SB", "", "", "", "o", "o", "o", "o", "o", "xxx", "x", "o", "x", "o", "x"]
    ];

var _1066 = [
	// based on above, but we have a winner
	["place", "order", "bib", "first_name", "last_name", "team", "category",
		"1.81", "1.86", "1.91", "1.97", "2.00", "2.03", "2.06", "2.09", "2.12", "2.12", "2.10", "2.12", "2.10", "2.12", "2.11"],
	["", 1, '85', "Dafydd", "Briton", "WYork", "SB",
		"o",    "o",    "o",    "xo",   "xxx"],
	["", 2, '77', "Jake", "Saxon", "Surrey", "SB",
		"xxx"],
	["1", 4, '53', "William", "Norman", "Midd", "SB",
    "", "", "", "o", "o", "o", "o", "o", "xxx", "x", "o", "x", "o", "x", "x"],
	["1", 5, '81', "Harald", "England", "Warks", "SB",
    "", "", "", "o", "o", "o", "o", "o", "xxx", "x", "o", "x", "o", "x", "o"]
	];

var RIO_MENS_HJ = [  // pasted from Wikipedia
    ["place", "order", "bib", "first_name", "last_name", "team", "category", "2.20", "2.25", "2.29", "2.33", "2.36", "2.38", "2.40", "best", "note"],
    ["1", 7, 2197, "Derek", "Drouin", "CAN", "M", "o", "o", "o", "o", "o", "o", "x", 2.38, ""],
    ["2", 9, 2878, "Mutaz", "Essa Barshim", "QAT", "M", "o", "o", "o", "o", "o", "xxx", "", 2.36, ""],
    ["3", 3, 3026, "Bohdan", "Bondarenko", "UKR", "M", "-", "o", "-", "o", "-", "xx-", "x", 2.33, ""],
    ["4=", 8, 2456, "Robert", "Grabarz", "GBR", "M", "o", "xo", "o", "o", "xxx", "", "", 2.33, "=SB"],
    ["4=", 15, 3032, "Andriy", "Protsenko", "UKR", "M", "o", "o", "xo", "o", "xxx", "", "", 2.33, "SB"],
    ["6", 6, 3084, "Erik", "Kynard", "USA", "M", "o", "xo", "o", "xxo", "xxx", "", "", 2.33, ""],
    ["7=", 5, 2961, "Majededdin", "Ghazal", "SYR", "M", "o", "o", "o", "xxx", "", "", "", 2.29, ""],
    ["7=", 12, 2294, "Kyriakos", "Ioannou", "CYP", "M", "o", "o", "o", "xxx", "", "", "", 2.29, ""],
    ["7=", 13, 2076, "Donald", "Thomas", "BAH", "M", "o", "o", "o", "xxx", "", "", "", 2.29, ""],
    ["10", 1, 2182, "Tihomir", "Ivanov", "BUL", "M", "o", "xo", "o", "xxx", "", "", "", 2.29, "=PB"],
    ["11", 10, 2062, "Trevor", "Barry", "BAH", "M", "o", "o", "xxx", "", "", "", "", 2.25, ""],
    ["12", 4, 2293, "Dimitrios", "Chondrokoukis", "M", "CYP", "xo", "o", "xxx", "", "", "", "", 2.25, ""],
    ["13", 11, 2871, "Luis", "Castro", "PUR", "M", "o", "xxo", "xxx", "", "", "", "", 2.25, ""],
    ["14", 14, 2297, "Jaroslav", "Bába", "CZE", "M", "o", "xxx", "", "", "", "", "", 2.2, ""],
    ["15", 2, 2052, "Brandon", "Starc", "AUS", "M", "xo", "xxx", "", "", "", "", "", 2.2, ""]
    ];

function createEmptyCompetition(matrix){
    //Creates from an array similar to above; named athletes with bibs
    var c = Athlib.HighJumpCompetition();
    var i, j;
    for(i=1;i<matrix.length;i++){
        var kwds={};
        for(j=1;j<7;j++) kwds[matrix[0][j]] = matrix[i][j];
        c.addJumper(kwds);
        }
    return c;
    }

describe('Given an instance of Athlib.HighJumpCompetition', function(){
  describe('Tests basic creation of athletes with names and bibs', function(){
    var c=createEmptyCompetition(ESAA_2015_HJ);
    it('last of jumpers should be named Dwyer',()=>{
        expect(c.jumpers[c.jumpers.length-1].last_name).to.be.equal('Dwyer');
        });
    it('jumpersByBib[85] should be named Maslen',()=>{
        expect(c.jumpersByBib[85].last_name).to.be.equal('Maslen');
        });
    });
  describe('Tests progression',function(){
    var c = createEmptyCompetition(ESAA_2015_HJ);
    var h1 = 1.81;
    c.setBarHeight(h1);

    // round 1
    c.cleared(85);

    var j = c.jumpersByBib[85];
    it("'bib85 expect ['o']",()=>{
        expect(c._compareKeys(j.attemptsByHeight,['o'])).to.be.equal(0);
        });
    it("'expect highest cleared="+h1,()=>{
        expect(j.highestCleared).to.be.equal(h1);
        });
    c.failed(77);
    c.failed(77);
    c.failed(77);

    var jake_field = c.jumpersByBib[77];
    it("'expect highest cleared=0",()=>{
        expect(jake_field.highestCleared).to.be.equal(0);
        });
    it("jake_field expect ['xxx']",()=>{
        expect(c._compareKeys(jake_field.attemptsByHeight,['xxx'])).to.be.equal(0);
        });
    it("'jake_field eliminated true",()=>{
        expect(jake_field.eliminated).to.be.equal(true);
        });
    var harry_maslen = c.jumpersByBib[85];

    //attempt at fourth jump should fail
    it("'jake_field 4th jump not allowed",()=>{
        var r=0,e;
        try{
            c.failed(77);
            }
        catch(e){
            r=1;
            }
        expect(r).to.be.equal(1);
        });
    // the rules do not define whether someone who failed
    // 3 times at the first height is 'worse' then someone
    // who has not jumped at all.  Only relevant at interim
    // stage.  Should refine code to have a 'jumped_yet'
    // fourth key.
    // it("'jake_field 4th",()=>{
    //      expect(jake_field.place).to.be.equal(4);
    //  });
    //self.assertEquals(harry_maslen.place, 1)
    it("harry_maslen 1st",()=>{
        expect(harry_maslen.place).to.be.equal(1);
        });
    });
  describe('Test replay to jumpoff',function(){
		// Run through to where the jumpoff began - ninth bar position
		const c = Athlib.HighJumpCompetition.fromMatrix(ESAA_2015_HJ,9);

		// see who is winning
		const maslen = c.jumpersByBib['85'];
		const field = c.jumpersByBib['77'];
		const grimsey = c.jumpersByBib['53'];
		const dwyer = c.jumpersByBib['81'];

		it("field.place == 4",()=>{expect(field.place).to.be.equal(4)});
		it("maslen.place == 3",()=>{expect(maslen.place).to.be.equal(3)});
		it("grimsey.place == 1",()=>{expect(grimsey.place).to.be.equal(1)});
		it("dwyer.place == 1",()=>{expect(dwyer.place).to.be.equal(1)});
		it("c.remaining.length == 2",()=>{expect(c.remaining.length).to.be.equal(2)});
		it("c.state == jumpoff",()=>{expect(c.state).to.be.equal('jumpoff')});
    });
  describe('Test replay through jumpoff',function(){
		// Run through to where the jumpoff began - ninth bar position
		const c = Athlib.HighJumpCompetition.fromMatrix(ESAA_2015_HJ);
    it("53 is not allowed to jump again",()=>{
        var r=0,e;
        try{
            c.failed('53');
            }
        catch(e){
            r=1;
            }
        expect(r).to.be.equal(1);
        });

		// see who is winning
		const maslen = c.jumpersByBib['85'];
		const field = c.jumpersByBib['77'];
		const grimsey = c.jumpersByBib['53'];
		const dwyer = c.jumpersByBib['81'];

		it("field.place == 4",()=>{expect(field.place).to.be.equal(4)});
		it("maslen.place == 3",()=>{expect(maslen.place).to.be.equal(3)});
		it("grimsey.place == 1",()=>{expect(grimsey.place).to.be.equal(1)});
		it("dwyer.place == 1",()=>{expect(dwyer.place).to.be.equal(1)});
		it("c.remaining.length == 2",()=>{expect(c.remaining.length).to.be.equal(2)});
		it("c.state == jumpoff",()=>{expect(c.state).to.be.equal('jumpoff')});
    });
  describe('Test replay jumpoff and finish',function(){
		// Run through to where the jumpoff began - ninth bar position
		const c = Athlib.HighJumpCompetition.fromMatrix(_1066);
    it("53 is not allowed to jump again",()=>{
        var r=0,e;
        try{
            c.failed('53');
            }
        catch(e){
            r=1;
            }
        expect(r).to.be.equal(1);
        });
    it("81 is not allowed to jump again",()=>{
        var r=0,e;
        try{
            c.failed('81');
            }
        catch(e){
            r=1;
            }
        expect(r).to.be.equal(1);
        });

		// see who is winning
		const briton = c.jumpersByBib['85'];
		const saxon = c.jumpersByBib['77'];
		const norman = c.jumpersByBib['53'];
		const england = c.jumpersByBib['81'];

		it("saxon.place == 4",()=>{expect(saxon.place).to.be.equal(4)});
		it("briton.place == 3",()=>{expect(briton.place).to.be.equal(3)});
		it("norman.place == 2",()=>{expect(norman.place).to.be.equal(2)});
		it("england.place == 1",()=>{expect(england.place).to.be.equal(1)});
		it("c.remaining.length == 1",()=>{expect(c.remaining.length).to.be.equal(1)});
		it("c.state == won",()=>{expect(c.state).to.be.equal('finished')});
    it("england.highestCleared == 2.11",()=>england.highestCleared==2.11);

		it("can't set height 2.12 in finished competition",() => {
        var r=0, e;
        try {
          c.setBarHeight(2.12);
        } catch(e) {
         r=1;
        }
       return r===1;
      });
    });
  describe('Reproduce Rio Olympic results',function(){
        // Run through to where the jumpoff began - ninth bar position
        const c = Athlib.HighJumpCompetition.fromMatrix(RIO_MENS_HJ);

        it("drouin.place == 1",()=>{expect(c.jumpersByBib['2197'].place).to.be.equal(1)});
        it("barshim.place == 2",()=>{expect(c.jumpersByBib['2878'].place).to.be.equal(2)});
        it("bondarenko.place == 3",()=>{expect(c.jumpersByBib['3026'].place).to.be.equal(3)});
        it("grabarz.place == 4",()=>{expect(c.jumpersByBib['2456'].place).to.be.equal(4)});
        it("protsenko.place == 4",()=>{expect(c.jumpersByBib['3032'].place).to.be.equal(4)});
        it("kynard.place == 6",()=>{expect(c.jumpersByBib['3084'].place).to.be.equal(6)});
        it("ghazal.place == 7",()=>{expect(c.jumpersByBib['2961'].place).to.be.equal(7)});
        it("iouannou.place == 7",()=>{expect(c.jumpersByBib['2294'].place).to.be.equal(7)});
        it("thomas.place == 7",()=>{expect(c.jumpersByBib['2076'].place).to.be.equal(7)});
        it("ivanov.place == 10",()=>{expect(c.jumpersByBib['2182'].place).to.be.equal(10)});
        it("barry.place == 11",()=>{expect(c.jumpersByBib['2062'].place).to.be.equal(11)});
        it("chondrokoukis.place == 12",()=>{expect(c.jumpersByBib['2293'].place).to.be.equal(12)});
        it("castro.place == 13",()=>{expect(c.jumpersByBib['2871'].place).to.be.equal(13)});
        it("bába.place == 14",()=>{expect(c.jumpersByBib['2297'].place).to.be.equal(14)});
        it("starc.place == 15",()=>{expect(c.jumpersByBib['2052'].place).to.be.equal(15)});
    });
});
