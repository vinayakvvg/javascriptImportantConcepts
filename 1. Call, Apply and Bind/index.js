let name = {
  firstname: "Vinayak",
  lastname: "Gosain",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name, "Lucknow", "Uttar Pradesh");

let name2 = {
  firstname: "Eden",
  lastname: "Hazard",
};
//Function borrowing - call()

// name.printFullName.call(name2)
printFullName.call(name2, "Belgium", "Europe");

// apply() - we use array list as parameters instead of comma separated values
// (only diff between call and apply)
printFullName.apply(name2, ["Belgium", "Europe"]);

// call()
// Only difference between call and bind is that bind will return us a function which will not
// automatically be invoked, whereas call will automatically invoke the function
let printMyName = printFullName.bind(name2, "Belgium", "Europe");
console.log(printMyName);
printMyName();
