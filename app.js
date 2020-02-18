/*
    *** SEARCHED IN ARRAY
    * includes(value, indexARR) return true or false
    * find(callback) - findIndex(value, index) return the first one value
    * indexOf(value, index) - lastIndexOf(value, index) return one index of element
    * filter(callback) return new array when is equal condition
*/

// const names = ["ahmed", "mohamed", "khaled"];
// const result = names.includes("ahmed", 0); // true
// console.log("INCLUDES METHOD " + result);

// const names2 = ["ahmed", "mohamed", "khaled"];
// const users = [
//     {id: 1, username: "warda"},
//     {id: 1, username: "ziko"},
//     {id: 2, username: "sara"}
// ];

// const result2 = names.find(el => el === "mohamed");
// const user = users.find(u => u.id === 1);  // {id: 1, username: "warda"}
// console.log(user);


// const age = [30, 15, 50];
// const resultIndex = age.indexOf(30); // 0
// console.log("INDEX METHOD " + resultIndex);
//
//
// const usersFilter = [
//     {id: 1, username: "warda", star: "5"},
//     {id: 2, username: "ziko", star: "5"},
//     {id: 3, username: "sara", star: "3"},
//
// ];
//
// const filterUser = usersFilter.filter(cl => cl.star > 3); // [{id: 1}, {id: 2}]
// // const filterUser = usersFilter.find(cl => cl.star > 3); // {id: 1}
// console.log(filterUser);



const jungle = [
    { name: "frog", threat: 0 },
    { name: "monkey", threat: 5 },
    { name: "gorilla", threat: 8 },
    { name: "lion", threat: 10 }
];

// break the object down in order to use .includes() or .indexOf()
const names = jungle.map(el => el.name); // returns ['frog', 'monkey', 'gorilla', 'lion']
console.log(names.includes("gorilla")); // returns true
console.log(names.indexOf("lion")); // returns 3 - which corresponds correctly assuming no sorting was done

// methods we can do on the array of objects
console.log(jungle.find(el => el.threat == 5)); // returns object - {name: "monkey", threat: 5}
console.log(jungle.filter(el => el.threat > 5)); // returns array - [{name: "gorilla", threat: 8}, {name: 'lion', threat: 10}]

