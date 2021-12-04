import {Student} from "./Student";
class School{
     students:Student[]=[
         new Student("aaa",101),
         new Student("bbb",102),
         new Student("ccc",103)
        ];
        display() : void{
            for(var student in this.students){
                console.log(this.students[student]);
            }
        }
}
let school=new School();
school.display();