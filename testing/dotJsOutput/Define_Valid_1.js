function test() {
 var r5 = 1;
 var r6 = 2;
 var r7 = 3;
//newset %8 = (%5, %6, %7) : {int}
 r4 = r8;
 r0 = r4;
 var r10 = 1;
 var r11 = 2;
 var r12 = 3;
//newlist %13 = (%10, %11, %12) : [int]
 r9 = r13;
 r1 = r9;
 var r15 = 1;
 var r16 = 2;
//newrecord %17 = (%15, %16) : {int x,int y}
 r14 = r17;
 r2 = r14;
//fieldload %19 = %2 x : {int x,int y}
 r18 = r19;
 r3 = r18;
 var pc = 0;
 var r20 = 1;
 switch (pc) {
GOT: 96 3 20 label721
 if r3
721
//fail
 case 721:
 default: break;
 }
 var pc = 0;
//lengthof %21 = %0 : {int}
 switch (pc) {
 var r22 = 3;
GOT: 96 21 22 label722
 if r21
722
//fail
 case 722:
 default: break;
 }
 var pc = 0;
 var r23 = 0;
 switch (pc) {
//indexof %24 = %1, %23 : [int]
 var r25 = 1;
GOT: 96 24 25 label723
 if r24
723
//fail
 case 723:
 default: break;
 }
 return;
}
