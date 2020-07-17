// #1. Convert Feet To Mile

function feetToMile(feet){
    if(feet <= 0){
        return "Please Give a positive value for feet."
    }
    else {
        var mile = (feet * 0.000189394).toFixed(6);
        return mile;
    }
}



// #2. Wood Amount Calculator


function woodCalculator(chair, table, bed){
    if(chair <0 || table < 0 || bed < 0){
        return "Please Give Positive Values.";
    }
    else {
        totalWoodRequire = (chair*1) + (table*3) + (bed*5);
        return totalWoodRequire;
    }
}



// #3. Bricks Amount Calculator

function brickCalculator(floor){
    var bricksNeed = 1000;
    if(floor < 0){
        return "Please Give Positive Value";
    }
    else if(floor <= 10){
        var bricksWithinTen = floor * ( 15 * bricksNeed);
        return bricksWithinTen;
    }
    else if(floor > 10 && floor <=20 ){
        var firstTenFl = 10;
        var afterTenFl = floor - firstTenFl;
        var bricksWithinTwenty = (firstTenFl * (15 * bricksNeed) + afterTenFl * (12 * bricksNeed));
        return bricksWithinTwenty;
    }
    else {
        flAfterTwenty = floor - 20;
        twentyFlBricks = (10 * (15 * bricksNeed) + 10 * (12 * bricksNeed));
        totalBricks = (flAfterTwenty * (10 * bricksNeed) + twentyFlBricks);
        return totalBricks;

    }
}




// #4. Find The Tiny Friend Name

function tinyFriend(friends){
    var smallName = friends[0];
    if(friends.length == 0){
        return "It cant be empty, Please add your friends name";
    }
    else {
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if( friends[i] == "" ){
                return " Empty String is not allowed";
            }
            else {
                (element.length <= smallName.length)
                smallName = element;   
            }
        }
    }
    return smallName;
}
