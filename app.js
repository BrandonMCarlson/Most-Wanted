"use strict"

function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTrait(people);
      let chosenTraits = stringOfInfo(searchResults)
      alert(stringOfInfo)
      break;
    default:
      app(people); 
      break;
  }

  mainMenu(searchResults, people);
}

function mainMenu(person, people) {


  if (!Array.isArray(person) || !person.length) {
    alert("Could not find that individual.");
    return app(people);
  }
  let displayOption = promptFor("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", chars);





  switch (displayOption) {
    case "info":
      alert("Gender: " + person[0].gender + "\n" +
        "DOB: " + person[0].dob + "\n" +
        "Height: " + person[0].height + "\n" +
        "Weight: " + person[0].weight + "\n" +
        "Eye Color: " + person[0].eyeColor + "\n" +
        "Occupation: " + person[0].occupation);
      break;
    case "family":
      let partner = people.filter(function (spouse) {
        for (let i = 0; i < people.length; i++) {
          return (spouse.id === person[0].currentSpouse)
        }
      });
      let spouseChecker;
      if (partner.length === 0) {
        spouseChecker = "This person has no spouse"
      }

      let parents = people.filter(function (possibleParent) {
        for (let i = 0; i < people.length; i++) {
          return (possibleParent.id === person[0].parents[i])

        }
      });
      let parentChecker;
      if (parents.length === 0) {
        parentChecker = "This person has no parents"
      }
      else if (parents.length === 1) {
        parentChecker = parents[0].firstName;
      }
      else if (parents.length === 2) {
        parentChecker = parents[0].firstName + " " + parents[1].firstName;
      }


      let siblings = people.filter(function (possibleSibling) {
        for (let i = 0; i < people.length; i++) {
          return (possibleSibling.id === person[0].parents)

        }
      });
      let siblingChecker;
      if (siblings.length === 0) {
        siblingChecker = "This person has no siblings"
      }
      else if (siblings.length > 0) {
        siblingChecker = person[0].firstName
      }
      alert("Spouse: " + partner[0].firstName + " " + partner[0].lastName + "\n" +
        "Parents: " + parentChecker + "\n" +
        "Siblings: " + siblingChecker);

      break;

    case "descendants":
      let foundDescendants = recursiveDescendants(people, person[0]);
      alert("Descendants: ", foundDescendants);

      break;
    case "restart":
      app(people); 
      break;
    case "quit":
      return; 
    default:
      return mainMenu(person, people); 
  }
}

function searchByName(people) {
  let firstName = promptFor("What is the person's first name? 'please capatalize first letter of first name.'", chars);
  let lastName = promptFor("What is the person's last name? 'please capatalize the first letter of the last name.'", chars);

  let foundPerson = people.filter(function (person) {
    if (person.firstName === firstName && person.lastName === lastName) {
      return true;
    }
    else {
      return false;
    }
  })
  return foundPerson;
}


function searchByGender(people) {
  let gender = promptFor("What is the person's gender?", chars);

  let foundGender = people.filter(function (person) {
    return (person.gender === gender)

  })
  return foundGender;
}

function searchByWeight(people) {
  let weight = promptFor("What is the person's weight?", chars);
  let foundWeight = people.filter(function (person) {
    return (person.weight == weight);

  })
  return foundWeight;
}

function searchByHeight(people) {
  let height = promptFor("What is the person's height?", chars);
  let foundHeight = people.filter(function (person) {
    return (person.height == height);

  })
  return foundHeight;
}

function searchByEyeColor(people) {
  let eyeColor = promptFor("What is the person's Eye Color?", chars);
  let foundEyeColor = people.filter(function (person) {
    return (person.eyeColor === eyeColor);

  })
  return foundEyeColor;
}

function searchByDob(people) {
  let dob = promptFor("What is the person's date of birth?", chars);
  let foundDob = people.filter(function (person) {
    return (person.dob === dob);

  })
  return foundDob;
}

function searchByOccupation(people) {
  let occupation = promptFor("What is the person's Occupation?", chars);
  let foundOccupation = people.filter(function (person) {
    return (person.occupation === occupation);

  })
  return foundOccupation;
}


function displayPeople(people) {
  alert(people.map(function (person) {
    return person[0].firstName + " " + person[0].lastName;
  }).join("\n"));
}

function displayPerson(person, people) {
  let personInfo = "First Name: " + person[0].firstName + "\n" + "Last Name: " + person[0].lastName + "\n" + "Gender: " + person[0].gender + "\n" + "dob: " + person[0].dob + "\n" + "Height: " + person[0].height + "\n" + "Weight: " + person[0].weight + "\n" + "eyeColor: " + person[0].eyeColor + "\n" + "Occupation: " + person[0].occupation + "\n" + "Parents: " + person[0].parents + "\n" + "currentSpouse: " + person[0].currentSpouse;
  alert(personInfo);
}

function promptFor(question, valid) {
  do {
    var response = prompt(question).trim();
  } while (!response || !valid(response));
  return response;
}

function yesNo(input) {
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function maleFemale(input) {
  return input.toLowerCase() == "male" || input.toLowerCase() == "female";
}

function chars(input) {
  return true; 
}

function stringOfInfo(array) {
  let foundPeopleString = "";
  for (let i = 0; i < array.length; i++) {
    foundPeopleString += (array[i].firstName + " " + array[i].lastName) + "\n";

  }
  return foundPeopleString;
}


function recursiveDescendants(people, person) {
  let foundDescendants = [];
  let descendantCheckArray = people.filter(function (item) {
    return (item.parents[0] == person.id || item.parents[1] == person.id);
  })
  for (let i = 0; i < descendantCheckArray.length; i++) {
    let found = recursiveDescendants(people, descendantCheckArray[i]);
    
    foundDescendants.concat(found);
  }
  return foundDescendants;
}

function searchByTrait(people) {
  let traitSearch;
  let filtered = people;
  let loopOn = true;
  while (loopOn === true) {
    traitSearch = promptFor("Which trait would you like to search for? 'dob', gender', 'height', 'weight', 'eye color', 'occupation'", chars).toLowerCase();
    switch (traitSearch) {
      case "gender":
        filtered = searchByGender(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
      case "dob":
        filtered = searchByDob(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
      case "height":
        filtered = searchByHeight(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
      case "weight":
        filtered = searchByWeight(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
      case "eye color":
        filtered = searchByEyeColor(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
      case "occupation":
        filtered = searchByOccupation(filtered);
        alert(stringOfInfo(filtered));
        if (filtered.length === 0) {
          loopOn = true;
          return filtered;
        }
        break;
    }
    let additionalTrait = promptFor("Would you like to search another trait?", chars);
    if (additionalTrait === "yes") {
      loopOn = true;
    } else {
      loopOn = false;
    }
  }
}
