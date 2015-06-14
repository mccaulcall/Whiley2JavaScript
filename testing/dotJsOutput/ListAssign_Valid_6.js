function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  var r4 = 2;
  var r5 = 4;
   //newlist %6 = (%3, %4, %5) : [int]
  r2 = r6;
  r0 = r2;
  r7 = r0;
  r1 = r7;
  var r8 = 3;
  var r9 = 2;
  var r10 = 3;
   //update %1[%9] = %10 : [int] -> [int]
  var r11 = 2;
   //indexof %12 = %1, %11 : [int]
   //lengthof %13 = %0 : [int]
  if (r12 == r13) { pc = 1184; continue; }
  throw "fail";
  case 1184:
  var r14 = 1;
  var r15 = 2;
  var r16 = 4;
   //newlist %17 = (%14, %15, %16) : [int]
  if (r0 == r17) { pc = 1185; continue; }
  throw "fail";
  case 1185:
  var r18 = 1;
  var r19 = 2;
  var r20 = 3;
   //newlist %21 = (%18, %19, %20) : [int]
  if (r1 == r21) { pc = 1186; continue; }
  throw "fail";
  case 1186:
  return;
}}}
