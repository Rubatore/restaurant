import "../../dist/styles/styles.css";

const header = () => {
  let content = document.getElementById("content");
  content.innerHTML = `
      <div class="header">
        <div class="item" id="home">Home</div>
        <div class="item" id="menu">Menü</div>
        <div class="item" id="contact">Kontakt</div>
      </div>
      <div class="container"></div>
  `;
  return content;
};

export { header };
