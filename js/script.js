
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', (e) => {
    navigation.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
});

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



