function f(r0) {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  r2 = r0;
  r1 = r2;
  if (r0 == r1) { pc = 14; continue; }
  throw "fail";
  case 14:
  return;
}}}