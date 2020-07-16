// Problem-1 Feet to Mile
function feetToMile(feet){
    if(feet < 0){
        return "Distance cannot be negative."
    }else{
        var mile = feet / 5280;
        return mile;
    }
}

var result = feetToMile(10000);
console.log(result);


// Problem-2 Wood Calculator
function woodCalculator(numberOfChair, numberOfTable, numberOfBed){
    if(numberOfChair < 0 || numberOfTable < 0 || numberOfBed < 0){
        return "Negative value is not accepted.";
    }else{
        var woodForChair = numberOfChair * 1;
        var woodForTable = numberOfTable * 3;
        var woodForBed = numberOfBed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;
        return totalWood;
    }
}

var result = woodCalculator(3, 5, 7);
console.log(result);


// Problem-3 Brick Calculator
function brickCalculator(numberOfFloor){
    if(numberOfFloor < 0){
        return "Negative value is not accepted."
    }else if(numberOfFloor <= 10){
        totalBrick = numberOfFloor * 15000;
        return totalBrick;
    }else if(numberOfFloor <= 20){
        mediumFloor = numberOfFloor - 10;
        brickForHighFloor = 10 * 15000;
        brickForMediumFloor = mediumFloor * 12000;
        totalBrick = brickForHighFloor + brickForMediumFloor;
        return totalBrick;
    }else{
        lowFloor = numberOfFloor - 20;
        brickForHighFloor = 10 * 15000;
        brickForMediumFloor = 10 * 12000;
        brickForLowFloor = lowFloor * 10000;
        totalBrick = brickForHighFloor + brickForMediumFloor + brickForLowFloor;
        return totalBrick;
    }
}

var result = brickCalculator(10);
console.log(result);


// Problem-4 Tiny Friends
function tinyFriends(friendsList){
    if(friendsList == ""){
        return "Friend list should not be empty."
    }else{
        var tiny = friendsList[0];
        for(var i = 0; i < friendsList.length; i++){
            var element = friendsList[i];
            if(element.length < tiny.length){
                tiny = element;
            }
        }
        return tiny;
    }
}

var result = tinyFriends(["Saab", "Mazda", "Ferrari", "Volvo", "BMW"]);
console.log(result);