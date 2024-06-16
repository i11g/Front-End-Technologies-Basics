function sum(a,b) {
    
    return a+b; 
} 

function isEven(num) {
    return num%2==0;
}

function factorial(num) {
    if(num===0 || num===1||num<0) {
        return 1
    }

    return num*factorial(num-1);
}

function isPalindrom(string) {

    let cleanString=string.toLowerCase().replace(/[\W_]/g, '')
    let reversedString=cleanString.split('').reverse().join("")
    return cleanString==reversedString 
}

function fibonachi(n) {
    if(n===0) {
        return [];
    }
    if (n===1) {
        return [1]
    } 

    let sequence=[0,1] 

    for (let i = 2; i < n; i++) {

        sequence.push(sequence[i-1]+sequence[i-2])
        
    } 

    return sequence
} 

function nthPrime(n) {
     let  count =0;
     let num=2 

     while(count<n) {
        if(isPrime(num)) {
            count++
        }
        num++
     }
     return num-1
} 

//nested 

function isPrime(num) {
    if(num===0||num===1) return false; 
    if(num<=3) return true;
    if(num%2===0||num%3===0) return false; 
    for (let i = 5; i*i <= num; i+=6) {
        if(num%i===0||num%(i+2)===0) return false;        
    }
    return true;
}  

function pascalTrinagle(rows) {
    
    let triangle =[] 

    for (let i = 0; i < rows; i++) {
        triangle[i]=[];
        triangle[i][0]=1
        for (let j = 1; j < i; j++) {
            triangle[i][j]=triangle[i-1][j-1]+triangle[i-1][j];
            
        }

        triangle[i][i]=1
    }

    return triangle
} 

function isPerfectSquare(num) {
    return Math.sqrt(num)%1===0;
}

module.exports={
    sum,
    isEven,
    factorial,
    isPalindrom,
    fibonachi,
    nthPrime,
    pascalTrinagle,
    isPerfectSquare
}
