function home(container) {
  container.innerHTML = `
          <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>
          <div class="textcontent">
          <h4>Über uns</h4>
          <a>
            Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen
            Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser
            Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von
            der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und
            echter Gastfreundschaft und Herzlichkeit und den kulinarisch
            kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres
            Bauernhofs.
          </a>
          <p> Wir freuen uns auf Sie! </p>
          <h4>Öffnungszeiten</h4>
          <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>
          <h4>Adresse</h4>
          <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>
        `;
}
function menu(container) {
  container.innerHTML = `
            `;
}
function contact(container) {
  container.innerHTML = `
          <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>
          <div class="textcontent">
          <h4>Über uns</h4>
          <a>
            Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen
            Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser
            Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von
            der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und
            echter Gastfreundschaft und Herzlichkeit und den kulinarisch
            kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres
            Bauernhofs.
          </a>
          <p> Wir freuen uns auf Sie! </p>
          <h4>Öffnungszeiten</h4>
          <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>
          <h4>Adresse</h4>
          <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>
          `;
}
window.addEventListener("load", () => {
  let content = document.getElementById("content");
  content.innerHTML = `
    <div class="background">
      <div class="header">
        <div class="item" id="home">Home</div>
        <div class="item" id="menu">Menü</div>
        <div class="item" id="contact">Contact</div>
      </div>
      <div class="container"></div>
    </div>
  `;
  let container = document.querySelector(".container");
  home(container);
  let buttonHome = document.getElementById("home");
  let buttonMenu = document.getElementById("menu");
  let buttonContact = document.getElementById("contact");

  buttonHome.addEventListener("click", () => {
    home(container);
  });
  buttonMenu.addEventListener("click", () => {
    menu(container);
  });
  buttonContact.addEventListener("click", () => {
    contact(container);
  });
});
