function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 0;
  var r3 = true;
   //newrecord %4 = (%2, %3) : {int code,bool flag}
  r1 = r4;
  r0 = r1;
   //fieldload %5 = %0 flag : {int code,bool flag}
  var r6 = true;
  if (r5 == r6) { pc = 148; continue; }
  pc = 149; continue;
  case 148:
  pc = 150; continue;
  throw "fail";
  case 150:
  pc = 151; continue;
  case 149:
  throw "fail";
  case 151:
  return;
}}}
