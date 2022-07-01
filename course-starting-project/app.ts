enum Role { ADMIN, READ_ONLY, AUTHOR } // easier way to accomplish thats below
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const person= {
    name: "Yurii",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

console.log(person.name); 

for(const hobbie of person.hobbies) {
    console.log(hobbie.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}