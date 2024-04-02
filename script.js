const elems = document.querySelectorAll('.elem');
const topFootBtn = document.querySelector('#footer-btn');

// initiating locomotive scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loading() {
    const tl = gsap.timeline();
    
    tl.to('#loader #yellow1', {
        top: '-100%',
        delay: 0.5,
        duration: 0.5,
        ease: 'expo.out'
    })
    
    tl.from("#loader #yellow2", {
        top: '100%',
        delay: 0.5,
        duration: 0.5,
        ease: 'expo.out'
    }, "anim")
    
    tl.to("#loader h1", {
        delay: 0.6,
        duration: 0.5,
        color: 'black'
    }, "anim")
    
    tl.to("#loader", {
        display: 'none'
    })
}

function hoverBgChange() {
    elems.forEach(elem => {
        elem.addEventListener('mouseenter', (e) => {
            const bgImg = e.target.getAttribute('data-img');
            const page2 = document.getElementById('page2');
            page2.style.backgroundImage = `url(${bgImg})`;
            page2.style.transition = `all ease 0.5s`;
        })
    });
}

topFootBtn.addEventListener('click', (e) => {
    scroll.scrollTo(0)
});

loading();
hoverBgChange();