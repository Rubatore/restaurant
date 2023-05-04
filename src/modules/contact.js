import "../../dist/styles/styles.css";

const contact = () => {
  let container = document.querySelector(".container");
  container.innerHTML = `
            <h3>Kontakt</h3>
            <p>
            <i class="fa-solid fa-phone"></i>+39 0474 492 144
            </p>
            <p>
            <i class="fa-solid fa-envelope"></i>info@hotelmessnerwirt.com
            </p>
    `;
  return container;
};

export { contact };
