function addTool() {
    let tools = JSON.parse(localStorage.getItem('tools') || '[]');
    const newTool = {
        id: Date.now(),
        name: document.getElementById('toolName').value,
        desc: document.getElementById('toolDesc').value,
        file: `tool${Date.now()}.html`
    };
    tools.push(newTool);
    localStorage.setItem('tools', JSON.stringify(tools));
    alert('Tool added! Create the HTML file in /tools/ folder');
}

function displayTools() {
    let tools = JSON.parse(localStorage.getItem('tools') || '[]');
    // show list with edit/delete
}