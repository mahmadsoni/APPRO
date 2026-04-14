const app = JSON.parse(localStorage.getItem('selectedApp'));
const container = document.getElementById('appDetails');

if (app && container) {
    const screenshotsHTML = app.screenshots ? app.screenshots.map(img => `
        <img src="${img}" class="screenshot-item" onerror="this.style.display='none'">
    `).join('') : "";

    container.innerHTML = `
        <a href="index.html" class="back-link">←</a>
        
        <div class="app-header">
            <img src="${app.icon}">
            <div class="app-info">
                <h1>${app.name}</h1>
                <p style="color: var(--primary); font-weight: 500;">${app.category}</p>
            </div>
        </div>

        <div class="app-meta">
            <div class="meta-item">
                <span class="meta-value">${app.rating} ★</span>
                <span class="meta-label">Рейтинг</span>
            </div>
            <div class="meta-item" style="border-left: 1px solid var(--border); border-right: 1px solid var(--border); padding: 0 20px;">
                <span class="meta-value">${app.size}</span>
                <span class="meta-label">Ҳаҷм</span>
            </div>
            <div class="meta-item">
                <span class="meta-value">3+</span>
                <span class="meta-label">вақт</span>
            </div>
        </div>

        <a href="${app.link}" class="download-btn">насб кардан</a>
        
        <div class="screenshots-container">${screenshotsHTML}</div>

        <div class="description-section">
            <h3>Дар бораи ин барнома</h3>
            <p>${app.description}</p>
        </div>
    `;
}
