const ghostData = {
    ghost1: {
        name: 'Ghost Name 1',
        img: 'ghost1.jpg',
        info: 'A spooky ghost that haunts old libraries.',
        evidence: 'Cold spots, moving objects, whispering sounds.'
    },
    ghost2: {
        name: 'Ghost Name 2',
        img: 'ghost2.jpg',
        info: 'This ghost is known for its appearance at midnight.',
        evidence: 'Footsteps, apparitions, eerie silence.'
    },
    
};

// Handle ghost item click
document.querySelectorAll('.ghost-item').forEach(item => {
    item.addEventListener('click', function () {
        const ghostKey = this.getAttribute('data-ghost');
        const ghost = ghostData[ghostKey];

        if (ghost) {
            document.getElementById('ghost-name').innerText = ghost.name;
            document.getElementById('ghost-image').src = ghost.img;
            document.getElementById('ghost-info').innerText = ghost.info;
            document.getElementById('ghost-evidence').innerText = `Evidences: ${ghost.evidence}`;

            document.getElementById('ghost-info-container').style.display = 'block';
        }
    });
});