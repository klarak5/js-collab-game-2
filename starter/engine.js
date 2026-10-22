const MAKS_ENERGIA = 10;

const pokoje = [
  { id: 1, nazwa: "Recepcja" },
  { id: 2, nazwa: "Magazyn" },
  { id: 3, nazwa: "Serwerownia" },
  { id: 4, nazwa: "Biuro" },
  { id: 5, nazwa: "Wyjscie" },
];

function stanPoczatkowy() {
  return {
    pokoj: 1,
    energia: MAKS_ENERGIA,
    karta: false,
    bezpiecznik: false,
    zasilanie: false,
    klucz: false,
    koniec: false,
    wygrana: false,
  };
}

function przejscie(stanPrzed, komenda) {
  switch (komenda) {
    case "prawo":
      if (stanPrzed.pokoj === 5) {
        return {
          stan: { ...stanPrzed },
          komunikat: "Nie mozesz wejsc w sciane",
        };
      }
      return {
        stan: {
          ...stanPrzed,
          energia: stanPrzed.energia - 1,
          pokoj: stanPrzed.pokoj + 1,
        },
        komunikat: "Przechodzisz do nastepnego pokoju",
      };
      break;
    case "lewo":
      if (stanPrzed.pokoj === 1) {
        return {
          stan: { ...stanPrzed },
          komunikat: "Nie mozesz wejsc w sciane",
        };
      }
      return {
        stan: {
          ...stanPrzed,
          energia: stanPrzed.energia - 1,
          pokoj: stanPrzed.pokoj - 1,
        },
        komunikat: "Przechodzisz do nastepnego pokoju",
      };
      break;
    case "karta": {
      if (stanPrzed.pokoj === 1 && stanPrzed.karta === false) {
        return {
          stan: { ...stanPrzed, energia: stanPrzed.energia - 1, karta: true },
          komunikat: "Zabierasz karte",
        };
      } else {
        return {
          stan: { ...stanPrzed },
          komunikat: "Tutaj nie ma karty do zebrania",
        };
      }

      break;
    }
    case "bezpiecznik": {
      if (
        stanPrzed.pokoj === 2 &&
        stanPrzed.bezpiecznik === false &&
        stanPrzed.zasilanie === false
      ) {
        return {
          stan: {
            ...stanPrzed,
            energia: stanPrzed.energia - 1,
            bezpiecznik: true,
          },
          komunikat: "Zabierasz bezpiecznik",
        };
      } else {
        return {
          stan: { ...stanPrzed },
          komunikat: "Tutaj nie ma bezpiecznika do zabrania",
        };
      }

      break;
    }
    case "napraw": {
      if (
        stanPrzed.pokoj === 3 &&
        stanPrzed.bezpiecznik === true &&
        stanPrzed.zasilanie === false
      ) {
        return {
          stan: {
            ...stanPrzed,
            energia: stanPrzed.energia - 1,
            bezpiecznik: false,
            zasilanie: true,
          },
          komunikat: "Zasilanie zostalo naprawione",
        };
      } else if (stanPrzed.pokoj !== 3) {
        return { stan: { ...stanPrzed }, komunikat: "Tutaj nie ma zasilania" };
      } else if (stanPrzed.zasilanie === true) {
        return {
          stan: { ...stanPrzed },
          komunikat: "Zasilanie zostalo juz wczesniej naprawione",
        };
      } else {
        return {
          stan: { ...stanPrzed },
          komunikat: "Nie jestes w stanie naprawic zasilania",
        };
      }

      break;
    }
    case "klucz": {
      if (stanPrzed.pokoj === 4 && stanPrzed.klucz === false) {
        return {
          stan: { ...stanPrzed, energia: stanPrzed.energia - 1, klucz: true },
          komunikat: "Zabierasz klucz",
        };
      } else {
        return {
          stan: { ...stanPrzed },
          komunikat: "Tutaj nie ma klucza do zebrania",
        };
      }

      break;
    }
    case "wyjdz": {
      if (
        stanPrzed.pokoj === 5 &&
        stanPrzed.karta === true &&
        stanPrzed.zasilanie === true &&
        stanPrzed.klucz === true
      ) {
        return {
          stan: {
            ...stanPrzed,
            energia: stanPrzed.energia - 1,
            wygrana: true,
            koniec: true,
          },
          komunikat: "Wychodzisz z serwerowni. Wygrana",
        };
      } else if (stanPrzed.pokoj != 5) {
        return {
          stan: { ...stanPrzed },
          komunikat: "Nie znajdujesz sie w pokoju, w ktorym jest wyjscie",
        };
      } else if (stanPrzed.karta === false) {
        return { stan: { ...stanPrzed }, komunikat: "Nie masz karty" };
      } else if (zasilanie === false) {
        return {
          stan: { ...stanPrzed },
          komunikat: "Zasilanie nie zostalo naprawione",
        };
      } else {
        return {
          stan: { ...stanPrzed },
          komunikat: "Nie masz klucza",
        };
      }

      break;
    }
    default:
      return { stan: { ...stanPrzed }, komunikat: "Nieznana komenda" };
  }
}

function czyStan(wartosc) {
  if (
    wartosc === null ||
    typeof wartosc !== "object" ||
    Array.isArray(wartosc)
  ) {
    return false;
  }
  if (!Number.isInteger(wartosc.pokoj) || !znajdzPokoj(wartosc.pokoj)) {
    return false;
  }
  if (
    !Number.isInteger(wartosc.energia) ||
    wartosc.energia < 0 ||
    wartosc.energia > MAKS_ENERGIA
  ) {
    return false;
  }
  const flagi = ["karta", "bezpiecznik", "zasilanie", "koniec", "wygrana"];
  for (const pole of flagi) {
    if (typeof wartosc[pole] !== "boolean") {
      return false;
    }
  }
  if (wartosc.bezpiecznik && wartosc.zasilanie) {
    return false;
  }
  if (
    wartosc.wygrana &&
    !(wartosc.pokoj === 4 && wartosc.karta && wartosc.zasilanie)
  ) {
    return false;
  }
  if (wartosc.koniec !== (wartosc.wygrana || wartosc.energia === 0)) {
    return false;
  }
  return true;
}
