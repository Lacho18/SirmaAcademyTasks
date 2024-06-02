class Student {
    constructor(name, grade, avrGrade) {
        this.name = name;
        this.grade = grade;
        this.avrGrade = avrGrade;
    }
}

class Greader {
    constructor(gradeValue) {
        this.gradeValue = gradeValue;
        this.numberOfStudents = 0;
        this.names = [];
        this.grades = [];
        this.avrGrade = 0;
    }

    printInfo() {
        console.log(`${this.gradeValue} Grade`);
        console.log(`List of students: ${this.names.join(", ")}`);
        console.log(`Average annual score from last year:`);
        console.log(`${this.getAvrClassGrade()}`);
        console.log(`===`);
    }

    setData(newStudent) {
        this.names.push(newStudent.name);
        this.numberOfStudents++;
        this.grades.push(newStudent.avrGrade);
    }

    getAvrClassGrade() {
        let sum = 0;
        for (const grade of this.grades) {
            sum += grade;
        }

        let result = sum / this.numberOfStudents;
        return result.toFixed(2);
    }
}

function solve(input) {
    let allGraders = [];
    for (let i = 0; i < input.length; i++) {
        let result = [];
        let startIndex = 0;

        //Gets the name and grade values from the command, by getting every substring between : and ,
        while (true) {
            startIndex = input[i].indexOf(':', startIndex);
            if (startIndex === -1) break;

            let lastIndex = input[i].indexOf(',', startIndex);
            if (lastIndex === -1) break;

            result.push(input[i].substring(startIndex + 1, lastIndex));
            startIndex = lastIndex + 1;
        }

        //Gets the average score, which is always the last three characters
        let avrGrade = Number(input[i].substring(input[i].length - 4, input[i].length));
        //Creates the new student
        let newStudent = new Student(result[0], Number(result[1]) + 1, avrGrade);

        //Checks if the student has passed the class
        if (newStudent.avrGrade > 3) {
            //Finds the class that the new student will be
            let gradeObject = allGraders.find((indexValue) => {
                return indexValue.gradeValue === newStudent.grade
            });

            //Adds the student to the class
            if (gradeObject !== undefined) {
                gradeObject.setData(newStudent);
            }
            else {
                //In case no ine is in the class creates the class and adds the new student
                let newGradeObject = new Greader(newStudent.grade);
                newGradeObject.setData(newStudent);
                allGraders.push(newGradeObject);
            }
        }
    }

    for (grader of allGraders) {
        grader.printInfo();
    }
}

solve(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
    ]
);