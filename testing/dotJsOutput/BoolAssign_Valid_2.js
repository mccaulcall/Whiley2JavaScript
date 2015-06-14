function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = true;
  r2 = r3;
  r0 = r2;
  var r5 = false;
  r4 = r5;
  r1 = r4;
  var r6 = true;
  if (r0 == r6) { pc = 23; continue; }
  pc = 24; continue;
  case 23:
  var r7 = true;
  if (r0 == r7) { pc = 25; continue; }
  case 24:
  var r8 = false;
  pc = 26; continue;
  case 25:
  var r8 = true;
  case 26:
  var r9 = true;
  if (r8 == r9) { pc = 27; continue; }
  throw "fail";
  case 27:
  var r10 = true;
  if (r0 == r10) { pc = 28; continue; }
  pc = 29; continue;
  case 28:
  var r11 = true;
  if (r1 == r11) { pc = 30; continue; }
  case 29:
  var r12 = false;
  pc = 31; continue;
  case 30:
  var r12 = true;
  case 31:
  var r13 = false;
  if (r12 == r13) { pc = 32; continue; }
  throw "fail";
  case 32:
  var r14 = true;
  if (r1 == r14) { pc = 33; continue; }
  pc = 34; continue;
  case 33:
  var r15 = true;
  if (r0 == r15) { pc = 35; continue; }
  case 34:
  var r16 = false;
  pc = 36; continue;
  case 35:
  var r16 = true;
  case 36:
  var r17 = false;
  if (r16 == r17) { pc = 37; continue; }
  throw "fail";
  case 37:
  var r18 = true;
  if (r1 == r18) { pc = 38; continue; }
  pc = 39; continue;
  case 38:
  var r19 = true;
  if (r1 == r19) { pc = 40; continue; }
  case 39:
  var r20 = false;
  pc = 41; continue;
  case 40:
  var r20 = true;
  case 41:
  var r21 = false;
  if (r20 == r21) { pc = 42; continue; }
  throw "fail";
  case 42:
  var r22 = true;
  if (r1 == r22) { pc = 43; continue; }
  pc = 44; continue;
  case 43:
  throw "fail";
  case 44:
  var r23 = true;
  if (r0 == r23) { pc = 45; continue; }
  pc = 46; continue;
  case 45:
  pc = 47; continue;
  case 46:
  throw "fail";
  case 47:
  return;
}}}
