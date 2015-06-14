function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 2;
  var r3 = 3;
  var r4 = r2 * r3;
  var r5 = 1;
  var r6 = r4 + r5;
  r1 = r6;
  r0 = r1;
  var r7 = 7;
  if (r0 == r7) { pc = 1067; continue; }
  throw "fail";
  case 1067:
  return;
}}}
