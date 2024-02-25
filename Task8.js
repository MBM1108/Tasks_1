const indikator=(k)=>{
    
if(k<0){
    console.log('Manfiy son kiritdingiz')
}
else{
    let temp=1
while(k>9)
{k=k/10
temp++
}
console.log(`${temp} xonali son`)}}
indikator(120)