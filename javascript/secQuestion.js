if (typeof window === "object") {
  // Check if document is finally loaded
  document.addEventListener("DOMContentLoaded", function () {
    //---------------------------------------------------------------------------
    const btn = document.querySelector('.submit-btn');
    btn.addEventListener("click", function () {
      var match = getMatchingLicenses(getSelectedValues());
      if (match != ""){
      sessionStorage.setItem("match", JSON.stringify(match));
      window.location.href = 'results.html';
      } else{
        alert("Bitte wählen sie mindestens 1 Möglichkeit aus.");
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

function getMatchingLicenses(selectedValues){
    //var licenses = ['A1', 'A2', 'A3', 'A4'];
    var firstQAnswerJSON = sessionStorage.getItem("firstQAnswerJSON");
    var firstQAnswer = JSON.parse(firstQAnswerJSON);
    var matchingLicenses = [];
    for (const value of selectedValues) {
        matchingLicenses.push(firstQAnswer + value);
    }
    return matchingLicenses;
}