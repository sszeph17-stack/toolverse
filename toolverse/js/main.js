// Admin check - first visitor becomes admin
if(!localStorage.getItem('adminSet')) {
    localStorage.setItem('isAdmin', 'true');
    localStorage.setItem('adminSet', 'true');
    document.getElementById('adminBadge').style.display = 'inline';
}

// Load tools from JSON
async function loadTools() {
    const res = await fetch('data/tools.json');
    const tools = await res.json();
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = tools.map(tool => `
        <div class="tool-card" onclick="location.href='tools/${tool.file}'">
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            ${localStorage.getItem('isAdmin') === 'true' ? `<button class="admin-btn" onclick="event.stopPropagation(); deleteTool('${tool.id}')">Delete</button>` : ''}
        </div>
    `).join('');
}

loadTools();

// Language support
const languages = ['en','hi','es','fr','de','zh','ja','ar','ru','pt','bn','ur','pa','mr','ta','te','gu','kn','ml','or'];
// Load translations