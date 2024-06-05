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

function isPalindrome(string) {

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
