function test() {
 var r4 = 1;
 var r5 = 1;
 var r6 = 2;
//newrecord %7 = (%4, %5, %6) : {int left,int op,int right}
 r3 = r7;
 r0 = r3;
 var r9 = 2;
 var r10 = 2;
//newrecord %11 = (%0, %9, %10) : {{int left,int op,int right} left,int op,int right}
 r8 = r11;
 r1 = r8;
 var r13 = 2;
 var r14 = 3;
 var r15 = 2;
//newrecord %16 = (%13, %14, %15) : {int left,int op,int right}
 var r17 = 2;
 var r18 = 2;
//newrecord %19 = (%16, %17, %18) : {{int left,int op,int right} left,int op,int right}
 r12 = r19;
 r2 = r12;
 var pc = 0;
 var r20 = 1;
 switch (pc) {
 var r21 = 1;
 var r22 = 2;
//newrecord %23 = (%20, %21, %22) : {int left,int op,int right}
GOT: 96 0 23 label1492
 if r0
1492
//fail
 case 1492:
 default: break;
 }
 var pc = 0;
 var r24 = 1;
 switch (pc) {
 var r25 = 1;
 var r26 = 2;
//newrecord %27 = (%24, %25, %26) : {int left,int op,int right}
 var r28 = 2;
 var r29 = 2;
//newrecord %30 = (%27, %28, %29) : {{int left,int op,int right} left,int op,int right}
GOT: 96 1 30 label1493
 if r1
1493
//fail
 case 1493:
 default: break;
 }
 var pc = 0;
 var r31 = 2;
 switch (pc) {
 var r32 = 3;
 var r33 = 2;
//newrecord %34 = (%31, %32, %33) : {int left,int op,int right}
 var r35 = 2;
 var r36 = 2;
//newrecord %37 = (%34, %35, %36) : {{int left,int op,int right} left,int op,int right}
GOT: 96 2 37 label1494
 if r2
1494
//fail
 case 1494:
 default: break;
 }
 return;
}
