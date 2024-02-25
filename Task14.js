let arr=[0,2,1,2,5,7,4,22,3,18]
let min=arr[0]
for (let i = 0; i < arr.length; i++) {
for (let j = i+1; j < arr.length; j++) {
if (arr[i]>arr[j]) {
 min=arr[j]
 arr[j]=arr[i]
 arr[i]=min   
}
    
}
}
/*Ikkinchi usul*/
console.log(arr)
 let massiv=[1,5,0,7,8,10,2,3,9]

console.log(massiv.sort(fic=(x,y)=>{return x-y}))