// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
function createStudent(name, studentYear) {
  return {
    name,
    studentYear,
    courses: [],
    info() {
      console.log(`${name} is a ${studentYear} year student`);
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(courseCode, note) {
      let course = this.courses.find(course => course.code === courseCode);

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
    updateNote(courseCode, note) {
      let course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  }
} 

const school = {
  students: [],
  addStudent(studentName, studentYear) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(studentYear)) {
      let student = createStudent(studentName, studentYear)
      this.students.push(student);
      return student; 
    } else {
      console.log('Invalid Year')
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },
  addGrade(student, courseName, grade) {
    let course = student.courses.find(course => course.name === courseName);

    if (course) {
      course.grade = grade;
    }
  },
  getReportCard(student) {
    student.courses.forEach(({ grade, name }) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`)
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },
  courseReport(courseName) {

    let courseStudents = this.students.filter(student => {
      return student.courses.find(course => course.name === courseName && typeof course.grade === 'number');
    });


    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`)
      courseStudents.forEach(student => {
        let course = student.courses.find(course => course.name === courseName);
        console.log(`${student.name}: ${course.grade}`)
      })
  
      
      console.log('---')
  
      let average = courseStudents.reduce((total, student) => {
        let course = student.courses.find(course => course.name === courseName);
        return total + course.grade;
      }, 0) / courseStudents.length;
  
      console.log(`Course Average: ${String(average)}`);
    }
  },

}


let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(bar, 'Math', 101);
school.enrollStudent(qux, 'Math', 101);
school.addGrade(foo, 'Math', 95);
school.addGrade(bar, 'Math', 91);
// school.addGrade(qux, 'Math', 93);
school.getReportCard(foo);
school.courseReport('Math');
// school.courseReport('Advanced Math');
school.courseReport('Physics');