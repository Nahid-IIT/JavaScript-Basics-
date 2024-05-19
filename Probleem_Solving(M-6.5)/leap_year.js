leap_year = (y) =>{
    if(y%400==0){
        console.log("Leap Year")
    }
    else if(y%4==0 && y%100!=0){
        console.log("Leap Year")
    }
    else{
        console.log("Not Leap Year")
    }
}

leap_year(1988)
leap_year(2024)
leap_year(2022)