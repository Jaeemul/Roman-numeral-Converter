const input = document.getElementById("number");

const submit = document.getElementById("convert-btn");

const output = document.getElementById("output");

const outputContainer = document.getElementById("output-container");

let romanArray = []; //this array is taken to store the Roman numeral signs.

//Logic written in the convertToRoman function
const convertToRoman = (input) => {

  const arabicNumeralToConvert = [];

  const arabicNumeralsArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
  
  //Makes the calculation for getting the Arabic numerals for the desired input ->
  arabicNumeralsArray.forEach((n)=>{
    input = findDesiredArabicNumerals(n, input)
    }); 
  

  function findDesiredArabicNumerals(n, num)  { 
    if(n <= num){
      num = num-n;
      arabicNumeralToConvert.push(n);
      return findDesiredArabicNumerals(n, num);
    }
    return num;  
  }
// <- Makes the calculation for getting the Arabic numerals for the desired input


//Gets the Roman Numerals for the required Arabic numerals returned from the above findDesiredArabicNumerals function. 
  let counter=0;
  arabicNumeralToConvert.forEach((n)=> {
    n = returnRomanNumerals(n, counter++);
  })
  
  
  output.innerText = (romanArray.join("")); // romanArray that contains the Roman signs are joined together and showed inside the output div.

}
  

const takeInput = () => {
  
  const inputInt = parseInt(input.value);
  if(!input.value){
    output.innerText = "Please enter a valid number";
    input.value ="";
    return;
  }
  else if(inputInt <= 0){
    output.innerText = "Please enter a number greater than or equal to 1";
    input.value ="";
    return;
  }
  else if(inputInt > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
    input.value ="";
    return;
  }

  input.value = "";
  convertToRoman(inputInt);
  
  //clearing the romanArray
  const blankArray =[];
  romanArray = blankArray;
  //clearing the romanArray
  
}

const returnRomanNumerals = (num, counter) => {
  switch(num){
   case 1000:
    romanArray[counter] = ("M");
    return; 
   case 900:
    romanArray[counter] = ("CM");
    return;
   case 500:
    romanArray[counter] = ("D");
    return;
   case 400:
    romanArray[counter] = ("CD");
    return;
   case 100:
    romanArray[counter] = ("C");
    return;
   case 90:
    romanArray[counter] = ("XC");
    return;
   case 50:
    romanArray[counter] = ("L");
    return;
   case 40:
    romanArray[counter] = ("XL");
    return;
   case 10:
    romanArray[counter] = ("X");
    return;
   case 9:
    romanArray[counter] = ("IX");
    return;
   case 5:
    romanArray[counter] = ("V");
    return;
   case 4:
    romanArray[counter] = ("IV");
    return;
   case 1:
    romanArray[counter] = ("I");            
    return;
 }
}

submit.addEventListener("click", ()=>{
  takeInput();
  if(input.value != null){
    outputContainer.style.display = "block";
  }
})

input.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    takeInput();
  }
})



