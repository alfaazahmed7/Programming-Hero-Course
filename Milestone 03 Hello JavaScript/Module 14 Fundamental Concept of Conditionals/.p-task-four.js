const myScore = 85;
const friendScore = 75;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log("Go for a lunch")
    }

    else if (friendScore >= 60 && friendScore <=80) {
        console.log("Good luck next time dude")
    }

    else if (friendScore >= 40 && friendScore <= 60) {
        console.log("I won't see your message anymore")
    }

    else {
        console.log("Sorry dude! I have to blcok you")
    }
}

else {
    console.log("I will act sad")
}
