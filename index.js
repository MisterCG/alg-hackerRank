//  Funciones de HackerRank

// Suma las diagonales de una matriz cuadrada de n*n

function diagonalDifference(arr) {
    // Write your code here
    let elementSecondDiago = arr.length - 1;
    let elementFirstdDiago = 0; 
    let sumFirst = 0;
    let sumSecond = 0;
    for ( let c = 0; c < arr.length; c++ ) { 
        for ( let d = 0;  d < arr[c].length; d++) {
            if ( elementFirstdDiago === d) {
                 sumFirst = sumFirst + arr[c][elementFirstdDiago];
            }
        }
        elementFirstdDiago++;
         for ( let v = 0;  v < arr[c].length; v++) {
            if ( elementSecondDiago === v) {
                 sumSecond = sumSecond + arr[c][elementSecondDiago];
            }
        }
     
        elementSecondDiago--;
    }    
    
    return  Math.abs(sumFirst - sumSecond)


}

/*
console.log(diagonalDifference([[6, 6, 7, -10, 9,-3, 8, 9 ,-1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]]));

*/

// Mide de la proporción de que los numeros que esten adentro
// Del Array sena postivos, negativos o cero     

function plusMinus(arr) {
        let sumPostive = 0;
        let sumNegative = 0;
        let sumZero = 0;
    
        arr.forEach(( number ) => {
            if( number > 0 ){
                sumPostive++;
            } else if( number === 0 ){
                sumZero++;
            } else if ( number < 0 ){
                sumNegative++;
            }
        });
    
        sumPostive = ( sumPostive / arr.length ).toFixed(6);
        sumNegative = ( sumNegative / arr.length ).toFixed(6);
        sumZero = ( sumZero / arr.length ).toFixed(6);
    
        console.log( sumPostive );
        console.log( sumNegative );
        console.log( sumZero );
    
    
    
}

// incompleto con errores
function pickingNumbers(a) {
    // Write your code here
    let collectionArray = [];
    let arrayAbsolute = [];
    let arr = [];
    let n = 1;
    let abs = 0;
    for (abs ; abs < a.length; abs ++){
        arrayAbsolute = [];
        console.log(a[abs]+ ' piscion de abs '+ abs);
        if(arrayAbsolute.length == 0) {
            arrayAbsolute.push(a[abs]);
        }
        n  = abs +1;
        console.log(a);
        console.log(n);
        for (n; n < a.length;){
             if( Math.abs(a[abs] - a[n]) < 2 ){
                arrayAbsolute.push(a[n]);
                console.log(arrayAbsolute);
                a.splice(n, 1);
                console.log(a);  
                if(n === a.length - 1){
                    arr = arrayAbsolute;
                    console.log(arr);
                    collectionArray.push(arr);
                    arrayAbsolute = [];
                }/*         
               */
                 n = abs +1;
            }else if ( n == a.length - 1 && arrayAbsolute.length > 1 ) {
               
                console.log(a);
                arr = arrayAbsolute;
                console.log(arr);
                console.log('debajo')
                // console.log(arrayAbsolute)
                
                collectionArray.push(arr);
                arrayAbsolute = [];
            }/* else if (a[n] == a[a.length - 1] && arrayAbsolute.length == 1 && Math.abs(a[abs] - a[n]) > 1 ) {
                console.log('eehehehehe')
                console.log(a[n]+ ' posicion '+ n);
                
                
            }*/ else {
                // console.log( `pase aqui con ${a[n]} y`)
                console.log('no cumple')
                console.log(a[n]+ ' posicion '+ n);
                n++;
            }
            
            
        }
      
       
        
    
    }
        
    console.log(collectionArray);
    // return a;
}

// convert 24 hours
function timeConversion(s) {
    let hour = /^[0-9]{1,2}/.exec(s)[0];
    let amOrPm = /[A-Z]{1,2}$/.exec(s)[0];
    let hourFormat = '';
    if ( amOrPm == 'AM' ) {
        if ( hour == '12' ){
            hour = '00';
        }
        for ( let h = 2; h < s.length -2 ; h++ ) {
            hourFormat = hourFormat + s[h];
        }
        hourFormat = hour + hourFormat;
    } else if ( amOrPm == 'PM' ){
        if ( hour == '12' ){
            hour = hour;
        } else {
            hour =  12 + parseInt(hour);
        }
        
        for ( let h = 2; h < s.length -2 ; h++ ) {
            hourFormat = hourFormat + s[h];
        }
        hourFormat = hour + hourFormat;
    }
    return hourFormat;
}
// console.log(timeConversion('12:40:22AM'));
function kangaroo(x1, v1, x2, v2) {
    let message = '';
    while ( x2 <= 10000) {
        x1 = x1 + v1;
        x2 = x2 + v2;
        if( x1 === x2  ){
            message = 'YES';
            break;
        }
    }
    console.log(x1, x2)
    if( x1 != x2 ){
        message = 'NO';
    }

    return message;
}
// console.log(kangaroo(4523, 8092, 9419, 8076))

function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;  
    for ( let c = 0; c < a.length; c++ ) {
        if ( a[c] > b[c] ) {
            aPoints++;
        } else if (a[c] < b[c]) {
            bPoints++;
        }
    }

    return `${aPoints} ${bPoints}`;
}

// console.log(compareTriplets([17,28,30],[99,16,8]));

function superReducedString(s) {
    let arr = s.split('');
    for ( let string = 0; string < arr.length;string++) {
        console.log(arr[string])
        if( arr[string] == arr[string + 1]){
            arr[string + 1] = '';
            arr[string] = '';
        }

    }
    
    return arr.length > 0? arr.join(''): 'Empty String';
}
// console.log(superReducedString('abccddda'));


function rrrr(s){
    let arr = s.split('');
    while(continueReducing) {
        continueReducing = false;
        
        for(var i = 0; i < arr.length; i++) {
            if (arr[i] == arr[i + 1]) {
                arr[i] = '';
                arr[i + 1] = '';
                i++;
                continueReducing = true;
            }
        }
        arr = arr.join('').split('');
    }
    
    console.log(arr.length == 0 ? 'Empty String' : arr.join(''));
}

console.log(superReducedString('oagciicgaoyjmahhamjymmwjnnjwmmvpxhpphxpvlikappakilyygvkkvgyymlpfddfplmhiodvvdoihfxpkggkpxfuevvuuvveu'));