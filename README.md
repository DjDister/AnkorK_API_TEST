# AnkorK_API_TEST

## Opis

Plik `.env` powinien zawierać:

```env
MONGODB_URI=""
```

Projekt posiada walidację, bezpieczeństwo typów oraz obsługę błędów.

Aby przetestować API, użyj następujących informacji:

- Endpoint: `/searchMovies`
- Payload:

```json
{
  "queryVector": [
    /* tutaj wprowadź wartości wektora jako liczby */
  ]
}
```

## Wynik testu

Warunki:

- Filmy, które powstały przed 1950 rokiem (year < 1950)
- Filmy, które są najbliższe wektorowi przesłanemu w załączniku

Wynik zwraca 10 filmów - tytuł, wątek i wynik porównania wektorowego, które są najbliższe zadanemu wektorowi.

```json
[
  {
    "plot": "When Prince John and the Norman Lords begin oppressing the Saxon masses in King Richard's absence, a Saxon lord fights back as the outlaw leader of a rebel guerrilla army.",
    "title": "The Adventures of Robin Hood",
    "score": 0.9146015644073486
  },
  {
    "plot": "When Prince John and the Norman Lords begin oppressing the Saxon masses in King Richard's absence, a Saxon lord fights back as the outlaw leader of a rebel guerrilla army.",
    "title": "The Adventures of Robin Hood",
    "score": 0.914598822593689
  },
  {
    "plot": "This is a story about family relationships, set in the time before and during the American Civil War. Ethan Wilkins is a poor and honest man who ministers to the human soul, while his son ...",
    "title": "Of Human Hearts",
    "score": 0.9070909023284912
  },
  {
    "plot": "A recalcitrant thief vies with a duplicitous Mongol ruler for the hand of a beautiful princess.",
    "title": "The Thief of Bagdad",
    "score": 0.9053124189376831
  },
  {
    "plot": "The O'Leary brothers -- honest Jack and roguish Dion -- become powerful figures, and eventually rivals, in Chicago on the eve of its Great Fire.",
    "title": "In Old Chicago",
    "score": 0.9041050672531128
  },
  {
    "plot": "Seeking revenge, an athletic young man joins the pirate band responsible for his father's death.",
    "title": "The Black Pirate",
    "score": 0.9025775194168091
  },
  {
    "plot": "An ex-pirate contends with rowdy buccaneers and a love-hate relationship with an aristocratic woman who's tougher than she seems.",
    "title": "The Black Swan",
    "score": 0.9021130800247192
  },
  {
    "plot": "Michael \"Beau\" Geste leaves England in disgrace and joins the infamous French Foreign Legion. He is reunited with his two brothers in North Africa, where they face greater danger from their...",
    "title": "Beau Geste",
    "score": 0.9010024666786194
  },
  {
    "plot": "Famous motor-racing champion Joe Greer returns to his hometown to compete in a local race. He discovers his younger brother has aspirations to become a racing champion and during the race ...",
    "title": "The Crowd Roars",
    "score": 0.8999450206756592
  },
  {
    "plot": "A boy raised by wolves tries to adapt to human village life.",
    "title": "Jungle Book",
    "score": 0.8993757367134094
  }
]
```
