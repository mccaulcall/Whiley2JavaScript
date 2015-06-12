function test() {
 var r2 = 1234567891011121314151617181920;
 r1 = r2;
 r0 = r1;
 var r3 = 1;
 var r4 = r0 + r3;
 r0 = r4;
 var pc = 0;
 var r5 = 1234567891011121314151617181921;
 switch (pc) {
GOT: 96 0 5 label1037
 if r0
1037
//fail
 case 1037:
 default: break;
 }
 return;
}
