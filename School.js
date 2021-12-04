"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new Student_1.Student("aaa", 101),
            new Student_1.Student("bbb", 102),
            new Student_1.Student("ccc", 103)
        ];
    }
    School.prototype.display = function () {
        for (var student in this.students) {
            console.log(this.students[student]);
        }
    };
    return School;
}());
var school = new School();
school.display();
