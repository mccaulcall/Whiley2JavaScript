function test() {
 var r2 = 123;
 r1 = r2;
 r0 = r1;
 var pc = 0;
 var r3 = 123;
 switch (pc) {
GOT: 96 0 3 label1618
 if r0
1618
//fail
 case 1618:
 default: break;
 }
 return;
}
