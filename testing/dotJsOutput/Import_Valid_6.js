function test() {
 var r3 = 1;
 r2 = r3;
 r0 = r2;
 var r5 = 2;
 r4 = r5;
 r1 = r4;
 var pc = 0;
 var r6 = r0 + r1;
 switch (pc) {
 var r7 = 3;
GOT: 96 6 7 label1036
 if r6
1036
//fail
 case 1036:
 default: break;
 }
 return;
}
