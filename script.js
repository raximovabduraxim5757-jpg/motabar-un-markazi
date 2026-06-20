const tg = window.Telegram?.WebApp;
if (tg) { 
  tg.ready(); 
  tg.expand(); 
  try { 
    tg.setHeaderColor("#c41e3a"); 
    tg.setBackgroundColor("#f5efe7"); 
  } catch (e) {} 
}

// ====== TOKEN VA CHAT ID ======
const BOT_TOKEN = "8223413777:AAHRVueVxlIYJFHe7DD7VNy1dSOo_8rWiLQ";
const CHAT_ID = "@optom_unchi";

// 28 ta mahsulot (qisqartirilgan, to'liq holda)
const products = [
  { id:"baland-navli", name:"MO'TABAR", image:"images/motabar1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"295 000 som/50 kg", nav:"1-navli un", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort va hokazo..." },
  { id:"birinchi-nav", name:"MO'TABAR", image:"images/motabar3.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"250 000 som/50 kg", nav:"2-navli un", advantage:"Mikroelementlar va tabiiy yog'larga boy", bestFor:"Sog'lom ovqatlar" },
  { id:"ikkinchi-nav", name:"QADIMGI-NAV", image:"images/motabarq.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"130 000 som/50 kg", nav:"Qadimgi-Nav", advantage:"Oqsil va Vitaminlarga boy", bestFor:"Diabet va Saxiri borlarga" },
  { id:"semolina", name:"ADMIRAL", image:"images/admiral1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"280 000 som/50 kg", nav:"1-navli un", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"kepak", name:"ADMIRAL", image:"images/admiral3.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"230 000 som/50 kg", nav:"Kepak", advantage:"Kaliy, temir, kaltsiyga boy", bestFor:"Non, tort" },
  { id:"mayda-kepak", name:"ADMIRAL", image:"images/admiralv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"388 000 som/50 kg", nav:"Yem", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"elite-un", name:"CHESTER", image:"images/chester.jpg", desc:"O'zbekiston ishlab chiqarilgan", price:"270 000 som/50 kg", nav:"Elita", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"yumshoq-un", name:"CORNER", image:"images/corner.jpg", desc:"O'zbekiston ishlab chiqarilgan", price:"225 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"qattiq-un", name:"DANI-NAN", image:"images/daninan1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"150 000 som/25 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"maxsus-non", name:"DANI-NAN", image:"images/daninan50v.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"530 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"tez-pishir", name:"DANI-NAN", image:"images/daninan501.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"290 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"soglom-un", name:"DANI-NAN", image:"images/daninan503.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"250 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"bolalar-un", name:"DANI-NAN", image:"images/daninanv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"270 000 som/25 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"restoran-un", name:"ORDABASY", image:"images/darkhan1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"300 000 som/50 kg", nav:"Elita", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"universal-un", name:"ORDABASY", image:"images/darkhanv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"390 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"qora-non", name:"DIKHAN-BABA", image:"images/dikhanbaba1.jpg", desc:"O'zbekistonda ishlab chiqarilgan", price:"300 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"oq-non", name:"DOBRIY MELNIK", image:"images/dobriy.jpg", desc:"O'zbekistonda ishlab chiqarilgan", price:"230 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"patir-un", name:"KEREMET", image:"images/keremet1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"280 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"somsa-un", name:"ELIT KOSTANAY", image:"images/kostanay1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"250 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"manti-un", name:"SALAMAT", image:"images/salamat1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"300 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"xamir-un", name:"SALAMAT", image:"images/salamatv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"420 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"kruasan-un", name:"TROYKA", image:"images/troyka.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"240 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"donar-un", name:"UNO", image:"images/uno1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"290 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"motabar-un", name:"MO'TABAR", image:"images/motabarv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"425 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Hamma turdagi pishiriqlar" },
  { id:"bugdoy-un", name:"YARKO", image:"images/yarko1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"275 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"sary-un", name:"YARKO", image:"images/yarkov.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"375 000 som/50 kg", nav:"Premium", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Maxsus pishiriqlar" },
  { id:"quruq-un", name:"ZO'R", image:"images/zor1.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"270 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" },
  { id:"yangi-un", name:"ZO'R", image:"images/zorv.jpg", desc:"Qozog'istonda ishlab chiqarilgan", price:"370 000 som/50 kg", nav:"1-nav", advantage:"Xamir tez va yaxshi kotariladi", bestFor:"Non, tort" }
];

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  grid.innerHTML = "";
  products.slice(0, 4).forEach(p => {
    const el = document.createElement("div");
    el.className = "product-card-mini";
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div class="card-name">${p.name}</div>
      <div class="card-price">${p.price}</div>
    `;
    el.onclick = () => goToPage("mahsulotlar");
    grid.appendChild(el);
  });
}

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "product-card-full";
    el.innerHTML = `
      <div class="product-card-top">
        <div class="product-card-emoji"><img src="${p.image}" alt="${p.name}" /></div>
        <div class="product-card-info">
          <h3>${p.name}</h3>
          <div class="price-tag">${p.price}</div>
          <div style="font-size:12px;color:var(--muted-fg);margin-top:4px;">${p.nav}</div>
        </div>
      </div>
      <div class="product-card-body">
        <p style="font-size:14px;font-weight:500;">${p.desc}</p>
        <div class="product-props">
          <div class="product-prop"><div class="dot">✓</div><span><strong>Afzalligi:</strong> ${p.advantage}</span></div>
          <div class="product-prop"><div class="dot">✓</div><span><strong>Nimalarga tavsiya etiladi:</strong> ${p.bestFor}</span></div>
        </div>
        <button class="btn btn-full" onclick="orderProduct('${p.id}')">Zakaz berish</button>
      </div>
    `;
    list.appendChild(el);
  });
  document.getElementById("product-count").textContent = products.length;
}

function renderSelect() {
  const sel = document.getElementById("sel-product");
  sel.innerHTML = '<option value="">Mahsulot tanlang...</option>';
  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name + " - " + p.price;
    sel.appendChild(opt);
  });
}

let currentPage = "home";

function goToPage(page) {
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  const navBtn = document.querySelector('.nav-item[data-page="' + page + '"]');
  if (navBtn) navBtn.classList.add("active");
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function orderProduct(productId) {
  document.getElementById("sel-product").value = productId;
  goToPage("zakaz");
  
  // Scroll to form
  setTimeout(function() {
    document.querySelector('.card').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 300);
}

function submitOrder(e) {
  e.preventDefault();
  
  var productId = document.getElementById("sel-product").value;
  var qty = document.getElementById("inp-qty").value.trim();
  var name = document.getElementById("inp-name").value.trim();
  var phone = document.getElementById("inp-phone").value.trim();
  var address = document.getElementById("inp-address").value.trim();
  
  var valid = true;

  function showErr(id, msg) {
    var el = document.getElementById(id);
    el.textContent = msg;
    el.classList.add("show");
    valid = false;
  }

  function clearErr(id) {
    var el = document.getElementById(id);
    el.textContent = "";
    el.classList.remove("show");
  }

  clearErr("err-product");
  clearErr("err-qty");
  clearErr("err-name");
  clearErr("err-phone");
  clearErr("err-address");

  if (!productId) showErr("err-product", "Iltimos, mahsulotni tanlang.");
  if (!qty) showErr("err-qty", "Miqdorni kiriting.");
  if (name.length < 2) showErr("err-name", "Ism-familiyani kiriting.");
  if (phone.length < 7) showErr("err-phone", "Telefon raqamni kiriting.");
  if (address.length < 5) showErr("err-address", "Manzilni aniq kiriting.");
  if (!valid) return;

  var product = products.find(function(p) { return p.id === productId; });
  var productName = product ? product.name : productId;
  var productPrice = product ? product.price : "Malumot yoq";
  
  var message = "YANGI ZAKAZ - Motabar Un Markazi\n";
  message = message + "-----------------------------\n";
  message = message + "Mahsulot: " + productName + "\n";
  message = message + "Narxi: " + productPrice + "\n";
  message = message + "Miqdor: " + qty + "\n";
  message = message + "Ism: " + name + "\n";
  message = message + "Telefon: " + phone + "\n";
  message = message + "Manzil: " + address + "\n";
  message = message + "-----------------------------\n";
  message = message + "Vaqt: " + new Date().toLocaleString('uz-UZ');
  
  var url = "https://t.me/optom_unchi?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
  
  document.getElementById("order-form").reset();
  showSuccess();
}

function showSuccess() {
  var msg = document.getElementById("success-message");
  if (msg) {
    msg.classList.add("show");
    setTimeout(function() {
      msg.classList.remove("show");
    }, 5000);
  }
}

function openMap() {
  window.open('https://www.google.com/maps?q=40.83012940337612,72.3528414804545', '_blank');
}

function openTelegram() {
  window.open('https://t.me/optom_unchi', '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  renderFeatured();
  renderProducts();
  renderSelect();
  console.log("App ishga tushdi!");
});
