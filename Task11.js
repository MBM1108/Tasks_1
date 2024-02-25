let ar1=[1,3,5,8,9]
let ar2=[]
for (let i = 0; i < ar1.length; i++) {
    ar2[i]=ar1[ar1.length-i-1]
    
}
console.log(ar2)