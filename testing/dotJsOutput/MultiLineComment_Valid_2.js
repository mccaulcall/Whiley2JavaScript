function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r0 = 5;
  var r1 = 5;
  if (r0 == r1) { pc = 1266; continue; }
  throw "fail";
  case 1266:
  return;
}}}
