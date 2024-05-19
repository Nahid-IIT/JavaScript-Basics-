const products = [
    {id:1, name:"Nahid"},
    {id:2, name:"Jahid"},
    {id:3, name:"Mahid"}
]

//লুপ দিয়ে
for (let i=0; i<products.length; i++){
    let p = products[i];
    if(p.id==3){
        console.log(p)
    }
}

// find দিয়ে 

let a = products.find(pd=>pd.name=="Nahid")
console.log(a)