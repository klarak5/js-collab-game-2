let stan = stanPoczatkowy();

function start() {
  console.log(stanPoczatkowy());

  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
}

function wykonaj(komenda) {
  if (stan.wygrana === true) {
    return "Udalo ci sie juz uciec. Jesli chcesz zagrac ponownie, wpisz gra.start()";
  }

  const wynik = przejscie(stan, komenda);

  stan = wynik.stan;

  if (stan.energia < 1 && stan.wygrana === false) {
    return "Skonczyla ci sie energia. Przegrales. Jesli chcesz zagrac ponownie, wpisz gra.start()";
  }

  return wynik.komunikat;
}

function pomoc() {
  console.log(
    'Dostepne komendy bez kosztu: gra.start(), gra.pomoc(), gra.status(), gra.mapa(), gra.rozejrzyj()")',
  );
  console.log(
    'Dostepne komendy z kosztem: gra.wykonaj("lewo"), gra.wykonaj("prawo"), gra.wykonaj("karta"), gra.wykonaj("bezpiecznik"), gra.wykonaj("napraw"), gray.wykonaj("otworz"), gra.wykonaj("klucz"), gra.wykonaj("wyjdz")',
  );
  console.log("Kazdy udany ruch i wykonana akcja kosztuja dokladnie 1 energie");
  console.log(
    "Aby otworzyc wyjscie musisz miec karte, klucz, oraz zasilanie musi byc wlaczone",
  );
}

function status() {
  console.log("Pokoj: " + nazwaPokoju(stan.pokoj));
  console.log("Energia: " + stan.energia);
  console.log("Klucz: " + (stan.klucz ? "tak" : "nie"));
  console.log("Bezpiecznik: " + (stan.bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: " + (stan.zasilanie ? "tak" : "nie"));
  console.log("Karta: " + (stan.karta ? "tak" : "nie"));
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
      return "Biuro";
    case 5:
      return "Wyjscie";
    default:
      return "Nieznane pomieszczenie";
  }
}

function mapa() {
  for (let numer = 1; numer <= 5; numer = numer + 1) {
    if (numer === stan.pokoj) {
      console.log(numer + " " + nazwaPokoju(numer) + " <-- jestes tutaj");
    } else {
      console.log(numer + " " + nazwaPokoju(numer));
    }
  }
}

function rozejrzyj() {
  switch (stan.pokoj) {
    case 1: {
      if (stan.klucz == false) {
        return "Klucz lezy na biurku";
      } else {
        return "Nic ciekawego";
      }

      break;
    }
    case 2: {
      if (!stan.bezpiecznik && !stan.zasilanie) {
        return "Bezpiecznik lezy na polce";
      } else {
        return "Nic ciekawego";
      }

      break;
    }
    case 3: {
      if (stan.zasilanie) {
        return "Zasilanie dziala";
      } else {
        return "Zasilanie nie dziala";
      }

      break;
    }
    case 4: {
      if (stan.karta) {
        return "Nic ciekawego";
      } else {
        return "Na biurku lezy karta";
      }

      break;
    }
    case 5: {
      return "Przed toba jest wyjscie. Aby je otworzyc, musisz miec karte, klucz, oraz dzialajace zasilanie";

      break;
    }
    default: {
      return "Nieznane polecenie";
    }
  }
}

window.gra = {
  wykonaj: wykonaj,
  status: status,
  mapa: mapa,
  rozejrzyj: rozejrzyj,
  pomoc: pomoc,
  start: start,
};