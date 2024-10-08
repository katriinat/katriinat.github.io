// Haetaan JSON-data Githubista
fetch("https://raw.githubusercontent.com/katriinat/katriinat.github.io/refs/heads/main/digitekniikat.JSON")

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
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
    teksti = teksti + "<h3>Opintojakso " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op" + "</h3>";
    teksti = teksti + "<ul>"
        for(var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
        }
    teksti = teksti + "</ul>";
    teksti = teksti + "<h3>Linkit " + "</h3>" + "<ul>"
        for (var i = 0; i < data.tekniikat.length; i++) {
            teksti = teksti + "<li>" + data.tekniikat[i].aihe + " <a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki + "</a></li>";
        }
    teksti = teksti + "</ul>";

    // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
    }
