const row = document.querySelector('.container-carousel');
const movies = document.querySelector('.movies');


const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');


rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const activeIndicator = document.querySelector('.indicators .active')
    if (activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add('active')
        activeIndicator.classList.remove('active')
    }
})

leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const activeIndicator = document.querySelector('.indicators .active')
    if (activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add('active')
        activeIndicator.classList.remove('active')
    }
})



const numbersPages = Math.ceil(movies.length / 5);
for (let i = 0; i < numbersPages; i++) {
    const indicators = document.createElement('button');
    if (i === 0) {
        indicators.classList.add('activo');
    }

    document.querySelector('.indicators').appendChild(indicators);
    indicators.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    });

}

movies.forEach((movies) => {
    movies.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movies => movies.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

row.addEventListener('mouseleave', () => {
    movies.forEach(movies => movies.classList.remove('hover'));
});