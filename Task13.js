let n=5
let arr=[1,2,3,4,5,0,3,2]
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if ((arr[i]+arr[j])==n) {
            console.log(`${i+1}- va ${j+1}-element. ${arr[i]} va ${arr[j]} ning yig'indisi ${n} ga teng `)
            break
        }
        
    }
    
}