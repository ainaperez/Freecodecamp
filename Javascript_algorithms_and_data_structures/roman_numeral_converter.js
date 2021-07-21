/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. 

1 = I;
5 = V
10 = X
50 = L
100 = C
500 = D
1000 = M
*/

function convertToRoman(num) {

    if(num.isNan() == false){

    let arrRoman =[];

    let units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    let tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];

    let hundreds = ['C', 'CC', 'CCC', 'CD', 'DC', 'DCC', 'DCCC', 'CM'];

    let thousands = 'M';

    while(num >1000){
        arrRoman.push(thousands);
        num-=1000;
    };

    while(num>=100){
        var digit = num.toString('').split('')[0];
        arrRoman.push(hundreds[digit]);
    }

    while(num>=10){
        digit = num.toString('').split('')[0];
        arrRoman.push(tens[digit]);
    }

    while(num>=1){
        let digit = num.toString('').split('')[0];
        arrRoman.push(units[digit]);
    }
    return arrRoman;
    }
} 

   convertToRoman(36);