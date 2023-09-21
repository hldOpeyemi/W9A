// Variables
let age = 17;
let is_subscribed = true;
let user_points = 100;


// My conditional statements
if ( age <=18 && is_subscribed != true ) {
    console.log("The user is younger than 18 and is not subscribed!");
}
  else if( age >=18 && is_subscribed == true || user_points >=100 ) {
    console.log("Great Job! The user is 18 or more and is subscribed!! ");
}
  else if ( age >=18 && is_subscribed != true ) {
    console.log("The user is 18 or more and is not subscribed!!");
}
  else if ( age <=18 && is_subscribed == true ) {
    console.log("The user is 18 or younger and is subscribed!!!");
}
  else if( age >=18 && is_subscribed == true ) {
    console.log("The user is 18 or 18 plus and is subscribed!!");
}
  else {
    console.log("Thanks for visiting");
} 
