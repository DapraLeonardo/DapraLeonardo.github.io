const images = [
    { url: 'prove.jpg', title: 'Titolo 1', subtitle: 'Sottotitolo 1', text: 'Descrizione immagine 1' },
    { url: 'prove.jpg', title: 'Titolo 2', subtitle: 'Sottotitolo 2', text: 'Descrizione immagine 2' },
    { url: 'prove.jpg', title: 'Titolo 3', subtitle: 'Sottotitolo 3', text: 'Descrizione immagine 3' },
    { url: 'prove.jpg', title: 'Titolo 4', subtitle: 'Sottotitolo 4', text: 'Descrizione immagine 4' },
    { url: 'prove.jpg', title: 'Titolo 5', subtitle: 'Sottotitolo 5', text: 'Descrizione immagine 5' },
    { url: 'prove.jpg', title: 'Titolo 6', subtitle: 'Sottotitolo 6', text: 'Descrizione immagine 6' },
    { url: 'prove.jpg', title: 'Titolo 7', subtitle: 'Sottotitolo 7', text: 'Descrizione immagine 7' },
    { url: 'prove.jpg', title: 'Titolo 8', subtitle: 'Sottotitolo 8', text: 'Descrizione immagine 8' }
];

function createImageCard(image) {
    return `
    <div class="col-md-3">
        <div class="card border-0">
            <img src="${image.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>${image.title}</strong></h5>
                <h6 class="card-subtitle mb-2 text-muted"><i>${image.subtitle}</i></h6>
                <p class="card-text">${image.text}</p>
            </div>
        </div>
    </div>
    `;
}

function loadImages(startIndex, count) {
    const gallery = document.getElementById('gallery');
    for (let i = startIndex; i < startIndex + count && i < images.length; i++) {
        gallery.innerHTML += createImageCard(images[i]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages(0, 4);

    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        const gallery = document.getElementById('gallery');
        const startIndex = gallery.getElementsByClassName('card').length;
        loadImages(startIndex, 4);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarNav = document.querySelector('.navbar-nav');
    const mainContent = document.querySelector('.main-content');

    function checkNavbarWidth() {
        const navbarWidth = navbar.offsetWidth;
        const navItemsWidth = Array.from(navbarNav.children).reduce((acc, item) => acc + item.offsetWidth, 0);

        if (navItemsWidth > navbarWidth) {
            navbar.style.display = 'none';
            mainContent.classList.remove('mt-230');
            mainContent.classList.add('mt-30');
        } else {
            navbar.style.display = 'flex';
            mainContent.classList.remove('mt-30');
            mainContent.classList.add('mt-230');
        }
    }

    window.addEventListener('resize', checkNavbarWidth);
    checkNavbarWidth();
});
