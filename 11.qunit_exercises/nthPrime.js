function nthPrime(n) {
    let  count=0;
    let num = 2 

    while(count<n) {
       if(isPrime(num)) {
           count++
       }
       num++
    }
    return num - 1
} 

function isPrime(num) {
   if(num<=1) return false; 
   if(num<=3) return true;
   if(num%2===0||num%3===0) return false; 
   for (let i = 5; i*i <= num; i+=6) {
       if(num%i===0||num%(i+2)===0) return false;        
   }
   return true;
} 

console.log(nthPrime(5))
