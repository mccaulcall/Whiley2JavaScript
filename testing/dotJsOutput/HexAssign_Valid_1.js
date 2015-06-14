function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 200;
  r1 = r2;
  r0 = r1;
  var r3 = 200;
  if (r0 == r3) { pc = 986; continue; }
  throw "fail";
  case 986:
  var r4 = 1;
  r0 = r4;
  var r5 = 1;
  if (r0 == r5) { pc = 987; continue; }
  throw "fail";
  case 987:
  var r6 = 0;
  r0 = r6;
  var r7 = 0;
  if (r0 == r7) { pc = 988; continue; }
  throw "fail";
  case 988:
  var r8 = 24343;
  r0 = r8;
  var r9 = 24343;
  if (r0 == r9) { pc = 989; continue; }
  throw "fail";
  case 989:
  var r10 = 2143;
  r0 = r10;
  var r11 = 2143;
  if (r0 == r11) { pc = 990; continue; }
  throw "fail";
  case 990:
  var r12 = 2143;
  r0 = r12;
  var r13 = 2143;
  if (r0 == r13) { pc = 991; continue; }
  throw "fail";
  case 991:
  return;
}}}
