function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 2;
  var r4 = 3;
   //newrecord %5 = (%3, %4) : {int f1,int f2}
  r2 = r5;
  r0 = r2;
  var r7 = 1;
  var r8 = 3;
   //newrecord %9 = (%7, %8) : {int f1,int f2}
  r6 = r9;
  r1 = r6;
  if (r0 != r1) { pc = 1463; continue; }
  throw "fail";
  case 1463:
  var r10 = 1;
  var r11 = 1;
   //update %0.f1 = %11 : {int f1,int f2} -> {int f1,int f2}
   //assume 
   //assume 
  if (r0 == r1) { pc = 1466; continue; }
  throw "fail";
  case 1466:
  return;
}}}
