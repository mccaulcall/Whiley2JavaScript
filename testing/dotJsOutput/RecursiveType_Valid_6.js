function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 123;
  r1 = r2;
  r0 = r1;
  var r3 = 123;
  if (r0 == r3) { pc = 1618; continue; }
  throw "fail";
  case 1618:
  return;
}}}
