
//Warning: Image filenames don't always match the license they are assigned to

var data = {
  A1: {
    name: "Sportbootführerschein (SBF) Binnen Motor",
    description:
      "Amtliche Fahrerlaubnis zum Führen von Sportbooten (unter Motor) unter 20 Meter Länge auf den Binnenschifffahrtsstraßen (Rhein 15 m), vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS (Rhein 5 PS).",
    requirement: "None",
    img: "img/SBF_Binnen_Motor.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/motorbootbinnen/",
  },
  B1: {
    name: "Sportbootführerschein Binnen Segel + Motor",
    description:
      "Amtliche Fahrerlaubnis zum Führen von Sportbooten (unter Motor oder Segel) unter 20 Meter Länge auf den Binnenschifffahrtsstraßen (Rhein unter 15 m), vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS (Rhein über 5 PS). In Berliner Gewässern ist der Sportbootführerschein Binnen (Segeln) vorgeschrieben.",
    requirement: "None",
    img: "img/SKS_Segel.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/theorie-segeln-binnen/",
  },
  AB1: {
    name: "Sportbootführerschein Binnen Segel + Motor",
    description:
      "Amtliche Fahrerlaubnis zum Führen von Sportbooten (unter Motor oder Segel) unter 20 Meter Länge auf den Binnenschifffahrtsstraßen (Rhein unter 15 m), vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS (Rhein über 5 PS). In Berliner Gewässern ist der Sportbootführerschein Binnen (Segeln) vorgeschrieben.",
    requirement: "None",
    img: "img/SBF_Binnen_Segel.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/theorie-segeln-binnen/",
  },
  A2: {
    name: "Sportbootführerschein (SBF) See",
    description:
      "Amtliche Fahrerlaubnis zum Führen von motorisierten Sportbooten auf den Seeschifffahrtsstraßen. Vorgeschrieben für Fahrzeuge unter Motor mit mehr als 15 PS.",
    requirement: "None",
    img: "img/SBF_See_Motor.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/motorbootkueste/",
  },
  //B2 und AB2 nicht enthalten, weil durch mehrere Führerscheine ersetzt wird
  A3: {
    name: "Sportseeschifferschein (SSS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in küstennahen Seegewässern (alle Meere bis 30 sm und Ost- und Nordsee, Mittelmeer und Schwarzes Meer). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in den küstennahen Seegewässern.",
    requirement: "Voraussetzung: SBF See und 1000 Seemeilen; SKS empfohlen",
    img: "img/SSS_Motor.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/sportseeschifferschein/",
  },
  B3: {
    name: "Sportseeschifferschein (SSS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in küstennahen Seegewässern (alle Meere bis 30 sm und Ost- und Nordsee, Mittelmeer und Schwarzes Meer). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in den küstennahen Seegewässern.",
      requirement: "Voraussetzung: SBF See und 1000 Seemeilen; SKS empfohlen",
      img: "img/SSS_Segel.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/sportseeschifferschein/",
  },
  AB3: {
    name: "Sportseeschifferschein (SSS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in küstennahen Seegewässern (alle Meere bis 30 sm und Ost- und Nordsee, Mittelmeer und Schwarzes Meer). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in den küstennahen Seegewässern.",
      requirement: "Voraussetzung: SBF See und 1000 Seemeilen; SKS empfohlen",
      img: "img/SSS_Segel.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/sportseeschifferschein/",
  },
  A4: {
    name: "Bodenseeschifferpatent (A)",
    description:
      "Vorgeschrieben für Fahrzeuge auf dem Bodensee mit Maschinenantrieb über 4,4 kW.",
      requirement: "None",
      img: "img/Bodensee_A.jpg",
    link: "https://www.abc-wassersport.de/onlinekurse/onlinekurs/",
  },
  B4: {
    name: "Bodenseeschifferpatent (D)",
    description:
      "Vorgeschrieben für Segelfahrzeuge auf dem Bodensee mit mehr als 12 qm Segelfläche.",
      requirement: "None",
      img: "img/SBF_Binnen_Segel.jpg",
    link: "https://www.abc-wassersport.de/onlinekurse/onlinekurs/",
  },
  AB4: {
    name: "Bodenseeschifferpatent (A+D)",
    description:
      "Vorgeschrieben für Fahrzeuge auf dem Bodensee mit Maschinenantrieb über 4,4 kW sowie Segelfahrzeug mit mehr als 12m² Segelfläche.",
      requirement: "None",
      img: "img/SKS_Segel.jpg",
    link: "https://www.abc-wassersport.de/onlinekurse/onlinekurs/",
  },
  SKS: {
    name: "Sportküstenschifferschein (SKS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in Küstengewässern (alle Meere bis 12 sm Abstand von der Küste). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in Küstengewässern.",
      requirement: "Voraussetzung: SBF See",
      img: "img/Bodensee_D.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/segelscheinkueste/",
  },
  SHS: {
    name: "Sporthochseeschifferschein (SHS)",
    description:
      "Amtlicher, empfohlener Führerschein zum Führen von Yachten mit Motor und unter Segel in der weltweiten Fahrt (alle Meere). Vorgeschrieben zum Führen von gewerbsmäßig genutzten Sportbooten in der weltweiten Fahrt.",
      requirement: "Voraussetzung: SSS",
      img: "img/SHS.jpg",
    link: "https://www.abc-wassersport.de/segelscheine/segelscheinkueste/",
  },
  SRC: {
    name: "SRC Funkzeugnis",
    description:
      "Amtliches Funkzeugnis zum Betrieb einer UKW-Funkstelle im Seefunkdienst im Weltweiten Seenot- und Sicherheitsfunksystem GMDSS (Reichweite bis ca. 35 sm) auf Sportbooten.",
      requirement: "None",
      img: "img/SRC2.jpg",
    link: "https://www.abc-wassersport.de/funkzeugnis/src/",
  },
  LRC: {
    name: "LRC Funkzeugnis",
    description:
      "Amtliches Funkzeugnis zur uneingeschränkten Teilnahme am Seefunkdienst im GMDSS für UKW, Grenzwelle, Kurzwelle und Seefunk über Satelliten (Inmarsat) auf Sportbooten.",
      requirement: "None",
      img: "img/LRC2.jpg",
    link: "https://www.abc-wassersport.de/funkzeugnis/lrc/",
  },
  UBI: {
    name: "UBI Funkzeugnis",
    description:
      "Amtlicher Funkschein zum Betrieb einer UKW Schiffsfunkstelle auf Binnenschifffahrtsstraßen.",
      requirement: "None",
      img: "img/UBI2.jpg",
    link: "https://www.abc-wassersport.de/funkzeugnis/ubi/",
  },
};

var retrievedData = sessionStorage.getItem("match");
//matchedLicenses String-Array for example: [AB2, AB3, AB4] OR [B1, B3]
var matchedLicenses = JSON.parse(retrievedData);
var licContainer = document.getElementById("lic-cont");
var headline = document.getElementById("headline");

var secQAnswers = [];

const back_btn = document.querySelector('.back-btn');
    back_btn.addEventListener("click", function () {
      window.location.href = 'index.html';
    });

matchedLicenses.forEach((match) => {
  if(match == "B2" || match == "AB2"){
    createLicenseCard("A2");
    createLicenseCard("SKS");
  } else{
    createLicenseCard(match);
  }
  //Only number values from Question 2 (für Funkzeugnisse)
  secQAnswers.push(match.charAt(match.length-1));
});

if (secQAnswers.includes("3")) {
  createLicenseCard("SHS");
  createLicenseCard("LRC");
} else if(secQAnswers.includes("2")){
  createLicenseCard("SRC");
}
if (secQAnswers.includes("1") || secQAnswers.includes("4")){
  createLicenseCard("UBI");
}

function createLicenseCard(match){
  //Parent div for each individual card
  var newParent = document.createElement("div");
  newParent.classList.add("lic-card");

  //Image
  addImg(data[match].img, newParent);

  //Text Container
  var textCont = document.createElement("div");
  textCont.classList.add("card-text");
  newParent.appendChild(textCont);

  //Add Text blocks and Button
  addElement("h3", data[match].name, "name", textCont, match);
  addElement("p", data[match].description, "description", textCont, match, match + "Description");
  if (data[match].requirement != "None") {
    addElement("p", data[match].requirement, "requirements", textCont, match, match + "Requirements");
  }
  addElement("button", "Mehr erfahren", "read-more-btn", textCont, match, match + "Button");

  licContainer.appendChild(newParent);
  const btn = document.getElementById(match + "Button");
  btn.addEventListener("click", function () {
    //window.location.href = data[match].link;
    window.open(data[match].link);
  });
}

function addImg(src, parent) {
  var imgCont = document.createElement("div");
  imgCont.classList.add("img-cont");
  var img = document.createElement("img");
  img.src = src;
  img.classList.add("lic-img");
  imgCont.appendChild(img);
  parent.appendChild(imgCont);
}

function addElement(element, content, className, parent, curMatch, id) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.classList.add(className);
  if(content.length >= 320 || ((content.length > 280) && (data[curMatch].requirement != "None"))){
    parent.classList.add("very-long-text");
  } else if(content.length > 290 && content.length < 320 || ((content.length > 200) && (data[curMatch].requirement != "None"))){
    parent.classList.add("long-text");
  }

  if (id != null) {
    newElement.id = id;
  }
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
}

