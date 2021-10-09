"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
<<<<<<< HEAD
      searchResults = searchByTrait(people);
=======
      searchResults = searchByGender(people);
      searchResults = searchByEyeColor(people);
>>>>>>> db0a5594c1acb13b48af766dd0458a58fc6001fa
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
<<<<<<< HEAD
  
=======


  // possibly use a .filter() function here to ensure the proper names are selected upon a users input


>>>>>>> db0a5594c1acb13b48af766dd0458a58fc6001fa
  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


// function searchByEyeColor(people){
//   let searchEyeColor = promptFor("What is the person's eye color?" , chars);
//   let foundPerson = people.filter(function(person){
//     if(person.eyeColor === searchEyeColor){
//       return true;
//     }
//     else{
//       return false;
//     }
//   })
//   // TODO: find the person using the name they entered
//   return foundPerson;
// }

// function searchByGender(people){
//   let searchGender = promptFor("What is the person's gender?", chars);

//   let foundPerson = people.filter(function(person){
//     if(person.gender === searchGender){
//       return true;
//     }
//     else{
//       return false;
//     }
//   })
//   // TODO: find the person using the name they entered
//   return foundPerson;
// }


function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

function searchByEyeColor(people){
  let searchEyeColor = promptFor("What are the person eye colors?" , chars);

  let foundPerson = people.filter(function(person){
    if(person.eyeColor === searchEyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson; 
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";

  
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function maleFemale(input){
  return input.toLowerCase() == "male" || input.toLowerCase() == "female";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
<<<<<<< HEAD
let traitSearch;
function searchByTrait(people){
  traitSearch = promptFor("Which trait would you like to search for? 'dob', gender', 'height', 'weight', 'eye color', 'occupation'", chars);
  if(traitSearch === "gender"){
    genderPrompt = promptFor("Is the person male or female?");
    return genderPrompt;
  }else if(traitSearch === "dob"){
    dobPrompt = promptFor("What is the person's dob?");
    return dobPrompt;
  }else if(traitSearch === "height"){
    heightPrompt = promptFor("How tall is the person?");
    return heightPrompt;
  }else if(traitSearch === "weight"){
    weightPrompt = promptFor("What is the person's weight?");
    return weightPrompt;
  }else if(traitSearch === "eye color"){
    eyeColorPrompt = promptFor("What color are the person's eyes?");
    return eyeColorPrompt;
  }else if(traitSearch === "occupation"){
    occupationPrompt = promptFor("What is the person's occupation?");
    return occupationPrompt;
  }
}
=======

>>>>>>> db0a5594c1acb13b48af766dd0458a58fc6001fa
