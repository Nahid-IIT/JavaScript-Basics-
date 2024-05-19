const products = [
    {id:1, name:"Nahid",dept:"IIT"},
    {id:4, name:"Nahid",dept:"IIT"},
    {id:2, name:"Jahid",dept:"IIT"},
    {id:3, name:"Mahid",dept:"IIT"}
]

let  p = products.filter(product=>product.name=="Nahid")
console.log(p)