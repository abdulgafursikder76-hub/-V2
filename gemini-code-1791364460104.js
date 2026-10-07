// বাংলাদেশের ৬৪টি জেলা ও বিভাগ তথ্য
const districtsData = [
  { name: "ঢাকা", en: "Dhaka", div: "ঢাকা" },
  { name: "গাজীপুর", en: "Gazipur", div: "ঢাকা" },
  { name: "নারায়ণগঞ্জ", en: "Narayanganj", div: "ঢাকা" },
  { name: "টাঙ্গাইল", en: "Tangail", div: "ঢাকা" },
  { name: "মানিকগঞ্জ", en: "Manikganj", div: "ঢাকা" },
  { name: "মুন্সিগঞ্জ", en: "Munshiganj", div: "ঢাকা" },
  { name: "নরসিংদী", en: "Narsingdi", div: "ঢাকা" },
  { name: "ফরিদপুর", en: "Faridpur", div: "ঢাকা" },
  { name: "মাদারীপুর", en: "Madaripur", div: "ঢাকা" },
  { name: "গোপালগঞ্জ", en: "Gopalganj", div: "ঢাকা" },
  { name: "শরীয়তপুর", en: "Shariatpur", div: "ঢাকা" },
  { name: "রাজবাড়ী", en: "Rajbari", div: "ঢাকা" },
  { name: "কিশোরগঞ্জ", en: "Kishoreganj", div: "ঢাকা" },
  { name: "চট্টগ্রাম", en: "Chattogram", div: "চট্টগ্রাম" },
  { name: "কক্সবাজার", en: "Cox's Bazar", div: "চট্টগ্রাম" },
  { name: "বান্দরবান", en: "Bandarban", div: "চট্টগ্রাম" },
  { name: "রাঙ্গামাটি", en: "Rangamati", div: "চট্টগ্রাম" },
  { name: "খাগড়াছড়ি", en: "Khagrachhari", div: "চট্টগ্রাম" },
  { name: "কুমিল্লা", en: "Cumilla", div: "চট্টগ্রাম" },
  { name: "ফেনী", en: "Feni", div: "চট্টগ্রাম" },
  { name: "নোয়াখালী", en: "Noakhali", div: "চট্টগ্রাম" },
  { name: "লক্ষ্মীপুর", en: "Lakshmipur", div: "চট্টগ্রাম" },
  { name: "চাঁদপুর", en: "Chandpur", div: "চট্টগ্রাম" },
  { name: "ব্রাহ্মণবাড়িয়া", en: "Brahmanbaria", div: "চট্টগ্রাম" },
  { name: "সিলেট", en: "Sylhet", div: "সিলেট" },
  { name: "মৌলভীবাজার", en: "Moulvibazar", div: "সিলেট" },
  { name: "সুনামগঞ্জ", en: "Sunamganj", div: "সিলেট" },
  { name: "হবিগঞ্জ", en: "Habiganj", div: "সিলেট" },
  { name: "রাজশাহী", en: "Rajshahi", div: "রাজশাহী" },
  { name: "বগুড়া", en: "Bogura", div: "রাজশাহী" },
  { name: "পাবনা", en: "Pabna", div: "রাজশাহী" },
  { name: "সিরাজগঞ্জ", en: "Sirajganj", div: "রাজশাহী" },
  { name: "নাটোর", en: "Natore", div: "রাজশাহী" },
  { name: "নওগাঁ", en: "Naogaon", div: "রাজশাহী" },
  { name: "জয়পুরহাট", en: "Joypurhat", div: "রাজশাহী" },
  { name: "চাঁপাইনবাবগঞ্জ", en: "Chapainawabganj", div: "রাজশাহী" },
  { name: "খুলনা", en: "Khulna", div: "খুলনা" },
  { name: "যশোর", en: "Jashore", div: "খুলনা" },
  { name: "সাতক্ষীরা", en: "Satkhira", div: "খুলনা" },
  { name: "বাগেরহাট", en: "Bagerhat", div: "খুলনা" },
  { name: "কুষ্টিয়া", en: "Kushtia", div: "খুলনা" },
  { name: "ঝিনাইদহ", en: "Jhenaidah", div: "খুলনা" },
  { name: "চুয়াডাঙ্গা", en: "Chuadanga", div: "খুলনা" },
  { name: "মেহেরপুর", en: "Meherpur", div: "খুলনা" },
  { name: "নড়াইল", en: "Narail", div: "খুলনা" },
  { name: "মাগুরা", en: "Magura", div: "খুলনা" },
  { name: "বরিশাল", en: "Barishal", div: "বরিশাল" },
  { name: "পটুয়াখালী", en: "Patuakhali", div: "বরিশাল" },
  { name: "ভোলা", en: "Bhola", div: "বরিশাল" },
  { name: "পিরোজপুর", en: "Pirojpur", div: "বরিশাল" },
  { name: "বরগুনা", en: "Barguna", div: "বরিশাল" },
  { name: "ঝালকাঠি", en: "Jhalokati", div: "বরিশাল" },
  { name: "রংপুর", en: "Rangpur", div: "রংপুর" },
  { name: "দিনাজপুর", en: "Dinajpur", div: "রংপুর" },
  { name: "পঞ্চগড়", en: "Panchagarh", div: "রংপুর" },
  { name: "ঠাকুরগাঁও", en: "Thakurgaon", div: "রংপুর" },
  { name: "নীলফামারী", en: "Nilphamari", div: "রংপুর" },
  { name: "গাইবান্ধা", en: "Gaibandha", div: "রংপুর" },
  { name: "কুড়িগ্রাম", en: "Kurigram", div: "রংপুর" },
  { name: "লালমনিরহাট", en: "Lalmonirhat", div: "রংপুর" },
  { name: "ময়মনসিংহ", en: "Mymensingh", div: "ময়মনসিংহ" },
  { name: "জামালপুর", en: "Jamalpur", div: "ময়মনসিংহ" },
  { name: "নেত্রকোণা", en: "Netrokona", div: "ময়মনসিংহ" },
  { name: "শেরপুর", en: "Sherpur", div: "ময়মনসিংহ" }
];

// সেভ করা ডাটা লোড
let visitedDistricts = JSON.parse(localStorage.getItem('visitedDistricts')) || [];

// পেজ লোড হলে গ্রিড তৈরি
document.addEventListener('DOMContentLoaded', () => {
  renderDistricts(districtsData);
  updateStats();
});

// জেলা গ্রিড রেন্ডার
function renderDistricts(data) {
  const grid = document.getElementById('districtGrid');
  grid.innerHTML = '';

  data.forEach(item => {
    const isVisited = visitedDistricts.includes(item.en);
    const card = document.createElement('div');
    card.className = `district-card ${isVisited ? 'visited' : ''}`;
    card.setAttribute('data-en', item.en);
    card.setAttribute('data-status', isVisited ? 'visited' : 'unvisited');
    card.onclick = () => toggleDistrict(item.en, card);

    card.innerHTML = `
      <h3>${item.name}</h3>
      <span>${item.en} (${item.div})</span>
    `;
    grid.appendChild(card);
  });
}

// ক্লিক করলে ভ্রমণ স্ট্যাটাস পরিবর্তন
function toggleDistrict(districtEn, cardElement) {
  if (visitedDistricts.includes(districtEn)) {
    visitedDistricts = visitedDistricts.filter(id => id !== districtEn);
    cardElement.classList.remove('visited');
    cardElement.setAttribute('data-status', 'unvisited');
  } else {
    visitedDistricts.push(districtEn);
    cardElement.classList.add('visited');
    cardElement.setAttribute('data-status', 'visited');
  }

  localStorage.setItem('visitedDistricts', JSON.stringify(visitedDistricts));
  updateStats();
}

// গণনা ও পার্সেন্টেজ আপডেট
function updateStats() {
  const count = visitedDistricts.length;
  const percentage = Math.round((count / 64) * 100);

  document.getElementById('visitedCount').innerText = count;
  document.getElementById('percentage').innerText = `${percentage}%`;
  document.getElementById('progressBar').style.width = `${percentage}%`;
}

// সার্চ ফিল্টার
function filterDistricts() {
  const query = document.getElementById('districtSearch').value.toLowerCase();
  const filtered = districtsData.filter(d => 
    d.name.toLowerCase().includes(query) || d.en.toLowerCase().includes(query) || d.div.toLowerCase().includes(query)
  );
  renderDistricts(filtered);
}

// স্ট্যাটাস দিয়ে ফিল্টার (All/Visited/Unvisited)
function filterByStatus(status) {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.district-card');
  cards.forEach(card => {
    const cardStatus = card.getAttribute('data-status');
    if (status === 'all' || cardStatus === status) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ট্যাব সুইচার
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.nav-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  btns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(`${tabName}Tab`).classList.add('active');
  event.target.classList.add('active');
}