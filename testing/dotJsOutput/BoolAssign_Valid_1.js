function test() {
 var r2 = true;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = true;
 switch (pc) {
GOT: 96 0 3 label21
 if r0
21
//fail
 case 21:
 default: break;
 }
 var r4 = false;
 r0 = r4;
 var pc = 0;
 var r5 = false;
 switch (pc) {
GOT: 96 0 5 label22
 if r0
22
//fail
 case 22:
 default: break;
 }
 return;
}
