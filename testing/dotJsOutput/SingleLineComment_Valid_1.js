function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r0 = 1;
  var r1 = 2;
  if (r0 != r1) { pc = 1819; continue; }
  throw "fail";
  case 1819:
  return;
}}}
