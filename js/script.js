//smooth scroll
const anchors = document.querySelectorAll('a.navigation__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


// const menu = document.getElementById('menu');



// menu.addEventListener('click', (e) => {
//     menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
//     e.target.classList.add('active');
// });



