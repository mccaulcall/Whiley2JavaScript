function test() {
 var r2 = 1;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = 1;
 switch (pc) {
GOT: 96 0 3 label726
 if r0
726
//fail
 case 726:
 default: break;
 }
 return;
}
