const person ={
    name: "Nahid",
    age : 20,
    dept : "IIT",
    id : 2028,
    friends : ["A", "B", "C"]
}

// নিচের ভ্যারিয়েবল নাম অবজেক্ট এ থাকতে হবে 
const {age, friends} = person
console.log(age)
console.log(...friends)


const abir = ["IIT", 2028, "RTH"]
let [dept, id, hall] = abir

console.log(dept,id,hall)


