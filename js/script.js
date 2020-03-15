
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

//slider

const addTagsClickHandler = () => {
    document.querySelector('.navigation-portfolio').addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('navigation-portfolio__link')) {
            let clickedTag = e.target;
            removeActiveTags();
            selectClikedTag(clickedTag);
        }
    })
}

const removeActiveTags = () => {
    let tags = document.querySelectorAll('.navigation-portfolio__link');
    tags.forEach(tag => {
        tag.classList.remove('active');
        tag.classList.add('navigation-portfolio__link');
    })
}

const selectClikedTag = (clickedTag) => {
    clickedTag.classList.add('active');
}

addTagsClickHandler();

