import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import Paragraph from "./components/Paragraph.tsx";
import Button from "./components/Button.tsx";
import Footer from "./components/Footer.tsx";



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
    <div>
      <Header />
      <h1> Baby Yoda </h1>
      <Card text= {"Picture of baby Yoda"}/>
      <p></p>
      <Button text = {"Ask Yoda"} />
      <Paragraph text = {"Din Grogu colloquially referred to as Baby Yoda, is a character from the Star Wars Disney+ original television series The Mandalorian and The Book of Boba Fett. He is a toddler member of the same species as the Star Wars characters Yoda and Yaddle, with whom he shares a strong ability in the Force. In the series, the protagonist known as 'the Mandalorian' is hired to track down and capture Grogu for a remnant of the fallen Galactic Empire, but instead, he becomes his adoptive father and protects him from the Imperials. The character's real name was not revealed until 'Chapter 13: The Jedi', which also explained that Grogu was raised at the Jedi Temple on Coruscant during the Clone Wars. Before this, the character's official name, used in subtitles and captions, was 'the Child'. At the end of 'Chapter 24: The Return', he is given the name Din Grogu after being formally adopted by the Mandalorian, whose family name is 'Din'."} />
      <Footer text= {"May the force be with you"}/>
    </div>
  )
}

export default App
