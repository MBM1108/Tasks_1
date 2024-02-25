
let arr=[0,2,1,2,5,7,4,22,3,19,18]
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
console.log(arr[arr.length-2])