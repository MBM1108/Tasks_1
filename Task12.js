let n=5
let arr=[2,3,4,5,2,4,1,2,5,5,5]
let k=0
for (let i = 0; i < arr.length; i++) {
    if(n==arr[i]){
        k++
    }
    
}
console.log(`Bu yerda ${k} ta ${n} bor`)