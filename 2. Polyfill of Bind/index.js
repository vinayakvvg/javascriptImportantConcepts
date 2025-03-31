var myName = {
    fName: "Vinayak",
    lName: "Gosain"
}

let printMyName = function(hometown, state) {
    console.log(this.fName + " " + this.lName + " " + hometown + " " + state);
}

let printName = printMyName.bind(myName, "Lucknow");
printName("Uttar Pradesh"); // Vinayak Gosain Lucknow Uttar Pradesh

Function.prototype.myBind = function(...args) {
    let obj = this;
    let params = args.slice(1); // to remove this from args
    return function (...args2) { // any arguments passed to calling function
        // obj.call(args[0], ...params, ...args2); // using call
        obj.apply(args[0], [...params, ...args2]); // using apply
    }
}


let printName2 = printMyName.myBind(myName, "Lucknow");
printName2("UP"); // Vinayak Gosain Lucknow UP