import "../../dist/styles/styles.css";

const menu = () => {
  let container = document.querySelector(".container");
  container.innerHTML = `
  <h3>Menü</h3>
  <p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../dist/images/tiroler-speckknoedel-img-133349.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="footdescription">Südtiroler Speckknödel</div>
    <div class="price">10€</div>
  </div>
  </p>
  <div class="foodcontainer">
    <div class="food"
    style="background: url('../dist/images/spinatknoedel-e1662105655573.jpg') 
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
    style="background: url('../dist/images/schlutzkrapfen-3e2c0f2592c2d8775d4aff25d4007517-et2011091122-jpg--4889-.jpg') 
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
    style="background: url('../dist/images/J_Tiroler_Gröstl.jpg') 
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
    style="background: url('../dist/images/hirschrueckensteak-default.jpg') 
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
    style="background: url('../dist/images/Recipe_178.jpg') 
    no-repeat center;
    background-size: cover;">
    </div>
    <div class="fooddescription">Zwiebelrostbraten</div>
    <div class="price">25€</div>
  </div>
  </p>
  <p>
  `;
  return container;
};
export { menu };
