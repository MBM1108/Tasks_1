let n=100256
let a=0
while(n>=1){
a=a+n%10
n=Math.floor(n/10)
}
console.log(a)