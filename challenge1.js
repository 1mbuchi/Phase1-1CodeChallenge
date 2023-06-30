//GRADES 
let studentGrade = promt("Enter your marks");
//These are how the grades will be assigned 
if (
    studentGrade >=100 &&
     studentGrade <=0){
        alert("Invalid Marks");
     }
if(
   studentGrade >=79 &&
   studentGrade <=100){
        alert("You scored A");
   }
   else if(
    studentGrade >=60 &&
   studentGrade <=79){
        alert("You scored B");
   }
   else if(
    studentGrade >=49 &&
   studentGrade <=59){
        alert("You scored C");
   }
   else if(
    studentGrade >=40 &&
   studentGrade <=49){
        alert("You scored D");
   }
   else if(
    studentGrade >=0 &&
   studentGrade <=40){
        alert("You scored E");
   }
   else("ERROR!");//NO GRADE INPUT

   