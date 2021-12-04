var User = /** @class */ (function () {
    function User(userid, username) {
        this.userid = userid;
        this.username = username;
    }
    return User;
}());
var user = new User(101, "vaibhav");
console.log(user.userid + "   " + user.username);
