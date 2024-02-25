let n=2002
let temp=0
let c=0

for (let i = n; i >=1; i=i/10) {
    temp++
}
if(n>10){
for (i = 0; i <=temp/2-1; i++) {
    a=Math.floor(n/Math.pow(10,temp-1-i))%10
    b=Math.floor(n/Math.pow(10,i))%10
     
    if(a==b){
      
    c++}
}
if((temp%2==0)&&(temp/2==c)||((temp%2==1)&&((temp-1)/2==c))){
    console.log('polindrom')
}
else console.log('polindrom emas')
}
else console.log("Boshqa son kiriting")