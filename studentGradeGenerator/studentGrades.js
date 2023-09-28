let studentGrade = ['A', 'B', 'C', 'D', 'E'];
let studentMarks;
function studentGradeGenerator(studentMarks = 0){
if(studentMarks > 79){
console.log("The student grade is: ", studentGrade[0]);
}
else if(studentMarks >= 60 && studentMarks <= 79)
{
console.log("The student grade is: ", studentGrade[1]);
}
else if(studentMarks >= 49 && studentMarks <= 59)
{
console.log("The student grade is: ", studentGrade[2]);
}
else if(studentMarks >= 40 && studentMarks < 49)
{
console.log("THe student grade is: ", studentGrade[3]);
}
else if(studentMarks >= 0 && studentMarks < 40)
{
console.log("The student grade is: ", studentGrade[4]);
}
else if(studentMarks < 0 || studentMarks > 100){
throw new Error("Invalid Input");
}

}
studentGradeGenerator(studentMarks);
