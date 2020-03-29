
//navigation
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', (e) => {
    navigation.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
});

//smooth scroll
// const anchors = document.querySelectorAll('a.navigation__link')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', (e) => {
//     e.preventDefault()
//     const blockID = anchor.getAttribute('href');
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// };


document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPosition = window.scrollY;
    const header = document.querySelector('header')
    const sections = document.querySelectorAll('body > *');
    const navbar = document.querySelectorAll('#nav li a');

    sections.forEach((element) => {
        if (element.hasAttribute('id')) {
            if (element.offsetTop - header.clientHeight <= currentPosition && (element.offsetTop + element.clientHeight) > currentPosition) {
                navbar.forEach((link) => {
                    link.classList.remove('active');
                    if (element.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        }
    })
}


//slider

const sliderImages = document.querySelectorAll('.slider__item');
const sliderBackground = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
let current = 0;
let isEnabled = true;


const changeCurrentSlide = (n) => {
    current = (n + sliderImages.length) % sliderImages.length;
}

const hideSlide = (direction) => {
    isEnabled = false;
	sliderImages[current].classList.add(direction);
	sliderImages[current].addEventListener('animationend', (e) => {
        target = e.target;
        target.classList.remove('slider__item--active', direction);
	});
}

const showSlide = (direction) => {
    sliderImages[current].classList.add('next__slide', direction);
	sliderImages[current].addEventListener('animationend', (e) => {
        target = e.target;
		target.classList.remove('next__slide', direction);
        target.classList.add('slider__item--active');
        isEnabled = true;
	});
}

const nextSlide = (n) => {
    hideSlide('leftward');
	changeCurrentSlide(n + 1);
    showSlide('from__right');
    sliderBackground.classList.toggle('slider__blue');
}

const prevSlide = (n) => {
    hideSlide('rightwards');
	changeCurrentSlide(n - 1);
    showSlide('from__left');
    sliderBackground.classList.toggle('slider__blue');
}

arrowLeft.addEventListener('click', () => {
	if (isEnabled) {
		nextSlide(current);
	}
});

arrowRight.addEventListener('click', () => {
	if (isEnabled) {
		prevSlide(current);
	}
});



// Screen iphone off

const iphoneVertical = document.querySelector(".btn-iphone-vertical");
const iphoneHorizontal = document.querySelector(".btn-iphone-horizontal");
const offDisplayVertical = document.querySelector(".display__vertical");
const offDisplayHorizontal = document.querySelector(".display__horizontal");
let screenoffVertical = false;
let screenoffHorizontal = false;

iphoneVertical.addEventListener('click', () => {
    screenoffVertical = !screenoffVertical;
    screenoffVertical ? offDisplayVertical.style.display = "block" : offDisplayVertical.style.display = "none";
});

iphoneHorizontal.addEventListener('click', () => {
    screenoffHorizontal = !screenoffHorizontal;
    screenoffHorizontal ? offDisplayHorizontal.style.display = "block" : offDisplayHorizontal.style.display = "none";
});



//Portfolio tags (active, sort)

const addTagsClickHandler = () => {
    document.querySelector('.navigation-portfolio').addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('navigation-portfolio__link')) {
            let clickedTag = e.target;
            removeActiveTags();
            selectClikedTag(clickedTag);
            sortImages();
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


const sortImages = () => {
    let portfolioImg = document.querySelector('.portfolio');
    let images = portfolioImg.querySelectorAll('.portfolio__item')
    let newPlaceImages= [...images].sort((a,b) => Math.random() - 0.5);
    portfolioImg.append(...newPlaceImages);
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


//Get a quote

const form = document.querySelector('.form__block');
const nameInput = document.querySelector('.input__name');
const emailInput = document.querySelector('.input__email');
const subjectInput = document.querySelector('.input__subject');
const textarea = document.querySelector('.textarea');
const submitForm = document.querySelector('.input__submit');

const renderModalWindow = document.querySelector('.modal__wrapper');
const subjectModalWindow = document.querySelector('.modal__subject');
const descrModalWindow = document.querySelector('.modal__descr');
const closeBtnModalWindow = document.querySelector('.modal__closeBtn');


submitForm.addEventListener("click", e => {
    e.preventDefault();
  
    if (!nameInput.value) {
      nameInput.classList.add("invalid");
    }
  
    if (!emailInput.value) {
      emailInput.classList.add("invalid");
    }
  
    if (nameInput.value && emailInput.value) {
        renderModalWindow.classList.remove("visually-hidden");
        subjectModalWindow.innerText = subjectInput.value
        ? `Subject: ${subjectInput.value}`
        : "No subject";
        descrModalWindow.innerText = textarea.value
        ? `Description: ${textarea.value}`
        : "No description";
    }
  });
  
  closeBtnModalWindow.addEventListener("click", () => {
    renderModalWindow.classList.add("visually-hidden");
    form.reset();
  });
  
  nameInput.addEventListener("focus", () => {
    nameInput.classList.remove("invalid");
  });
  
  emailInput.addEventListener("focus", () => {
    emailInput.classList.remove("invalid");
  });

  //burger-menu

  const burger = document.querySelector('.menu-btn');
  const logo = document.querySelector('.mobile__logo');
  const nav = document.querySelector('.header__navigation');
  const overlay = document.querySelector('.overlay__mobile');
  let countClicks = 0;


  burger.addEventListener('click', (event) => {
      countClicks = (countClicks + 1) % 2;
      if (countClicks === 1) {
          burger.classList.add('active');
          overlay.classList.add('active');
          nav.classList.add('show__mobile-mnu');
          logo.classList.add('active');

      } else {
          burger.classList.remove('active');
          nav.classList.remove('show__mobile-mnu');
          overlay.classList.remove('active');
          logo.classList.remove('active');

      }
  });

  const mobileMenu = document.querySelector('#nav');

  mobileMenu.addEventListener('click', (event) => {
      if (event.target.closest('ul li a')) {
          countClicks = (countClicks + 1) % 2;
          nav.classList.remove('show__mobile-mnu');
          burger.classList.remove('active');
          overlay.classList.remove('active');
          logo.classList.remove('active');
      } else {
        //   event.target.stopPropagation();
      }
  })

