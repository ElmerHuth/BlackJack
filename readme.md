Övningsnamn: Nybörjarvänligt Blackjack

Beskrivning: Skapa ett förenklat Blackjack-spel i JavaScript ES6, där spelaren spelar mot en datorstyrd dealer. Spelaren ska kunna välja att “ta ett kort” eller “stå”. Spelet avslutas antingen när spelaren väljer att “stå” eller när spelarens poäng överstiger 21.

Krav:

Kortlek: Skapa en kortlek med 52 kort (utan jokrar). Använd arrays för att representera färg (hjärter, spader, ruter, klöver) och valör (2 till 10 samt knekt, dam, kung, ess).
Dela ut kort: Både spelaren och dealern ska få två kort var vid spelets start. Spelarens kort ska visas medan endast ett av dealerns kort ska visas.
Poängräkning: Nummerkorten (2-10) har sitt numeriska värde. Knekt, dam och kung har värdet 10. Ess kan räknas som 1 eller 11 beroende på vilket som är mest fördelaktigt för spelaren.
Spelarens val: Spelaren ska kunna välja att “ta ett kort” eller “stå”. Om spelarens poäng överstiger 21 förlorar spelaren direkt.
Dealer-logik: Om spelaren väljer att “stå”, avslöjar dealern sitt dolda kort. Dealern måste sedan fortsätta dra kort tills dess totalpoäng är 17 eller högre.
Vinnare: Efter att båda spelarna är klara jämförs poängen. Den med högst poäng (men under 22) vinner. Om båda har lika mycket poäng blir det oavgjort.
Använd endast ES6-funktioner och grundläggande operationer med strings och arrays.
Acceptanskriterier:

Spelet startar med att båda spelarna får två kort var.
Spelaren ser sina egna kort och ett av dealerns kort.
Spelaren kan välja att “ta ett kort” eller “stå”.
Om spelarens poäng överstiger 21, meddelas spelaren om att denne har förlorat.
När spelaren väljer att “stå”, ska dealerns andra kort visas och dealern fortsätter ta kort enligt ovanstående logik.
Efter att båda spelarna är klara, meddelas vem som är vinnaren eller om det är oavgjort.