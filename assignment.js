// #1. Convert Feet To Mile

function feetToMile(feet){
    if(feet < 0){
        return "Please Give a positive value for feet."
    }
    else {
        var mile = (feet * 0.000189394).toFixed(6);
        return mile;
    }
}



// #2. Wood Amount Calculation


function woodCalculator(chair, table, bed){
    if(chair <0 || table < 0 || bed < 0){
        return "Please Give Positive Values.";
    }
    else{
        totalWoodRequire = (chair*1) + (table*3) + (bed*5);
        return totalWoodRequire;
    }
}



// #3. Bricks Amount Calculator

function brickCalculator(floor){
    if(floor < 0){
        return "Please Give Positive Value";
    }
    else if(floor <= 10){
        var bricksWithinTen = floor * ( 15 * 1000);
        return bricksWithinTen;
    }
    else if(floor > 10 && floor <=20 ){
        var firstTenFl = 10;
        var afterTenFl = floor - firstTenFl;
        var bricksWithinTwenty = (firstTenFl * (15 * 1000) + afterTenFl * (12 * 1000));
        return bricksWithinTwenty;
    }
    else {
        flAfterTwenty = floor - 20;
        twentyFlBricks = (10 * (15 * 1000) + 10 * (12 * 1000));
        totalBricks = (flAfterTwenty * (10 * 1000) + twentyFlBricks);
        return totalBricks;

    }
}




// #4. Tiny Friend Name

function tinyFriend(friends){
    var smallName = friends[0];
    if(friends.length == 0){
        return "Please add your friends name";
    }
    else{
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if(element.length <= smallName.length){
                smallName = element;   
            }
        }
    }
    return smallName;
}
 
var friendsList = [];
console.log(tinyFriend(friendsList));