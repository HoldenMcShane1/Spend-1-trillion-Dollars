let balance = 1000000000000; // $1 Trillion

// Array of catalog items
const items = [
  { id: 1, name: "Luxury Supercar", price: 300000, img: "https://via.placeholder.com/100?text=Car", count: 0 },
  { id: 2, name: "Private Jet", price: 45000000, img: "https://via.placeholder.com/100?text=Jet", count: 0 },
  { id: 3, name: "Mega Yacht", price: 300000000, img: "https://via.placeholder.com/100?text=Yacht", count: 0 },
  { id: 4, name: "Skyscraper", price: 850000000, img: "https://via.placeholder.com/100?text=Building", count: 0 },
  { id: 5, name: "NFL Team", price: 4500000000, img: "https://via.placeholder.com/100?text=Team", count: 0 },
  { id: 6, name: "Space Rocket", price: 15000000000, img: "https://via.placeholder.com/100?text=Rocket", count: 0 }
];

const shop = document.getElementById("shop");
const balanceDisplay = document.getElementById("balance");

// Format numbers with commas (e.g., 1,000,000)
function formatMoney(amount) {
  return amount.toLocaleString();
}

// Render item cards inside the horizontal scroll bar
function renderItems() {
  shop.innerHTML = "";
  
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="price">$${formatMoney(item.price)}</div>
      <div class="btn-group">
        <button class="sell-btn" onclick="sellItem(${index})">Sell</button>
        <span class="count">${item.count}</span>
        <button class="buy-btn" onclick="buyItem(${index})">Buy</button>
      </div>
    `;
    
    shop.appendChild(card);
  });
}

function buyItem(index) {
  const item = items[index];
  if (balance >= item.price) {
    balance -= item.price;
    item.count++;
    updateUI();
  } else {
    alert("Not enough money for this!");
  }
}

function sellItem(index) {
  const item = items[index];
  if (item.count > 0) {
    balance += item.price;
    item.count--;
    updateUI();
  }
}

function updateUI() {
  balanceDisplay.innerText = formatMoney(balance);
  renderItems();
}

// Initialize the game
renderItems();
