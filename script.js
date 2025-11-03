// --- LOGIN & SIGNUP MODALS --- //
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".btn-outline-primary");
  const signupBtn = document.querySelector(".btn-primary");
  const body = document.body;

  // Login Modal
  const loginModal = createModal("Login", `
    <form id="loginForm">
      <div class="mb-3">
        <label for="loginEmail" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="loginEmail" required>
      </div>
      <div class="mb-3">
        <label for="loginPassword" class="form-label">Passwort</label>
        <input type="password" class="form-control" id="loginPassword" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Einloggen</button>
    </form>
  `);

  // Signup Modal
  const signupModal = createModal("Registrieren", `
    <form id="signupForm">
      <div class="mb-3">
        <label for="signupName" class="form-label">Name</label>
        <input type="text" class="form-control" id="signupName" required>
      </div>
      <div class="mb-3">
        <label for="signupEmail" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="signupEmail" required>
      </div>
      <div class="mb-3">
        <label for="signupPassword" class="form-label">Passwort</label>
        <input type="password" class="form-control" id="signupPassword" required>
      </div>
      <button type="submit" class="btn btn-success w-100">Registrieren</button>
    </form>
  `);

  body.appendChild(loginModal);
  body.appendChild(signupModal);

  // Öffnen/Schließen
  loginBtn.addEventListener("click", () => showModal(loginModal));
  signupBtn.addEventListener("click", () => showModal(signupModal));

  // Dummy-Speicher für User
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Registrierung speichern
  document.querySelector("#signupForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.signupName.value;
    const email = e.target.signupEmail.value;
    const password = e.target.signupPassword.value;
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrierung erfolgreich!");
    hideModal(signupModal);
  });

  // Login prüfen
  document.querySelector("#loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      alert(`Willkommen zurück, ${user.name}!`);
      hideModal(loginModal);
    } else {
      alert("Falsche E-Mail oder Passwort!");
    }
  });

  // --- SHOPPING CART --- //
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const buyButtons = document.querySelectorAll("#btn1");
  const cartIcon = document.createElement("button");
  cartIcon.className = "btn btn-warning position-fixed";
  cartIcon.style.bottom = "20px";
  cartIcon.style.right = "20px";
  cartIcon.innerHTML = `🛒 <span id="cartCount">${cart.length}</span>`;
  body.appendChild(cartIcon);

  const cartModal = createModal("Dein Warenkorb", `<div id="cartItems"></div>`);
  body.appendChild(cartModal);

  cartIcon.addEventListener("click", () => {
    updateCartDisplay();
    showModal(cartModal);
  });

  buyButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      const card = e.target.closest(".card");
      const name = card.querySelector("b").innerText;
      const price = card.querySelector(".price") ? card.querySelector(".price").innerText : card.querySelector("p").innerText;
      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      document.querySelector("#cartCount").innerText = cart.length;
      alert(`${name} wurde zum Warenkorb hinzugefügt.`);
    });
  });

  function updateCartDisplay() {
    const cartItems = document.querySelector("#cartItems");
    cartItems.innerHTML = "";
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Dein Warenkorb ist leer 🧵</p>";
      return;
    }
    cart.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "d-flex justify-content-between border-bottom py-2";
      div.innerHTML = `
        <span>${item.name}</span>
        <span>${item.price}</span>
        <button class="btn btn-sm btn-danger" data-index="${i}">✖</button>
      `;
      cartItems.appendChild(div);
    });
    const removeButtons = cartItems.querySelectorAll("button");
    removeButtons.forEach(btn => {
      btn.addEventListener("click", e => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        document.querySelector("#cartCount").innerText = cart.length;
        updateCartDisplay();
      });
    });
  }

  // --- Hilfsfunktionen --- //
  function createModal(title, content) {
    const modal = document.createElement("div");
    modal.className = "modal fade show";
    modal.style.display = "none";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close"></button>
          </div>
          <div class="modal-body">${content}</div>
        </div>
      </div>
    `;
    modal.querySelector(".btn-close").addEventListener("click", () => hideModal(modal));
    return modal;
  }

  function showModal(modal) {
    modal.style.display = "block";
    modal.classList.add("show");
  }

  function hideModal(modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
});
