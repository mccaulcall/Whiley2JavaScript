function test() {
 var r2 = 1;
 var r3 = 2;
 var r4 = 3;
//newset %5 = (%2, %3, %4) : {int}
 r1 = r5;
 r0 = r1;
 var pc = 0;
 var r6 = 1;
 switch (pc) {
GOT: 102 6 0 label1668
 if r6
1668
//fail
 case 1668:
 default: break;
 }
 var pc = 0;
 var r7 = 5;
 switch (pc) {
GOT: 102 7 0 label1669
 if r7
1669
//goto label1670
 case 1669:
//fail
 case 1670:
 default: break;
 }
 return;
}
