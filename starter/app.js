let stan=stanPoczatkowy();

function start() {
  console.log(stanPoczatkowy());

  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  //pomoc();
  //rozejrzyj();
}

function wykonaj(komenda){
  const wynik=przejscie(stan, komenda);

  stan=wynik.stan;

  console.log(stan);
  
  return wynik.komunikat;
}

function pomoc() {
  console.log(
    'Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), zakonczTure(), wykonaj("lewo") wykonaj("prawo"), wykonaj("karta"), wykonaj("bezpiecznik"), wykonaj("napraw"), wykonaj("wyjdz")',
  );
  console.log("Kazdy udany ruch i wykonana akcja kosztuja dokladnie 1 energie");
}

function status() {
  console.log("Pokoj: " + nazwaPokoju(stan.pokoj));
  console.log("Energia: " + stan.energia);
  console.log("Karta: " + (stan.karta ? "tak" : "nie"));
  console.log("Bezpiecznik: " + (stan.bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: " + (stan.zasilanie ? "tak" : "nie"));
  if (stan.koniec) {
    console.log("Stan gry: " + (stan.wygrana ? "wygrana" : "przegrana"));
  } else {
    console.log("Stan gry: w trakcie");
  }
}

function nazwaPokoju(numer) {
  switch (numer) {
    case 1:
      return "Recepcja";
    case 2:
      return "Magazyn";
    case 3:
      return "Serwerownia";
    case 4:
      return "Wyjscie";
    default:
      return "Nieznane pomieszczenie";
  }
}

/*function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA

function mapa() {
  for (let numer = 1; numer <= 4; numer = numer + 1) {
    if (numer === pokoj) {
      console.log(numer + " " + nazwaPokoju(numer) + " <-- jestes tutaj");
    } else {
      console.log(numer + " " + nazwaPokoju(numer));
    }
  }
}
function rozejrzyj() {
  switch (pokoj) {
    case 1: {
      if (karta == false) {
        return "Karta lezy na biurku";
      } else {
        return "Nic ciekawego";
      }

      break;
    }
    case 2: {
      if (!bezpiecznik && !zasilanie) {
        return "Bezpiecznik lezy na polce";
      } else {
        return "Nic ciekawego";
      }

      break;
    }
    case 3: {
      if (zasilanie) {
        return "Zasilanie dziala";
      } else {
        return "Zasilanie nie dziala";
      }

      break;
    }
    case 4: {
      return "Musisz zabrac karte, zabrac bezpiecznik, oraz zamontowac posiadany bezpiecznik i przywrocic zasilanie";

      break;
    }
    default: {
      return "Nieznane polecenie";
    }
  }
}

// SEKCJA B — RUCH
function idz(kierunek) {
  if (koniec) {
    return "Gra sie zakonczyla";
  }

  let nastepnyPokoj = pokoj;

  switch (kierunek) {
    case "prawo":
      nastepnyPokoj++;
      break;
    case "lewo":
      nastepnyPokoj--;
      break;
    default:
      return "Nieznany kierunek";
  }

  if (nastepnyPokoj < 1 || nastepnyPokoj > 4) {
    return "Na twojej drodze jest sciana";
  }

  pokoj = nastepnyPokoj;
  console.log(rozejrzyj());
  zakonczTure();
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  if (koniec) {
    return "Gra sie zakonczyla";
  }

  switch (co) {
    case "karta": {
      if (pokoj == 1 && karta == false) {
        karta = true;
        console.log("Zabierasz karte");
      } else {
        return console.log("Tutaj nie ma karty do zabrania");
      }

      break;
    }
    case "bezpiecznik": {
      if (pokoj == 2 && bezpiecznik == false && zasilanie == false) {
        bezpiecznik = true;
        console.log("Zabierasz bezpiecznik");
      } else {
        return console.log("Tutaj nie ma bezpiecznika do zabrania");
      }

      break;
    }
    case "napraw": {
      if (pokoj == 3 && bezpiecznik == true && zasilanie == false) {
        bezpiecznik = false;
        zasilanie = true;
        console.log("Zasilanie zostalo naprawione");
      } else if (pokoj != 3) {
        return console.log("Tutaj nie ma zasilania");
      } else if (zasilanie == true) {
        return console.log("Zasilanie zostalo juz wczesniej naprawione");
      } else {
        return console.log("Nie jestes w stanie naprawic zasilania");
      }

      break;
    }
    case "wyjdz": {
      if (pokoj == 4 && karta == true && zasilanie == true) {
        wygrana = true;
        koniec = true;
      } else if (pokoj != 4) {
        return console.log(
          "Nie znajdujesz sie w pokoju, w ktorym jest wyjscie",
        );
      } else if (karta == false) {
        return console.log("Nie masz karty");
      } else {
        return console.log("Zasilanie nie zostalo naprawione");
      }

      break;
    }
    default: {
      return console.log("Nieznana akcja");
    }
  }

  zakonczTure();
}*/

start();