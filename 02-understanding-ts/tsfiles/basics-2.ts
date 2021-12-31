
enum Role {
    ADMIN=5,READ_ONLY=12,WRITE=18  //qualsiasi valore va bene
}

const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:Role 
}=
{name: "matteo",
  age: 25,
  hobbies: ["cooking","dogo","atomic"],
  role: Role.WRITE

};

console.log(person.age,person.age,person.hobbies[1].toUpperCase());

