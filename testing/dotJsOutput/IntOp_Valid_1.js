function test() {
 var r2 = 112233445566778899;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = 112233445566778899;
 switch (pc) {
GOT: 96 0 3 label1071
 if r0
1071
//fail
 case 1071:
 default: break;
 }
 var r4 = 1;
 var r5 = r0 + r4;
 r0 = r5;
 var pc = 0;
 var r6 = 112233445566778900;
 switch (pc) {
GOT: 96 0 6 label1072
 if r0
1072
//fail
 case 1072:
 default: break;
 }
 var r7 = 556;
 var r8 = r0 - r7;
 r0 = r8;
 var pc = 0;
 var r9 = 112233445566778344;
 switch (pc) {
GOT: 96 0 9 label1073
 if r0
1073
//fail
 case 1073:
 default: break;
 }
 var r10 = 123;
 var r11 = r0 * r10;
 r0 = r11;
 var pc = 0;
 var r12 = 13804713804713736312;
 switch (pc) {
GOT: 96 0 12 label1074
 if r0
1074
//fail
 case 1074:
 default: break;
 }
 var r13 = 2;
 var r14 = r0 / r13;
 r0 = r14;
 var pc = 0;
 var r15 = 6902356902356868156;
 switch (pc) {
GOT: 96 0 15 label1075
 if r0
1075
//fail
 case 1075:
 default: break;
 }
 return;
}
