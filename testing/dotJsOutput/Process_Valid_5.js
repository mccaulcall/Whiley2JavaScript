function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = false;
   //newrecord %3 = (%2) : {bool flag}
   //newobject %4 = %3 : &{bool flag}
  r1 = r4;
  r0 = r1;
   //invoke %5 = (%0) Process_Valid_5:run : method(Process_Valid_5:MyProc) -> bool
  var r6 = false;
  if (r5 == r6) { pc = 1359; continue; }
  throw "fail";
  case 1359:
  var r7 = true;
   //newrecord %8 = (%7) : {bool flag}
   //newobject %9 = %8 : &{bool flag}
  r0 = r9;
   //invoke %10 = (%0) Process_Valid_5:run : method(Process_Valid_5:MyProc) -> bool
  var r11 = true;
  if (r10 == r11) { pc = 1360; continue; }
  throw "fail";
  case 1360:
  return;
}}}
