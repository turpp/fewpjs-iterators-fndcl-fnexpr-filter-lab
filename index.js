// Code your solution here
function findMatching(array, string){
    //returns matching list of drivers and should be case insensitive
   let matches=array.filter(function(driver){
        return driver == string || driver.toLowerCase() == string.toLowerCase()
    })
    return matches
}

function fuzzyMatch(array, string){
    let matches = array.filter(function(driver){
        return driver[0].includes(string[0]) === true
        
    })
    return matches
}

function matchName(array, string){
    //each element in array is an object 
    // return when string matches name property
    let matches = array.filter(function(driver){
        return driver.name === string
    })
    return matches
}


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']