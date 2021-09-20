const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

   /*
   1. A method called “findPerson” that takes two arguments, 
a type (either a student or teacher), and an id.
It will return a particular object of that person.
*/

school.findperson = function(type , id) {
  //  console.log( this[type].filter(function(val){return val.id == id})[0]);
    return this[type].filter(function(val){return val.id == id})[0]
}

console.log(school.findperson("students",13));
/*
2. A method called “assignStudent” that takes two 
arguments, a student’s id and a subject.
Assign all of the students to the first available teacher who 
teaches that subject and who is not in full capacity. If all of 
the teachers are in full capacity log to the console “Sorry, 
no available teachers left”.
*/

school.assignstudent=function(id,subj){
let teacher = school.teachers.filter(function (teach){ return teach.subjects.includes(subj)})[0]
if (teacher.capacityLeft > 0){
    teacher.students.push(school.findperson('students',id))
    teacher.capacityLeft--;
    }
    else{
    return('Sorry, no available teachers left');
    }
}

school.students.forEach(student=>{school.assignstudent(student.is,"chemistry")})

/*
3. A method called “assignTeachersSubject” that takes two 
arguments, the teacher’s id, a new subject.
Assign the new subject to that particular teacher if that 
subject doesn’t exist in their array of subjects 
school.assignTeachersSubject = function (techer_id,sub){
    school.teachers.forEach(teacher => {
        if(teacher.id === techer_id && teacher.subjects.includes(sub)){
            teacher.subjects.push(sub)
        }
    })
}

console.log(school.teachers.assignstudent);
/*
4. Create a new method of anything you want
*/