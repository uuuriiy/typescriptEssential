// const person: { // how ts works with objects
//     name: string;
//     age: number
// } = 
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple
} = {
    name: "Yurii",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author']
}

// person.role.push("admin"); // exeption in tuple with length
// person.role[1] = 10; 

// person.role = [0, "some", ""] // in tuple how ts control length 

console.log(person.name); 

for(const hobbie of person.hobbies) {
    console.log(hobbie.toUpperCase());
}
