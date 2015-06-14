function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  r2 = r3;
  r0 = r2;
  var r5 = 2;
  r4 = r5;
  r1 = r4;
  var r6 = r0 + r1;
  var r7 = 3;
  if (r6 == r7) { pc = 1036; continue; }
  throw "fail";
  case 1036:
  return;
}}}
