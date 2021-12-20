var data = {
  A1: {
    name: "Sportbootführerschein (SBF) See",
    description:
      "Amtliche Fahrerlaubnis zum Führen von motorisierten Sportbooten auf den Seeschifffahrtsstraßen. Vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS.",
    img: "img/SBF_See_boat.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/motorbootkueste/",
    age: "16",
    area: "Schiffahrtsstraßen",
    requirements: {
      other: "KFZ-Führerschein (ab 18 Jahren)",
    },
  },
  A2: {
    name: "Sportbootführerschein (SBF) Binnen Motor",
    description:
      "Amtliche Fahrerlaubnis zum Führen von Sportbooten (unter Motor) unter 20 Meter Länge auf den Binnenschifffahrtsstraßen (Rhein 15 m), vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS.",
    img: "img/Yacht_Binnen.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/motorbootbinnen/",
    age: "16",
    area: "Binnenschiffahrtsstraßen",
    requirements: {
      other: "KFZ-Führerschein (ab 18 Jahren)",
    },
  },
  A3: {
    name: "Sportseeschifferschein (SSS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in küstennahen Seegewässern (alle Meere bis 30 sm und Ost- und Nordsee, Mittelmeer und Schwarzes Meer). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in den küstennahen Seegewässern. Voraussetzung: Mind. SBF See und 1000 sm",
    img: "img/Yacht_Binnen.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/sportseeschifferschein/",
    age: "16",
    area: "Binnenschiffahrtsstraßen",
    requirements: {
      other: "KFZ-Führerschein (ab 18 Jahren)",
    },
  },
  A4: {
    name: "Bodenseeschifferpatent (A)",
    description:
      "Vorgeschrieben für Fahrzeuge mit Maschinenantrieb über 4,4 kW. ",
    img: "img/Yacht_Binnen.jpg",
    link: "https://www.abc-wassersport.de/onlinekurse/",
    age: "16",
    area: "Binnenschiffahrtsstraßen",
    requirements: {
      other: "KFZ-Führerschein (ab 18 Jahren)",
    },
  },
};

var retrievedData = sessionStorage.getItem("match");
var matchedLicenses = JSON.parse(retrievedData);
var licContainer = document.getElementById("lic-cont");
var headline = document.getElementById("headline");

if (matchedLicenses.length > 1) {
  headline.innerHTML = "Führerscheinempfehlungen:";
}

matchedLicenses.forEach((match) => {
  //Parent div for each individual card
  var newParent = document.createElement("div");
  newParent.classList.add("lic-card");

  //Image
  addImg(data[match].img, newParent);

  //Text Content
  var textCont = document.createElement("div");
  textCont.classList.add("card-text");
  newParent.appendChild(textCont);

  //Add Text blocks and Button
  addElement("h3", data[match].name, "name", textCont);
  addElement("p", data[match].description, "description", textCont, match + "Description");
  addElement("button", "Mehr erfahren", "read-more-btn", textCont, match + "Button");

  licContainer.appendChild(newParent);
  const btn = document.getElementById(match + "Button");
  btn.addEventListener("click", function () {
    window.location.href = data[match].link;
  });
});









function addImg(src, parent) {
  var imgCont = document.createElement("div");
  imgCont.classList.add("img-cont");
  var img = document.createElement("img");
  img.src = src;
  img.classList.add("lic-img");
  imgCont.appendChild(img);
  parent.appendChild(imgCont);
}

function addElement(element, content, className, parent, id) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.classList.add(className);
  if (id != null) {
    newElement.id = id;
  }
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
}
