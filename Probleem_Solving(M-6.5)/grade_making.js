
const grade_generate = (mark)=>{
    if(mark > 100 && mark <0){
        console.log("Invalid Mark")
    }else{
        if(mark >=80) console.log("A+")
        else if(mark < 80 && mark >=70)console.log("A")
        else if(mark < 70 && mark >=60)console.log("B")
        else if(mark < 60 && mark >=50)console.log("C")
        else if(mark < 50 && mark >=40)console.log("D")
        else console.log("F")
    }
}

grade_generate(88)