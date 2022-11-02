function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    get() {
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },
  });
}
export const school = {
      students: {
        0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
        1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
        2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
        3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
        4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
        5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
        6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
        7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
      },
      get aGradeStudents(){
        return Object.values(this.students).filter((student)=>{
          return student.averageGrade>=90&&student.averageGrade<=100
        }).map((item)=>{
          return item.name}).join(', ')
      },
      get bGradeStudents(){
        return Object.values(this.students).filter((student)=>{
          return student.averageGrade>=75&&student.averageGrade<=89
        }).join(', ')
      },
      get cGradeStudents()
      {
        return Object.values(this.students).filter((student)=>{
          return student.averageGrade>=60&&student.averageGrade<=75
        }).join(', ')
      },
      get dGradeStudents(){
        return Object.values(this.students).filter((student)=>student.averageGrade>=0&&student.averageGrade<=59).join(', ')
      },
    }
;

// У нас есть объект school и нужно добавить ему 3 геттера.
//     aGradeStudents который будет возвращать имена студентов перечисленных через запятую в виде строки, которые имеют балл
// от 100 до 90 включительно. Например, 'John, Mike'
// bGradeStudents который будет возвращать имена студентов перечисленных через запятую в виде строки, которые имеют балл
// от 89 до 75 включительно. Например, 'John, Mike'
// cGradeStudents который будет возвращать имена студентов перечисленных через запятую в виде строки, которые имеют балл
// от 75 до 60 включительно. Например, 'John, Mike'
// dGradeStudents который будет возвращать имена студентов перечисленных через запятую в виде строки, которые имеют балл
// от 59 до 0 включительно. Например, 'John, Mike'

// another hard version

// export const school = {
//   students: {
//     0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
//     1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
//     2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
//     3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
//     4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
//     5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
//     6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
//     7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
//   },
//
//   initGetter(gradeType, minGrade, maxGrade) {
//     Object.defineProperty(this, gradeType, {
//       get() {
//         const studentArr = Object.values(school.students);
//
//         let gradeFilter = studentArr.filter(function (item) {
//           if (item.averageGrade <= maxGrade && item.averageGrade >= minGrade) {
//             return item;
//           }
//         });
//
//         let gradeNames = gradeFilter.map(function (item) {
//           return item.name;
//         });
//
//         return gradeNames.join(', ');
//       },
//     });
//   },
//
//   init() {
//     this.initGetter('aGradeStudents', 90, 100);
//     this.initGetter('bGradeStudents', 75, 89);
//     this.initGetter('cGradeStudents', 60, 75);
//     this.initGetter('dGradeStudents', 0, 59);
//   },
// };
//
// school.init();