class License {
    constructor(name, age, area, boattype, link){
        this.name = name;
        this.age = age;
        this.area = area;
        this.boattype = boattype; //"befähigt für"
        this.link = link; 
    }
}

var data = {
    "A1": {
      "name": "Sportbootführerschein (SBF) See",
      "description" : "Amtliche Fahrerlaubnis zum Führen von motorisierten Sportbooten auf den Seeschifffahrtsstraßen. Vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS.",
      "img" : "img/SBFSee.jpg",
      "age": "16",
      "area": "Schiffahrtsstraßen",
      "requirements" : {
          "other" : "KFZ-Führerschein (ab 18 Jahren)" 
      }
    },
    "A2": {
      "name": "Sportbootführerschein (SBF) Binnen Motor",
      "description" : "Amtliche Fahrerlaubnis zum Führen von Sportbooten (unter Motor) unter 20 Meter Länge auf den Binnenschifffahrtsstraßen (Rhein 15 m), vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS.",
      "img" : "img/SBFBinnen.jpg",
      "age": "16",
      "area": "Binnenschiffahrtsstraßen",
      "requirements" : {
          "other" : "KFZ-Führerschein (ab 18 Jahren)" 
      }
    }
  };

const A2 = new License("SBF See", 16, "Seeschiffahrtsstraßen", ["Unter 20m Länge", "Mehr als 15 PS"], "https://www.abc-wassersport.de/segelscheine/motorbootkueste/");

var retrievedData = sessionStorage.getItem("match");
var matchedLicenses = JSON.parse(retrievedData);
var licContainer = document.getElementById("lic-cont");
var headline = document.getElementById("headline");

if (matchedLicenses.length > 1) {
    headline.innerHTML = "Führerscheinempfehlungen:"
}

matchedLicenses.forEach(match => {
    var newParent = document.createElement("div");
    newParent.classList.add("lic-card");
    addImg(data[match].img, newParent);
    var textCont = document.createElement("div");
    textCont.classList.add("card-text");
    newParent.appendChild(textCont);
    addElement("div", data[match].name, "name", textCont);
    addElement("div", "Alter: " + data[match].age, "age", textCont);
    addElement("div", "Gültigkeitsbereich: " + data[match].area, "area", textCont);
    licContainer.appendChild(newParent);
});

function addImg(src, parent) {
    var imgCont = document.createElement("div");
    imgCont.classList.add("img-cont")
    var img = document.createElement("img");
    img.src = src;
    img.classList.add("lic-img");
    imgCont.appendChild(img)
    parent.appendChild(imgCont);
}

function addElement(element, content, className, parent) {
    var newElement = document.createElement(element);
    var newContent = document.createTextNode(content);
    newElement.classList.add(className);
    newElement.appendChild(newContent);
    parent.appendChild(newElement);
}
