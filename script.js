function disableSubmit() {
    document.getElementById("submit").disabled = true;
   }
  
    function activateButton(element) {
  
        if(element.checked){
          document.getElementById("submit").disabled = false;
         }
         else  {
          document.getElementById("submit").disabled = true;
        }
    
  
    }
  
    function validateForm() {
        var x = document.forms["myForm"]["fill"].value;
        if (x == " ") {
          alert("Thank you..!");
          return false;
        }
      }

   