// EDIT ONLY THIS ARRAY TO ADD ITEMS
const items = [
  {
    name: "Product 1",
    image: "",
    link: ""
  },
  {
    name: "Product 2",
    image: "",
    link: ""
  },
  {
    name: "Product 3",
    image: "",
    link: ""
  }
];

const grid = document.getElementById("itemGrid");
const searchInput = document.getElementById("search");

function render(list) {
  grid.innerHTML = "";
  [...list].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <a href="${item.link}" target="_blank" rel="nofollow noopener">Buy</a>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = items.filter(i => i.name.toLowerCase().includes(q));
  render(filtered);
});

render(items);
