function test() {
//invoke %2 = () RecordAssign_Valid_3:f : function() -> RecordAssign_Valid_3:tac1tup
 r1 = r2;
 r0 = r1;
//fieldload %3 = %0 f2 : {int f1,int f2}
 var r4 = 2;
 var r5 = r3 - r4;
//fieldload %6 = %0 f2 : {int f1,int f2}
 var r7 = 2;
 var r8 = r6 - r7;
//update %0.f1 = %8 : {int f1,int f2} -> {int f1,int f2}
 var pc = 0;
//fieldload %9 = %0 f1 : {int f1,int f2}
 switch (pc) {
//fieldload %10 = %0 f2 : {int f1,int f2}
GOT: 97 9 10 label1455
 if r9
1455
//fail
 case 1455:
 default: break;
 }
//assume 
 return;
}
