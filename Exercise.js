
// object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1603',
      grades: [89, 34, 67]
    },
    {
      course: 'INFO 1601',
      grades: [89, 34, 67]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1601',
      grades: [100, 89, 79]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1600',
      grades: [89, 34, 67]
    }
  ]
};

const students = [bob, sally, paul];


// 1. getAverageGrade(student, course)
// Returns the average grade for a course
// Returns -1 if the course is not found


function getAverageGrade(student, course) {

  for (let record of student.transcript) {

    if (record.course === course) {

      let sum = 0;

      for (let grade of record.grades) {
        sum += grade;
      }

      return sum / record.grades.length;
    }

  }

  return -1; // course not found
}


// 2. getAssignmentMark(student, course, num)
// Returns the mark for a specific assignment
// Returns -1 if course does not exist


function getAssignmentMark(student, course, num) {

  for (let record of student.transcript) {

    if (record.course === course) {

      return record.grades[num]; // assignment index

    }

  }

  return -1;
}


// 3. averageAssessment(students, courseName, assignment)
// Returns average mark for an assignment


function averageAssessment(students, courseName, assignment) {

  let sum = 0;
  let count = 0;

  for (let student of students) {

    let mark = getAssignmentMark(student, courseName, assignment);

    if (mark !== -1) {
      sum += mark;
      count++;
    }

  }

  if (count === 0) {
    return -1;
  }

  return sum / count;
}

// Test Examples

console.log(getAverageGrade(bob, "INFO 1601"));
console.log(getAssignmentMark(sally, "INFO 1601", 1));
console.log(averageAssessment(students, "INFO 1601", 0));
