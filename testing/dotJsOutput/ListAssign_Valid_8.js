function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
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
  var r20 = 0;
   //indexof %21 = %0, %20 : [[int]]
  var r22 = 1;
  var r23 = 2;
  var r24 = 3;
   //newlist %25 = (%22, %23, %24) : [int]
  if (r21 == r25) { pc = 1192; continue; }
  throw "fail";
  case 1192:
  var r26 = 1;
   //indexof %27 = %0, %26 : [[int]]
  var r28 = 0;
   //newlist %29 = (%28) : [int]
  if (r27 == r29) { pc = 1193; continue; }
  throw "fail";
  case 1193:
  var r30 = 0;
   //indexof %31 = %1, %30 : [[int]]
  var r32 = 3;
  var r33 = 4;
  var r34 = 5;
   //newlist %35 = (%32, %33, %34) : [int]
  if (r31 == r35) { pc = 1194; continue; }
  throw "fail";
  case 1194:
  var r36 = 1;
   //indexof %37 = %1, %36 : [[int]]
  var r38 = 0;
   //newlist %39 = (%38) : [int]
  if (r37 == r39) { pc = 1195; continue; }
  throw "fail";
  case 1195:
  return;
}}}
