class Student{
    studentName:string;
    studentMark:number;
    studentRollNo:number;

    getStudentGrade() : string{
        if(this.studentMark>=75)
        return "A";
        else if(this.studentMark>=60 && this.studentMark<=74)
        return "B";
        else
        return "C";
    }
}

let s1=new Student();
s1.studentName="Vaibhav";
s1.studentRollNo=105;
s1.studentMark=64.65;
console.log(s1.getStudentGrade());