function Student(name,age,gender){
    this.student_name = name;
    this.student_age = age;
    this.student_gender= gender;
    this.display = ()=>
    {
        console.log("Student Name: " + this.student_name);
        console.log("Student Age: "+this.student_age);
        console.log("Student gender: "+this.student_gender);
        console.log();
    }
}

const s1 = new Student('Pankaj',23,'Male');
const s2 = new Student('Reena',25,'Female');
const s3 = new Student('Rajeev',26,'Male');

s1.display();
s2.display();
s3.display();

Student.prototype.branch='CSE';
Student.prototype.college='ABC';
console.log(s1.branch);
console.log(s1.college);

console.log(s2.branch);
console.log(s2.college);

console.log(s3.branch);
console.log(s3.college);

