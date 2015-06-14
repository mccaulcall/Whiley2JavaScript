function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r0 = 1;
  var r1 = 1;
  if (r0 == r1) { pc = 20; continue; }
  throw "fail";
  case 20:
  return;
}}}
