function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1234567891011121314151617181920;
  r1 = r2;
  r0 = r1;
  var r3 = 1;
  var r4 = r0 + r3;
  r0 = r4;
  var r5 = 1234567891011121314151617181921;
  if (r0 == r5) { pc = 1037; continue; }
  throw "fail";
  case 1037:
  return;
}}}
