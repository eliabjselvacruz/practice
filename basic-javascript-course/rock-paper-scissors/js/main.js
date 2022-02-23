var opt1 = "rock";
var opt2 = "paper";
var opt3 = "scissors";

var result= (user1, user2) => {
  if(user1 != user2){
    if(user1==opt1 && user2==opt3){
      console.log("User 1 wins!");
    } else {
      if(user1==opt1 && user2==opt2){
        console.log("User 2 wins!");
      } else {
        if(user1==opt2 && user2==opt3){
          console.log("User 2 wins!");
        } else {
          if(user1==opt2 && user2==opt1){
            console.log("User 1 wins!");
          } else {
            if(user1==opt3 && user2==opt1){
              console.log("User 2 wins!");
            } else {
              console.log("User 1 wins!");
            }
          }
        }
      }
    }
  } else {
    console.log("It's a tie!");
  }
}

result(opt2, opt1);