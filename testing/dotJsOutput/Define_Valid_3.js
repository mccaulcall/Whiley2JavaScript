function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1;
  r1 = r2;
  r0 = r1;
  var r3 = 1;
  if (r0 == r3) { pc = 726; continue; }
  throw "fail";
  case 726:
  return;
}}}
