if (typeof window === "object") {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
      //---------------------------------------------------------------------------
      const btn = document.querySelector('.submit-btn');
      btn.addEventListener("click", function () {
        var firstQAnswer = getAnswerString(getSelectedValues());
        if (firstQAnswer != "") {
            sessionStorage.setItem("firstQAnswerJSON", JSON.stringify(firstQAnswer));
            window.location.href = 'secQuestion.html';
        } else{
          alert("Bitte wählen sie mind. 1 aus.");
        }
      });
    });
  }
  
  function getSelectedValues() {
    var checkboxes = document.getElementsByClassName("input");
    let selectedValues = [];
  
    Array.from(checkboxes).forEach((checkbox) => {
      if (checkbox.checked == true) {
        selectedValues.push(checkbox.value);
      }
    });
    return selectedValues;
  }
  
  function getAnswerString(selectedValues){
      var answerString ="";
      for (const value of selectedValues){
        answerString += value;
      }
      return answerString;
  }
  