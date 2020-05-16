function numeroRomano(texto = "") {
  let sum = 0;
  texto = texto.toLowerCase();
  let convertido = ""
  for (let index = 0; index < texto.length; index++) {

    if (index + 1 <= texto.length - 1) {
      if (converteRomano(texto.charAt(index + 1)) <= converteRomano(texto.charAt(index))) {
        sum += converteRomano(texto.charAt(index)) //soma

      } else {
        sum -= converteRomano(texto.charAt(index)) //subtrai
      }
    } else {
      sum += converteRomano(texto.charAt(index)) //soma
      
    }
  }
  return sum;
}
function converteRomano(letra) {
  switch (letra) {
    case ("i"):
      return 1;
      break;

    case ("v"):
      return 5;
      break;

    case ("x"):
      return 10;
      break;

    case ("l"):
      return 50;
      break;

    case ("c"):
      return 100;
      break;

    case ("d"):
      return 500;
      break;

    case ("m"):
      return 1000;
      break;

    default:
      console.log("Deu ruim na conversao")
      break;

  }
}
//numeroRomano(" LXXXVI")
let vetor=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX','LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI','XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C']

for (const key in vetor) {
  console.log(numeroRomano(vetor[key].toLowerCase()));
  
}
/*
1: I
2: II
3: III
4: IV
5: V
6: VI
7: VII
8: VIII
9: IX
10: X
11: XI
12: XII
13: XIII
14: XIV
15: XV
16: XVI
17: XVII
18: XVIII
19: XIX
20: XX
21: XXI
22: XXII
23: XXIII
24: XXIV
25: XXV
26: XXVI
27: XXVII
28: XXVIII
29: XXIX
30: XXX
31: XXXI
32: XXXII
33: XXXIII
34: XXXIV
35: XXXV
36: XXXVI
37: XXXVII
38: XXXVIII
39: XXXIX
40: XL
41: XLI
42: XLII
43: XLIII
44: XLIV
45: XLV
46: XLVI
47: XLVII
48: XLVIII
49: XLIX
50: L
51: LI
52: LII
53: LIII
54: LIV
55: LV
56: LVI
57: LVII
58: LVIII
59: LIX
60: LX
61: LXI
62: LXII
63: LXIII
64: LXIV
65: LXV
66: LXVI
67: LXVII
68: LXVIII
69: LXIX
70: LXX
71: LXXI
72: LXXII
73: LXXIII
74: LXXIV
75: LXXV
76: LXXVI
77: LXXVII
78: LXXVIII
79: LXXIX
80: LXXX
81: LXXXI
82: LXXXII
83: LXXXIII
84: LXXXIV
85: LXXXV
86: LXXXVI
87: LXXXVII
88: LXXXVIII
89: LXXXIX
90: XC
91: XCI
92: XCII
93: XCIII
94: XCIV
95: XCV
96: XCVI
97: XCVII
98: XCVIII
99: XCIX
100: C
*/ 