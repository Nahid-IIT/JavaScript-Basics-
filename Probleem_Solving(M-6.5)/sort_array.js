ar = [5,4,3,9,3,1,2,4,33,665,3,2,22,111,7433]
ar.sort(function(a,b){
    return a-b
})
console.log(...ar)

ar.sort(function(a,b){
    return b-a
})

console.log(...ar)