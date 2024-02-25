let b=0
const summ=(a)=>{
    if(a>0){
        for (let i = 0; i <= a; i++) {
         b=b+i     
            
        }
        return b
    }
    if(a<0){
        for (let i = 0; i <= -a; i++) {
         b=b+i     
            
        }
        return -b
    }
    if(a=0) return 0
}
console.log(summ(-5))
console.log(summ(15))