function test() {
 var r3 = [97,98,99,100,101,102,103,104,106,107,108];
 r2 = r3;
 r0 = r2;
 var r5 = 0;
 var r6 = 2;
//sublist %7 = %0, %5, %6 : [int+]
 r4 = r7;
 r1 = r4;
 var pc = 0;
 var r8 = [97,98];
 switch (pc) {
GOT: 96 1 8 label1866
 if r1
1866
//fail
 case 1866:
 default: break;
 }
 var r9 = 1;
 var r10 = 3;
//sublist %11 = %0, %9, %10 : [int+]
 r1 = r11;
 var pc = 0;
 var r12 = [98,99];
 switch (pc) {
GOT: 96 1 12 label1867
 if r1
1867
//fail
 case 1867:
 default: break;
 }
 var r13 = 2;
//lengthof %14 = %0 : [int+]
//sublist %15 = %0, %13, %14 : [int+]
 r1 = r15;
 var pc = 0;
 var r16 = [99,100,101,102,103,104,106,107,108];
 switch (pc) {
GOT: 96 1 16 label1868
 if r1
1868
//fail
 case 1868:
 default: break;
 }
 return;
}
