var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["WRITE"] = 2] = "WRITE";
})(Role || (Role = {}));
var person = { name: "matteo",
    age: 25,
    hobbies: ["cooking", "dogo", "atomic"],
    role: Role.WRITE
};
console.log(person.age, person.age, person.hobbies[1].toUpperCase());
