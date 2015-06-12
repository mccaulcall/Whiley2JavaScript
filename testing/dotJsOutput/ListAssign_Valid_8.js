function test() {
 var r3 = 1;
 var r4 = 2;
 var r5 = 3;
//newlist %6 = (%3, %4, %5) : [int]
 var r7 = 0;
//newlist %8 = (%7) : [int]
//newlist %9 = (%6, %8) : [[int]]
 r2 = r9;
 r0 = r2;
 r10 = r0;
 r1 = r10;
 var r11 = 3;
 var r12 = 4;
 var r13 = 5;
//newlist %14 = (%11, %12, %13) : [int]
 var r15 = 0;
 var r16 = 3;
 var r17 = 4;
 var r18 = 5;
//newlist %19 = (%16, %17, %18) : [int]
//update %1[%15] = %19 : [[int]] -> [[int]]
 var pc = 0;
 var r20 = 0;
 switch (pc) {
//indexof %21 = %0, %20 : [[int]]
 var r22 = 1;
 var r23 = 2;
 var r24 = 3;
//newlist %25 = (%22, %23, %24) : [int]
GOT: 96 21 25 label1192
 if r21
1192
//fail
 case 1192:
 default: break;
 }
 var pc = 0;
 var r26 = 1;
 switch (pc) {
//indexof %27 = %0, %26 : [[int]]
 var r28 = 0;
//newlist %29 = (%28) : [int]
GOT: 96 27 29 label1193
 if r27
1193
//fail
 case 1193:
 default: break;
 }
 var pc = 0;
 var r30 = 0;
 switch (pc) {
//indexof %31 = %1, %30 : [[int]]
 var r32 = 3;
 var r33 = 4;
 var r34 = 5;
//newlist %35 = (%32, %33, %34) : [int]
GOT: 96 31 35 label1194
 if r31
1194
//fail
 case 1194:
 default: break;
 }
 var pc = 0;
 var r36 = 1;
 switch (pc) {
//indexof %37 = %1, %36 : [[int]]
 var r38 = 0;
//newlist %39 = (%38) : [int]
GOT: 96 37 39 label1195
 if r37
1195
//fail
 case 1195:
 default: break;
 }
 return;
}
