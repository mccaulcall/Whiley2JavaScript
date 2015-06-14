function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 5.0;
  r1 = r2;
  r0 = r1;
  var r3 = 5.0;
  if (r0 == r3) { pc = 716; continue; }
  throw "fail";
  case 716:
  var r4 = 3.234;
  r0 = r4;
  var r5 = 3.234;
  if (r0 == r5) { pc = 717; continue; }
  throw "fail";
  case 717:
  var r6 = 5.242325252;
  r0 = r6;
  var r7 = 5.242325252;
  if (r0 == r7) { pc = 718; continue; }
  throw "fail";
  case 718:
  var r8 = -1.0;
  r0 = r8;
  var r9 = -1.0;
  if (r0 == r9) { pc = 719; continue; }
  throw "fail";
  case 719:
  var r10 = -1.232;
  r0 = r10;
  var r11 = -1.232;
  if (r0 == r11) { pc = 720; continue; }
  throw "fail";
  case 720:
  return;
}}}
