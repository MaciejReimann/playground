import { minTwoDigits, getTeamStatistics } from './getTeamStatistics'

describe('getTeamStatistics', () => {
    // it('returns "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34" when given "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"', () => {
    //     expect(
    //         getTeamStatistics('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')
    //     ).toEqual('Range: 01|01|18 Average: 01|38|05 Median: 01|32|34')
    // })

    // it('returns "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00" when given "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"', () => {
    //     expect(
    //         getTeamStatistics(
    //             '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41'
    //         )
    //     ).toEqual('Range: 00|31|17 Average: 02|26|18 Median: 02|22|00')
    // })

    // it('"Range: 00|00|00 Average: 00|00|00 Median: 00|00|00" when given "00|00|00" ', () => {
    //     expect(getTeamStatistics('00|00|00')).toEqual(
    //         'Range: 00|00|00 Average: 00|00|00 Median: 00|00|00'
    //     )
    // })

    it('"Range: 00|00|00 Average: 00|00|00 Median: 00|00|00" when given "00|00|00" ', () => {
        expect(
            getTeamStatistics(
                '12|20|14, 02|15|59, 2|47|16, 9|22|34, 1|26|37, 9|16|30, 00|16|16, 02|15|59, 02|15|59, 1|19|34, 2|32|34, 1|16|30, 2|22|00, 2|47|16, 02|17|20'
            )
        ).toEqual('Range: 12|03|58 Average: 03|39|30 Median: 02|17|20')
    })
})

// describe('minTwoDigits', () => {
//     it('converts 0 to 00', () => {
//         expect(minTwoDigits(0)).toEqual('00')
//     })
//     it('converts 1 to 01', () => {
//         expect(minTwoDigits(1)).toEqual('01')
//     })
//     it('converts 10 to 10', () => {
//         expect(minTwoDigits(10)).toEqual('10')
//     })
//     it('converts 11 to 11', () => {
//         expect(minTwoDigits(11)).toEqual('11')
//     })
// })

// describe("Basic tests",function() {
//     Test.assertEquals(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"),
//         "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
//     Test.assertEquals(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"),
//         "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
//     Test.assertEquals(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"),
//         "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57")
//     Test.assertEquals(stat("0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0"),
//         "Range: 00|07|34 Average: 00|17|47 Median: 00|16|48")
//     Test.assertEquals(stat("11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11"),
//         "Range: 04|03|04 Average: 11|14|36 Median: 11|18|59")
//     Test.assertEquals(stat("1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11"),
//         "Range: 00|11|20 Average: 01|19|36 Median: 01|18|41")
//     })

//     describe("Random tests",function(){
//         function randint(a,b) {
//             return Math.floor(Math.random() * (b - a + 1) + a);
//         }
//         function time2snd1231(s) {
//             let arr = s.split('|').map(function (x) { return ~~x } );
//             let snd = 3600 * arr[0] + 60 * arr[1] + arr[2];
//             return snd;
//         }
//         function pad1231(num, size) {
//             let s = num + "";
//             while (s.length < size) s = "0" + s;
//             return s;
//         }
//         function snd2time1231(m) {
//             let n = ~~m;
//             let h = Math.floor(m / 3600);
//             let re = m % 3600;
//             let mn = Math.floor(re / 60);
//             let s = re % 60;
//             return pad1231(h, 2) + "|" + pad1231(mn, 2) + "|" + pad1231(s, 2)
//         }
//         function stat1231(strg) {
//             if (strg === "")
//                 return "";
//             let r = strg.split(',').map(function(x) { return time2snd1231(x) } ).sort(function(a, b) { return a-b } );
//             let lg = r.length;
//             let avg = ~~(r.reduce(function(s, x) { return (s + x) } ) / lg);
//             let rge = ~~(r[lg - 1] -  r[0]);
//             let md = ~~((r[ ~~((lg - 1) / 2) ] + r[ ~~(lg / 2) ]) / 2);
//             return "Range: " + pad1231(snd2time1231(rge)) + " Average: " +
//                 pad1231(snd2time1231(avg)) + " Median: " + pad1231(snd2time1231(md));
//         }
//         function comb() {
//             let a = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17";
//             let b = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41";
//             let c = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17";
//             let d = "00|15|59, 00|16|16, 00|17|20, 00|22|34, 00|19|34, 00|15|17";
//             let e = "11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11";
//             let f = "1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11";

//             let k = a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + f;
//             let s = k.split(', ');
//             let l = s.length;
//             let res = "";
//             let i = 0;
//             let nb = randint(0, 20);
//             while (i < nb) {
//                 a = randint(0, l - 1);
//                 res = res + s[a];
//                 if (i < nb - 1) res += ", ";
//                 i += 1
//             }
//             return res
//         }

//         for (let i = 0; i < 50; i++){
//             let a = comb();
//             it("Test number : " + i,
//                 function(){
//                     Test.assertEquals(stat(a), stat1231(a), "It should work with random inputs")
//                 }
//             )
//         }
//     })
