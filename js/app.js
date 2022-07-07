let userName ="alex";
let userSpouse = "simran";
let userAge = 27;
let userSmoke = false;
let userIncome = 5000;
let userPoints= 11;

console.log(userName);
console.log(userSpouse);
console.log(userAge);
console.log(userSmoke);
console.log(userIncome);
if (userPoints >= 75){
    console.log("congratulations to the user on getting passing points");
} else if (userPoints >= 50) {
    console.log("the user atleast still qualified because score is more than 50");
} 
else {
    console.log("the user will make it next time for sure!!!")
}

let isMember = true;
if (isMember === true && userPoints >= 90){
    console.log("special message , you are a member and you scored above 90");
} else if (isMember === false || userPoints <=10){
    console.log("Hey user,  you must leave you are looser");
} else{
    console.log("the user is a member but he needs to work hard")
}
if (userName === "alex"){
    console.log("user you are great person");
} else {
    console.log("this is just a regular user");
}