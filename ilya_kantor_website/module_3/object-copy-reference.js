console.log("<------------- Object reference----------->")

// let user = {
//     name: "sarthak"
// }

const user = {
    name: "sarthak"
}

let copyObj = user;

copyObj.name = "subaru";

console.log(user);

console.log("<--------- Object cloning---------->");

const originalUser = { name: "Sarthak" };

const cloneUser = Object.assign({}, originalUser);

originalUser.name = "Subaru";

console.log(cloneUser)