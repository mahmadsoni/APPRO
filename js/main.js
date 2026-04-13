import { myApps } from './database.js';

const appGrid = document.getElementById('appGrid');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.querySelector('.search-container');
const catBtns = document.querySelectorAll('.cat-btn');

// Функцияи асосии намоиши барномаҳо
function renderApps(data) {
    if (!appGrid) return;
    appGrid.innerHTML = data.map(app => `
        <div class="app-card" onclick="openApp(${app.id})">
            <img src="${app.icon}">
            <h3>${app.name}</h3>
            <div class="rating">${app.rating}</div>
        </div>
    `).join('');
}

// Функсия барои гузаштан ба саҳифаи маълумот
window.openApp = (id) => {
    const app = myApps.find(a => a.id === id);
    localStorage.setItem('selectedApp', JSON.stringify(app));
    window.location.href = 'app-details.html';
};

// МАНТИҚИ ТУГМАҲОИ КАТЕГОРИЯ (ИН ҶО ХАТО БУД):
catBtns.forEach(btn => {
    btn.onclick = () => {
        // Ранги тугмаи фаъолро иваз мекунем
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Филтр кардани маълумот
        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            renderApps(myApps);
        } else {
            const filtered = myApps.filter(app => app.category === category);
            renderApps(filtered);
        }
    };
});

// Ҷустуҷӯ
searchContainer?.addEventListener('click', () => {
    searchContainer.classList.add('active');
    searchInput.focus();
});

searchInput?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = myApps.filter(a => a.name.toLowerCase().includes(term));
    renderApps(filtered);
});

// Намоиши аввалиндараҷа
renderApps(myApps);
