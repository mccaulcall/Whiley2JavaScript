function test() {
 var r2 = 1;
//newrecord %3 = (%2) : {int f}
 r1 = r3;
 r0 = r1;
//fieldload %4 = %0 f : {int f}
 var r5 = 1;
 var r6 = r4 + r5;
//fieldload %7 = %0 f : {int f}
 var r8 = 1;
 var r9 = r7 + r8;
//update %0.f = %9 : {int f} -> {int f}
 var pc = 0;
 var r10 = 2;
 switch (pc) {
//newrecord %11 = (%10) : {int f}
GOT: 96 0 11 label1879
 if r0
1879
//fail
 case 1879:
 default: break;
 }
 return;
}
