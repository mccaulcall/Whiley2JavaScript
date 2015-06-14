function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = [97,98,99,100,101,102,103,104,106,107,108];
  r2 = r3;
  r0 = r2;
  var r5 = 0;
  var r6 = 2;
   //sublist %7 = %0, %5, %6 : [int+]
  r4 = r7;
  r1 = r4;
  var r8 = [97,98];
  if (r1 == r8) { pc = 1866; continue; }
  throw "fail";
  case 1866:
  var r9 = 1;
  var r10 = 3;
   //sublist %11 = %0, %9, %10 : [int+]
  r1 = r11;
  var r12 = [98,99];
  if (r1 == r12) { pc = 1867; continue; }
  throw "fail";
  case 1867:
  var r13 = 2;
   //lengthof %14 = %0 : [int+]
   //sublist %15 = %0, %13, %14 : [int+]
  r1 = r15;
  var r16 = [99,100,101,102,103,104,106,107,108];
  if (r1 == r16) { pc = 1868; continue; }
  throw "fail";
  case 1868:
  return;
}}}
