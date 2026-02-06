let userInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
userInput.max= today;   //Prevents user from selecting future dates
function calculateAge(){
   let birthDate = new Date(userInput.value);
   //Day, Month, Year of Birth
   let d1 = birthDate.getDate();
   let m1 = birthDate.getMonth() + 1; // It counts months as 0-11, so +1 makes 1-12
   let y1 = birthDate.getFullYear();
   //Today's day, month, year
   let today = new Date();
   let d2 = today.getDate();
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();
   //difference variables
   let d3, m3, y3;
   y3 = y2-y1;
   if(m2>=m1){    //checks if current month is greater than birth month, then subtracts
    m3 = m2-m1; 
   }else{
    y3--;        //takes to the previous year
    m3 = 12 + m2 - m1;
   } 
   if(d2>=d1){     //same condition as month
    d3 = d2-d1;
   }else{
    m3--;
    d3 = getDaysInMonth(y1,m1) +d2-d1; //adds number of days in current month

   }
   if(m3<0){  //fix negative months after borrowing
    m3=11;
    y3--;
   }
   result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;

}
function getDaysInMonth(year, month){   //returns number of days in a give month of given year. It 
                                        //actually depends on days of months like 30 or 31 days, or leap year
    return new Date(year, month, 0).getDate();
}