function test() {
 var r4 = 8;
 r3 = r4;
 r0 = r3;
 var r6 = 1;
 r5 = r6;
 r1 = r5;
 var r8 = r0 * r0;
 var r9 = r8 - r1;
 r7 = r9;
 r2 = r7;
 var pc = 0;
 var r10 = 63;
 switch (pc) {
GOT: 96 2 10 label1068
 if r2
1068
//fail
 case 1068:
 default: break;
 }
 var r11 = r0 * r0;
 var r12 = r11 - r1;
 r2 = r12;
 var pc = 0;
 var r13 = 63;
 switch (pc) {
GOT: 96 2 13 label1069
 if r2
1069
//fail
 case 1069:
 default: break;
 }
 var r14 = r0 - r1;
 var r15 = r0 * r14;
 r2 = r15;
 var pc = 0;
 var r16 = 56;
 switch (pc) {
GOT: 96 2 16 label1070
 if r2
1070
//fail
 case 1070:
 default: break;
 }
 return;
}
