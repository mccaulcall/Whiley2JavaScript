function test() {
 var r3 = true;
 r2 = r3;
 r0 = r2;
 var r5 = false;
 r4 = r5;
 r1 = r4;
 var pc = 0;
 var r6 = true;
 switch (pc) {
GOT: 96 0 6 label23
 if r0
23
//goto label24
 case 23:
 var r7 = true;
GOT: 96 0 7 label25
 if r0
25
 case 24:
 var r8 = false;
//goto label26
 case 25:
 var r8 = true;
 case 26:
 var r9 = true;
GOT: 96 8 9 label27
 if r8
27
//fail
 case 27:
 default: break;
 }
 var pc = 0;
 var r10 = true;
 switch (pc) {
GOT: 96 0 10 label28
 if r0
28
//goto label29
 case 28:
 var r11 = true;
GOT: 96 1 11 label30
 if r1
30
 case 29:
 var r12 = false;
//goto label31
 case 30:
 var r12 = true;
 case 31:
 var r13 = false;
GOT: 96 12 13 label32
 if r12
32
//fail
 case 32:
 default: break;
 }
 var pc = 0;
 var r14 = true;
 switch (pc) {
GOT: 96 1 14 label33
 if r1
33
//goto label34
 case 33:
 var r15 = true;
GOT: 96 0 15 label35
 if r0
35
 case 34:
 var r16 = false;
//goto label36
 case 35:
 var r16 = true;
 case 36:
 var r17 = false;
GOT: 96 16 17 label37
 if r16
37
//fail
 case 37:
 default: break;
 }
 var pc = 0;
 var r18 = true;
 switch (pc) {
GOT: 96 1 18 label38
 if r1
38
//goto label39
 case 38:
 var r19 = true;
GOT: 96 1 19 label40
 if r1
40
 case 39:
 var r20 = false;
//goto label41
 case 40:
 var r20 = true;
 case 41:
 var r21 = false;
GOT: 96 20 21 label42
 if r20
42
//fail
 case 42:
 default: break;
 }
 var pc = 0;
 var r22 = true;
 switch (pc) {
GOT: 96 1 22 label43
 if r1
43
//goto label44
 case 43:
//fail
 case 44:
 default: break;
 }
 var pc = 0;
 var r23 = true;
 switch (pc) {
GOT: 96 0 23 label45
 if r0
45
//goto label46
 case 45:
//goto label47
 case 46:
//fail
 case 47:
 default: break;
 }
 return;
}
