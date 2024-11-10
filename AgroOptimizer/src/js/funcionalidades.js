function scrollToSection(sectionId) {
    document.querySelectorAll('.tabs button').forEach(button => button.classList.remove('active'));
    document.getElementById(`btn-${sectionId}`).classList.add('active');
    
    const section = document.getElementById(sectionId);
    const offset = section.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const sections = ['gestao', 'planejamento', 'redistribuicao', 'plataforma'];
    let currentSection = '';

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < window.innerHeight / 2) {
            currentSection = sectionId;
        }
    });

    if (currentSection) {
        document.querySelectorAll('.tabs button').forEach(button => button.classList.remove('active'));
        document.getElementById(`btn-${currentSection}`).classList.add('active');
    }
});