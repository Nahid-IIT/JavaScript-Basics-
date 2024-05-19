monthly_savings = (payment, living_cost)=>{
      if(typeof(payment)=='object' && typeof(living_cost)=='number'){
                let sum=0
                payment.forEach(element => {
                    sum+=element
                });
                if(sum>=3000){
                    sum-=(sum*0.2)
                }
                sum-=living_cost
                
                if(sum>=0){
                    return sum
                }
                else return "earn more"
      }
      else{
        console.log("Invali Input")
      }
}

console.log(monthly_savings([1000,2000,3000],[5400]))
console.log(monthly_savings([1000,2000,3000],500))
console.log(monthly_savings([1000,2000,3000],[5400]))