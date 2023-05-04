import "../../dist/styles/styles.css";

const home = () => {
  let container = document.querySelector(".container");
  container.innerHTML = `
            <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>
            <h4>Über uns</h4>
            <p>
              Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen
              Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser
              Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von
              der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und
              echter Gastfreundschaft und Herzlichkeit und den kulinarisch
              kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres
              Bauernhofs.
            </p>
            <p> Wir freuen uns auf Sie! </p>
            <h4>Öffnungszeiten</h4>
            <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>
            <h4>Adresse</h4>
            <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>
          `;
  return container;
};
export { home };
