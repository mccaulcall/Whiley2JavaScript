function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 0;
  var r3 = 0;
  if (r2 != r3) { pc = 1165; continue; }
  var r4 = 1;
  var r5 = 2;
  var r6 = 3;
   //newlist %7 = (%4, %5, %6) : [int]
  r0 = r7;
  pc = 1166; continue;
  case 1165:
  var r8 = 1;
   //newlist %9 = (%8) : [int]
  var r10 = 2;
  var r11 = 3;
   //newlist %12 = (%10, %11) : [int]
  var r13 = 5;
   //newlist %14 = (%13) : [int]
   //newlist %15 = (%9, %12, %14) : [[int]]
  r0 = r15;
  case 1166:
  var r16 = 1;
  var r17 = 0;
  var r18 = 1;
   //update %0[%17] = %18 : [[int]]|[int] -> [int|[int]]
   //assume 
  return;
}}}
