function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = true;
  r1 = r2;
  r0 = r1;
  var r3 = true;
  if (r0 == r3) { pc = 21; continue; }
  throw "fail";
  case 21:
  var r4 = false;
  r0 = r4;
  var r5 = false;
  if (r0 == r5) { pc = 22; continue; }
  throw "fail";
  case 22:
  return;
}}}
