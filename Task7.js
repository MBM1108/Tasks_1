const finder=(n)=>{
    let sum=0
    let temp=0
        
        
    
    for (let i = 1; i <n; i++) {
          if(n%i==0){
          sum=sum+i
          temp++   
          }
        }
    
    if(sum==n){
        console.log(true) }
    else console.log(false) 
    }
    finder(496)
    
    