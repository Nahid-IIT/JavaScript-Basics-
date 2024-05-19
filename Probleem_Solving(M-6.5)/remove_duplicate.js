var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

remove_duplicate = (array) =>{
    let unique = []
    array.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}

result = remove_duplicate(numbers)
console.log(...result)