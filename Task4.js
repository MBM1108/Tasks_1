const son=(n)=>{
    if((n>=0)&&(n<10)){
        return 1
    }
    if((n>=10)&&(n<100)){
        return 2
    }
    if((n>=100)&&(n<1000)){
        return 3
    }
   }
console.log(son(311))