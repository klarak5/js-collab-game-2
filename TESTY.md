# Próby odbioru



|Wymaganie|Stan początkowy|Działanie|Wynik oczekiwany|Wynik faktyczny|
|-|-|-|-|-|
|Rozpoczęcie gry|pusta konsola|gra.start()|wyświetlenie komunikatu startowego|PASS|
|Ponowne rozpoczęcie gry|koniec: true|gra.start()|zresetowanie zmiennych oraz wyświetlenie komunikatu startowego|PASS|
|Zakończenie gry|energia = 0, koniec: false|gra.wykonaj("lewo")|komunikat o przegranej i zablokowanie możliwości dalszej gry|PASS|
|Ściana z lewej|pokoj = 1|gra.wykonaj("lewo")|komunikat o ścianie. Stan pozostaje taki sam|PASS|
|Przejście do poprzedniego pokoju|pokoj = 2|gra.wykonaj("lewo")|pokoj = 1, komunikat o przejściu do poprzedniego pokoju|PASS|
|Ściana z prawej|pokoj = 5|gra.wykonaj("prawo")|komunikat o ścianie. Stan pozostaje taki sam|PASS|
|Przejście do następnego pokoju|pokoj = 1|gra.wykonaj("prawo")|pokoj = 2, komunikat o przejściu do następnego pokoju|PASS|
|Próba przejścia do biura zanim drzwi są otwarte|pokoj = 3, czyOtwarte: false|gra.wykonaj("prawo")|komunikat mówiący o zamkniętych drzwiach przed graczem, które trzeba otworzyć kluczem|PASS|
|Wygrana|pokoj = 5, karta: true, zasilanie: true|gra.wykonaj("wyjdz")|komunikat o wygranej. Możliwość dalszej gry zablokowana|PASS|
|Próba gry po zakończeniu gry|koniec: true|gra.wykonaj("lewo")|komunikat o zakończonej grze|PASS|
|Zebranie klucza|pokoj = 1, klucz: false|gra.wykonaj("klucz")|klucz: true, komunikat o zebraniu klucza|PASS|
|Klucz już zebrany|pokoj = 1, klucz: true|gra.wykonaj("klucz")|komunikat mówiący o braku klucza do zebrania|PASS|
|Drzwi zostały już otwarte kluczem|pokoj = 1, klucz: false, czyOtwarte: true|gra.wykonaj("klucz")|komunikat mówiący o braku klucza do zebrania|PASS|
|Zebranie bezpiecznika|pokoj = 2, bezpiecznik: false, zasilanie: false|gra.wykonaj("bezpiecznik")|bezpiecznik: true, komunikat o zebraniu bezpiecznika|PASS|
|Bezpiecznik już zebrany|pokoj = 2, bezpiecznik: true|gra.wykonaj("bezpiecznik")|komunikat mówiący o braku bezpiecznika do zebrania|PASS|
|Zasilanie zostało już naprawione przy próbie zebrania bezpiecznika|pokoj = 2, bezpiecznik: false, zasilanie: true|gra.wykonaj("bezpiecznik")|komunikat mówiący o braku bezpiecznika do zebrania|PASS|
|Naprawa zasilania|pokoj = 3, bezpiecznik: true, zasilanie: false|gra.wykonaj("napraw")|zasilanie: true, bezpiecznik: false, komunikat o naprawie zasilania|PASS|
|Brak bezpiecznika przy próbie naprawy zasilania|pokoj = 3, bezpiecznik: false, zasilanie: false|gra.wykonaj("napraw")|komunikat o braku bezpicznika|PASS|
|Zasilanie zostało już naprawione|pokoj = 3, zasilanie: true|gra.wykonaj("napraw")|komunikat mówiący, że zasilanie zostało już naprawione|PASS|
|Otworzenie drzwi|pokoj = 3, klucz: true, czyOtwarte: false|gra.wykonaj("otworz")|czyOtwarte: true, klucz: false, komunikat o możliwości przejścia do następnego pokoju|PASS|
|Brak klucza przy próbie otworzenia drzwi|pokoj = 3, klucz: false, czyOtwarte: false|gra.wykonaj("otworz")|komunikat o braku klucza|PASS|
|Drzwi zostały już otwarte|pokoj = 3, czyOtwarte: true|gra.wykonaj("otworz")|komunikat mówiący, że drzwi zostały już otwarte|PASS|
|Zebranie karty|pokoj = 4, karta: false|gra.wykonaj("karta")|karta: true, komunikat o zebraniu karty|PASS|
|Karta została już zebrana|pokoj = 4, karta: true|gra.wykonaj("karta")|komunikat mówiący, że karta została już zebrana|PASS|
|Wyjście|pokoj = 5, karta: true, zasilanie: true|gra.wykonaj("wyjdz")|koniec: true, wygrana: true, komunikat o wygranej i zablokowanie możliwości dalszej gry|PASS|
|Próba wyjścia bez karty|pokoj = 5, karta: false|gra.wykonaj("wyjdz")|komunikat o braku karty|PASS|
|Próba wyjścia bez działającego zasilania|pokoj = 5, zasilanie: false|gra.wykonaj("wyjdz")|komunikat o braku działającego zasilania|PASS|
|Rozejrzenie się|pokoj = 1, klucz: false|gra.wykonaj("rozejrzyj")|komunikat o kluczu znajdującym się w pokoju|PASS|
|Rozejrzenie się po zebraniu klucza|pokoj = 1, klucz: true|gra.wykonaj("rozejrzyj")|komunikat o braku ciekawych rzeczy w pokoju|PASS|
|Nieprawidłowy pokój|pokoj = 1|gra.wykonaj("napraw")|komunikat o braku zasilania do naprawy w danym pokoju|PASS|



