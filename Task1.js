const number=(a,b,c)=>{
if(((a==0)||(a<0))||((b==0)||(b<0))||((c==0)||(c<0))){
    return 0
}

else return 100*a+10*b+c
}
console.log(number(1,3,3))