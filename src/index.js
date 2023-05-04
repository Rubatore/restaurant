function home(container) {
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
}
function menu(container) {
  container.innerHTML = `
  <h3>Menü</h3>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/tiroler-speckknoedel-img-133349.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="footdescription">Südtiroler Speckknödel</div>
    <div class="price">10€</div>
  </div>
  </p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/spinatknoedel-e1662105655573.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Hausgemachte Spinatknödel</div>
    <div class="price">10€</div>
  </div>
  </p>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/schlutzkrapfen-3e2c0f2592c2d8775d4aff25d4007517-et2011091122-jpg--4889-.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Schlutzkrapfen</div>
    <div class="price">13€</div>
  </div>
  </p>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/J_Tiroler_Gröstl.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Tiroler Gröstl</div>
    <div class="price">14€</div>
  </div>
  </p>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/hirschrueckensteak-default.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Antholzer Hirschrückensteak</div>
    <div class="price">33€</div>
  </div>
  </p>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../images/Recipe_178.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Zwiebelrostbraten</div>
    <div class="price">25€</div>
  </div>
  </p>
  <p>
`;
}
function contact(container) {
  container.innerHTML = `
          <h3>Kontakt</h3>
          <p>
          <i class="fa-solid fa-phone"></i>+39 0474 492 144
          </p>
          <p>
          <i class="fa-solid fa-envelope"></i>info@hotelmessnerwirt.com
          </p>
  `;
}
window.addEventListener("load", () => {
  let content = document.getElementById("content");
  content.innerHTML = `
      <div class="header">
        <div class="item" id="home">Home</div>
        <div class="item" id="menu">Menü</div>
        <div class="item" id="contact">Kontakt</div>
      </div>
      <div class="container"></div>
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
