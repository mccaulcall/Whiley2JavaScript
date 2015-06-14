function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 0;
  var r3 = true;
   //newrecord %4 = (%2, %3) : {int code,bool flag}
  r1 = r4;
  r0 = r1;
  var r5 = 0;
  var r6 = true;
   //newrecord %7 = (%5, %6) : {int code,bool flag}
  if (r0 == r7) { pc = 146; continue; }
  throw "fail";
  case 146:
  var r8 = false;
  var r9 = false;
   //update %0.flag = %9 : {int code,bool flag} -> {int code,bool flag}
  var r10 = 0;
  var r11 = false;
   //newrecord %12 = (%10, %11) : {int code,bool flag}
  if (r0 == r12) { pc = 147; continue; }
  throw "fail";
  case 147:
  return;
}}}
