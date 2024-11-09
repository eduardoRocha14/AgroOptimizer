function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    document.querySelectorAll('.tab-title').forEach(title => {
        title.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
}