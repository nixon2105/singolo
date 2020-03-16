
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


//Portfolio tags
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


//Portfolio images selected
const addSelectedImages = () => {
    document.querySelector('.portfolio').addEventListener('click', (e) => {
        if(e.target.classList.contains('portfolio__img')) {
            let selectedImage = e.target;
            removeSelectedImages();
            selectClikedImages(selectedImage);
        }
    })
}

const removeSelectedImages = () => {
    let images = document.querySelectorAll('.portfolio__img');
    images.forEach(img => {
        img.classList.remove('portfolio__img--selected');
        img.classList.add('portfolio__img');
    })
}

const selectClikedImages = (selectedImage) => {
    selectedImage.classList.add('portfolio__img--selected');
}

addSelectedImages();
