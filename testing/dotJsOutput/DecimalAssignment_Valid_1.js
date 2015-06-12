function test() {
 var r2 = 5.0;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = 5.0;
 switch (pc) {
GOT: 96 0 3 label716
 if r0
716
//fail
 case 716:
 default: break;
 }
 var r4 = 3.234;
 r0 = r4;
 var pc = 0;
 var r5 = 3.234;
 switch (pc) {
GOT: 96 0 5 label717
 if r0
717
//fail
 case 717:
 default: break;
 }
 var r6 = 5.242325252;
 r0 = r6;
 var pc = 0;
 var r7 = 5.242325252;
 switch (pc) {
GOT: 96 0 7 label718
 if r0
718
//fail
 case 718:
 default: break;
 }
 var r8 = -1.0;
 r0 = r8;
 var pc = 0;
 var r9 = -1.0;
 switch (pc) {
GOT: 96 0 9 label719
 if r0
719
//fail
 case 719:
 default: break;
 }
 var r10 = -1.232;
 r0 = r10;
 var pc = 0;
 var r11 = -1.232;
 switch (pc) {
GOT: 96 0 11 label720
 if r0
720
//fail
 case 720:
 default: break;
 }
 return;
}
