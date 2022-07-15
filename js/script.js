let myInput = document.querySelector("#input");

let myBotton = document.getElementById("btn");

let myParagraph = document.querySelector(".msg");

myBotton.addEventListener('click', function () {
  // Store Input Value in Variable
  let inputValue = myInput.value;

  if (inputValue !== '') {
    // Put Input Value into Paragraph
    myParagraph.innerHTML = inputValue;
    myParagraph.style.color = "green"
    // Then we make Input Value empty
    myInput.value = null;
  } else {
    // If User Dont Type any Text in the Input
    myParagraph.innerHTML = "This Field is Required";
    myParagraph.style.color = "red";
    myInput.focus();
  }
  
});
