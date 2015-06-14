function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r0 = true;
  var r1 = true;
  if (r0 == r1) { pc = 1265; continue; }
  throw "fail";
  case 1265:
  return;
}}}
