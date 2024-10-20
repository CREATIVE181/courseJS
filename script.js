let admin = {
    rule: 'All',
    permission: "read"
};

let user = {
    rule: 'Read'
};

user.__proto__ = admin;

console.log(user)