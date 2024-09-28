// Haetaan JSON-data Githubista
fetch("https://raw.githubusercontent.com/katriinat/katriinat.github.io/refs/heads/main/toteutustiedot.JSON")

    // Muunnetaan vastaus JSON-muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (JSON-muotoinen) vastaus
    .then(function (responseJson) {   
        
    // Kutsutaan funktiota ja välitetään sille JSON-vastaus
    kerro(responseJson);

    })

    // Jos tuli virhe
    .catch(function (error) { document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(data){
    // Määritellään muuttuja, johon tulostettava tieto kerätään
    var teksti = ""; 

    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>"; 

    // Muiden tietojen käsittely
    teksti = teksti + "<p>" + data.kuvaus + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='Työntekijöitä Rautakonttorin tietokonekeskuksessa Rautatalossa' ></p>";
    teksti = teksti + "<h3>" + data.toteutus.nimi + " " + data.toteutus.tunnus + " " + data.toteutus.opintopisteet + " op" + "</h3>";
    teksti = teksti + "<p>Toteutuksen ajankohta: " + data.alkupvm + "-" + data.loppupvm + "</p>";
    teksti = teksti + "<p>Toteutuksen kesto: " + data.kesto + " viikkoa" + "</p>";
    teksti = teksti + "<p>Osallistujien lukumäärä: " + data.osallistujat_lkm + "</p>";
    teksti = teksti + "<h4>Osallistujat " + "</h4>" + "<ul>"
        for (var i = 0; i < data.osallistujat.length; i++) {
            teksti = teksti + "<li>" + data.osallistujat[i].etunimi + data.osallistujat[i].sukunimi + "</li>";
        }
    teksti = teksti + "</ul>";

    // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
    }