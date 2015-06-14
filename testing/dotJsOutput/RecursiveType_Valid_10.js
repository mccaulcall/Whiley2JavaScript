function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1;
  var r3 = 1;
  var r4 = 2;
   //newrecord %5 = (%2, %3, %4) : {int left,int op,int right}
  r1 = r5;
  r0 = r1;
   //fieldload %6 = %0 op : {int left,int op,int right}
  var r7 = 1;
  if (r6 == r7) { pc = 1488; continue; }
  throw "fail";
  case 1488:
   //fieldload %8 = %0 left : {int left,int op,int right}
  var r9 = 1;
  if (r8 == r9) { pc = 1489; continue; }
  throw "fail";
  case 1489:
   //fieldload %10 = %0 right : {int left,int op,int right}
  var r11 = 2;
  if (r10 == r11) { pc = 1490; continue; }
  throw "fail";
  case 1490:
  return;
}}}
