import Header from "./components/Header.tsx";

function App() {

  /*
  * STEG 1
  *
  * skapa dessa komponenter
  *
  * Button - en knapp som går att klicka på, ingenting behöver hända när du klickar på den!
  *
  * Card - behöver bara vara en rektangel med en färg
  *
  * Paragraph - behöver bara vara en text, skriv vad du vill!
  *
  * Footer - som en helt vanlig footer, kan se ut som header-komponenten fast footer istället för header
  *
  * EXTRA - navigation - precis som footer och header så kan det vara en navigationsmeny precis under headern
  *
  * ------------------------------------------------------------------------------
  *
  * STEG 2
  *
  *
  * ge varje komponent props som passar för vad komponenten gör
  *
  * button - en text som ska vara på knappen
  *
  * Card - ett namn, yrkestitel och vad som mer nu hade passar i något sånt
  *
  * Paragraph - en text du vill ha i din paragraf
  *
  * Footer - kontaktuppgifter passar bra i en footer
  *
  * EXTRA - navigation - en lista på dom olika navigationslänkarna som ska finnas
  * */

  return (
    <>
      <Header />
    </>
  )
}

export default App
