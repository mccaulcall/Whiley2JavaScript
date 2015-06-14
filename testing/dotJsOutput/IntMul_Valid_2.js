function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r4 = 8;
  r3 = r4;
  r0 = r3;
  var r6 = 1;
  r5 = r6;
  r1 = r5;
  var r8 = r0 * r0;
  var r9 = r8 - r1;
  r7 = r9;
  r2 = r7;
  var r10 = 63;
  if (r2 == r10) { pc = 1068; continue; }
  throw "fail";
  case 1068:
  var r11 = r0 * r0;
  var r12 = r11 - r1;
  r2 = r12;
  var r13 = 63;
  if (r2 == r13) { pc = 1069; continue; }
  throw "fail";
  case 1069:
  var r14 = r0 - r1;
  var r15 = r0 * r14;
  r2 = r15;
  var r16 = 56;
  if (r2 == r16) { pc = 1070; continue; }
  throw "fail";
  case 1070:
  return;
}}}
