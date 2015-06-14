function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 14897;
  r1 = r2;
  r0 = r1;
  var r3 = 14897;
  if (r0 == r3) { pc = 1629; continue; }
  throw "fail";
  case 1629:
  return;
}}}
