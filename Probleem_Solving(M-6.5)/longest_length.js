var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"]
var len = -1
var name
friends.forEach(element => {
    if(element.length>len){
        name = element
    }
});
console.log(name)