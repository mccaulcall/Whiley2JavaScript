function test() {
 var r2 = 14897;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = 14897;
 switch (pc) {
GOT: 96 0 3 label1628
 if r0
1628
//fail
 case 1628:
 default: break;
 }
 return;
}
