let ar = [3,5,2,3,5,8,6,5,4]
let mx =-1
let mn = 1e8+5

// normal approach 
for (i=0; i<ar.length; i++){
    if(ar[i]> mx){
        mx= ar[i]
    }
    if(ar[i]<mn){
        mn = ar[i]
    }
}
console.log("Max = ", mx)
console.log("Min = ", mn)

// Using Spread Operator

let x = Math.max(...ar)
let y = Math.min(...ar)

console.log("Spread Operator")
console.log("Max = ", x)
console.log("Min = ", y)
