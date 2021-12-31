"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 12] = "READ_ONLY";
    Role[Role["WRITE"] = 18] = "WRITE"; //qualsiasi valore va bene
})(Role || (Role = {}));
const person = { name: "matteo",
    age: 25,
    hobbies: ["cooking", "dogo", "atomic"],
    role: Role.WRITE
};
console.log(person.age, person.age, person.hobbies[1].toUpperCase());
