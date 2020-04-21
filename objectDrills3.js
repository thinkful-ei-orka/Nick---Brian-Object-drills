const firstPerson = {
  name: "Jon",
  jobTitle: "Owner"
}
const secondPerson = {
  name: "Rob",
  jobTitle: " CFO"
}
const thirdPerson = {
  name: "Ned",
  jobTitle: "Accountant"
}

let myArray = [firstPerson, secondPerson, thirdPerson];

//myArray.forEach(element => console.log(element));
for (i=0;i<myArray.length;i++){
  if (myArray[i].jobTitle === 'Owner'){
    
    console.log(myArray[i].jobTitle)
    console.log (`${myArray[i].jobTitle} ${myArray[i].name} doesn't report to anybody.`);
  }
  console.log (`${myArray[i].jobTitle} ${myArray[i].name} reports to ${firstPerson.name}.`);
}