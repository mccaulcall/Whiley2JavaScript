function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 112233445566778899;
  r1 = r2;
  r0 = r1;
  var r3 = 112233445566778899;
  if (r0 == r3) { pc = 1071; continue; }
  throw "fail";
  case 1071:
  var r4 = 1;
  var r5 = r0 + r4;
  r0 = r5;
  var r6 = 112233445566778900;
  if (r0 == r6) { pc = 1072; continue; }
  throw "fail";
  case 1072:
  var r7 = 556;
  var r8 = r0 - r7;
  r0 = r8;
  var r9 = 112233445566778344;
  if (r0 == r9) { pc = 1073; continue; }
  throw "fail";
  case 1073:
  var r10 = 123;
  var r11 = r0 * r10;
  r0 = r11;
  var r12 = 13804713804713736312;
  if (r0 == r12) { pc = 1074; continue; }
  throw "fail";
  case 1074:
  var r13 = 2;
  var r14 = r0 / r13;
  r0 = r14;
  var r15 = 6902356902356868156;
  if (r0 == r15) { pc = 1075; continue; }
  throw "fail";
  case 1075:
  return;
}}}
