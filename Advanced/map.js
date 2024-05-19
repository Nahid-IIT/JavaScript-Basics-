const products = [
    {id:1, name:"Nahid",dept:"IIT"},
    {id:4, name:"Nahid",dept:"IIT"},
    {id:2, name:"Jahid",dept:"IIT"},
    {id:3, name:"Mahid",dept:"IIT"}
]

let a = products.map(product =>{
    return product.id + 3;
})
console.log(a)

products.forEach(element => {
    console.log(element)
});