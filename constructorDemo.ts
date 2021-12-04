class User{
    userid:number;
    username:string;
    constructor(userid:number,username:string){
        this.userid=userid;
        this.username=username;
    }
}
let user=new User(101,"vaibhav");
console.log(user.userid+"   "+user.username);