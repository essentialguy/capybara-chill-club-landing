window.onload = function () {
    butter.init({
        wrapperDamper: 0.15,
        cancelOnTouch: true
    });
    window.addEventListener("scroll", e => {
        if (window.scrollY >= $(window).height() * 1.2) {
            boxFirst.style.opacity = '0';
        }
        else {
            boxFirst.style.opacity = '1';
        }
    })
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

let block_number_0 = document.querySelectorAll(".block_number_conteiner_block_number")[0];
let block_number_1 = document.querySelectorAll(".block_number_conteiner_block_number")[1];
let block_number_2 = document.querySelectorAll(".block_number_conteiner_block_number")[2];

let block_number_0_textNum = document.querySelectorAll(".numBlockNm")[0];
let block_number_1_textNum = document.querySelectorAll(".numBlockNm")[1];
let block_number_2_textNum = document.querySelectorAll(".numBlockNm")[2];

let textBlockNumber_0 = document.querySelectorAll(".textBlockNumber")[0];
let textBlockNumber_1 = document.querySelectorAll(".textBlockNumber")[1];
let textBlockNumber_2 = document.querySelectorAll(".textBlockNumber")[2];

let block_text = document.querySelector(".TheChillClubRules_block_text");
// let block_text_0 = document.querySelectorAll(".TheChillClubRules_block_text");
// let block_text_1 = document.querySelectorAll(".TheChillClubRules_block_text")[1];
// let block_text_2 = document.querySelectorAll(".TheChillClubRules_block_text")[2];


block_number_0.addEventListener("mouseover", e => {

    block_text.classList.remove('active');
    textBlockNumber_0.style.opacity = '1';


    textBlockNumber_0.style.zIndex = '10';

    // block_text_0.classList.add('active');
    // block_text_1.classList.remove('active');
    // block_text_2.classList.remove('active');

    const screenWidth = window.screen.width;

    if (screenWidth >= 1510) {
        // console.log(screenWidth)

        block_number_0.style.width = '100%';
        block_number_1.style.width = '169px';
        block_number_2.style.width = '169px';
    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '100%';
        block_number_1.style.width = '129px';
        block_number_2.style.width = '129px';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '100%';
        block_number_1.style.width = '89px';
        block_number_2.style.width = '89px';
    }

    // block_number_0.style.width = '100%';
    // block_number_1.style.width = '169px';
    // block_number_2.style.width = '169px';

})
block_number_0.addEventListener("mouseout", e => {
    const screenWidth = window.screen.width;
    // console.log(screenWidth)

    if (screenWidth >= 1510) {
        block_number_0.style.width = '169px';
        block_number_1.style.width = '169px';
        block_number_2.style.width = '169px';
        block_number_0.style.minWidth = '169px';
        block_number_1.style.minWidth = '169px';
        block_number_2.style.minWidth = '169px';
    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '129px';
        block_number_1.style.width = '129px';
        block_number_2.style.width = '129px';
        block_number_0.style.minWidth = '129px';
        block_number_1.style.minWidth = '129px';
        block_number_2.style.minWidth = '129px';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '89px';
        block_number_1.style.width = '89px';
        block_number_2.style.width = '89px';
        block_number_0.style.minWidth = '89px';
        block_number_1.style.minWidth = '89px';
        block_number_2.style.minWidth = '89px';
    }

    // block_number_0.style.width = '169px';
    // block_number_1.style.width = '169px';
    // block_number_2.style.width = '169px';

    block_text.classList.add('active');
    textBlockNumber_0.style.opacity = '0';
    textBlockNumber_0.style.zIndex = '-1';
});

block_number_1.addEventListener("mouseover", e => {
    const screenWidth = window.screen.width;

    // block_text_0.classList.remove('active');
    // block_text_1.classList.add('active');
    // block_text_2.classList.remove('active');

    block_text.classList.remove('active');
    textBlockNumber_1.style.opacity = '1';
    textBlockNumber_1.style.zIndex = '10';

    if (screenWidth >= 1510) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '100%';
        block_number_2.style.width = '169px';
        block_number_2.style.minWidth = '169px';
    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '100%';
        block_number_2.style.width = '129px';
        block_number_2.style.minWidth = '129px';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '100%';
        block_number_2.style.width = '89px';
        block_number_2.style.minWidth = '89px';
    }

    // block_number_0.style.transition = '1s';
    block_number_0_textNum.style.opacity = '0';


    block_number_0.style.minWidth = '0px';

    // block_number_0.style.width = '0px';
    // block_number_1.style.width = '100%';
    // block_number_2.style.width = '169px';

})
block_number_1.addEventListener("mouseout", e => {
    const screenWidth = window.screen.width;

    // block_number_0.style.width = '169px';
    // block_number_1.style.width = '169px';
    // block_number_2.style.width = '169px';

    if (screenWidth >= 1510) {
        block_number_0.style.width = '169px';
        block_number_1.style.width = '169px';
        block_number_2.style.width = '169px';
        block_number_0.style.minWidth = '169px';
        block_number_1.style.minWidth = '169px';
        block_number_2.style.minWidth = '169px';

    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '129px';
        block_number_1.style.width = '129px';
        block_number_2.style.width = '129px';
        block_number_0.style.minWidth = '129px';
        block_number_1.style.minWidth = '129px';
        block_number_2.style.minWidth = '129px';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '89px';
        block_number_1.style.width = '89px';
        block_number_2.style.width = '89px';
        block_number_0.style.minWidth = '89px';
        block_number_1.style.minWidth = '89px';
        block_number_2.style.minWidth = '89px';
    }

    // block_number_0.style.minWidth = '169px';
    block_text.classList.add('active');

    textBlockNumber_1.style.opacity = '0';
    textBlockNumber_1.style.zIndex = '-1';


    // block_number_0.style.transition = '2s';
    block_number_0_textNum.style.opacity = '1';


    // block_text_0.classList.add('active');
    // block_text_1.classList.remove('active');
});

block_number_2.addEventListener("mouseover", e => {
    const screenWidth = window.screen.width;

    block_text.classList.remove('active');

    block_number_0.style.opacity = '0';
    block_number_1.style.opacity = '0';

    block_number_0.style.minWidth = '0px';
    block_number_1.style.minWidth = '0px';

    textBlockNumber_2.style.opacity = '1';

    textBlockNumber_2.style.zIndex = '10';

    block_number_1_textNum.style.opacity = '0';
    block_number_0_textNum.style.opacity = '0';

    // block_number_0.style.width = '0px';
    // block_number_1.style.width = '0px';
    // block_number_2.style.width = '100%';

    if (screenWidth >= 1510) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '0px';
        block_number_2.style.width = '100%';
    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '0px';
        block_number_2.style.width = '100%';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '0px';
        block_number_1.style.width = '0px';
        block_number_2.style.width = '100%';
    }
})
block_number_2.addEventListener("mouseout", e => {
    const screenWidth = window.screen.width;

    block_text.classList.add('active');

    block_number_0.style.opacity = '1';
    block_number_1.style.opacity = '1';

    // block_number_0.style.width = '169px';
    // block_number_1.style.width = '169px';
    // block_number_2.style.width = '169px';


    if (screenWidth >= 1510) {
        block_number_0.style.width = '169px';
        block_number_1.style.width = '169px';
        block_number_2.style.width = '169px';
        block_number_2.style.minWidth = '169px';
        block_number_1.style.minWidth = '169px';
        block_number_0.style.minWidth = '169px';
    }
    else if (screenWidth >= 1034) {
        block_number_0.style.width = '129px';
        block_number_1.style.width = '129px';
        block_number_2.style.width = '129px';
        block_number_2.style.minWidth = '129px';
        block_number_1.style.minWidth = '129px';
        block_number_0.style.minWidth = '129px';
    }
    else if (screenWidth >= 734) {
        block_number_0.style.width = '89px';
        block_number_1.style.width = '89px';
        block_number_2.style.width = '89px';
        block_number_0.style.minWidth = '89px';
        block_number_1.style.minWidth = '89px';
        block_number_2.style.minWidth = '89px';
    }

    textBlockNumber_2.style.opacity = '0';
    textBlockNumber_2.style.zIndex = '-1';


    block_number_1_textNum.style.opacity = '1';
    block_number_0_textNum.style.opacity = '1';

    // block_text_0.classList.add('active');
    // block_text_2.classList.remove('active');
})





let background_Vector = document.querySelector(".background_Vector");
let capybara_welcome = document.querySelector(".capybara_welcome");
let title_welcome = document.querySelector(".title_welcome");
let MintNow = document.querySelector(".MintNow");

let boxFirst = document.querySelector(".boxFirst");
//можно сделать другой фон которые при прокрутке будет моментально исчезать и его высоты будет равна высоте экрана, а фон который будет прокурчиваться оставить либо все как есть, либо сделать его postiion relative 

// window.addEventListener("scroll", e => {
//     if (window.scrollY >= $(window).height() * 1.2) {
//         // background_Vector.style.top = '100vh';
//         // background_Vector.style.position = 'absolute';

//         // capybara_welcome.style.opacity = '0';
//         // title_welcome.style.opacity = '0';
//         // MintNow.style.opacity = '0';

//         boxFirst.style.opacity = '0';
//     }
//     else {
//         // background_Vector.style.top = '0vh';
//         // background_Vector.style.position = 'fixed';

//         // capybara_welcome.style.opacity = '1';
//         // title_welcome.style.opacity = '1';
//         // MintNow.style.opacity = '1';

//         boxFirst.style.opacity = '1';
//     }
// })

// window.onscroll = function () {
//     if (window.scrollY >= $(window).height()) {
//         background_Vector.style.top = '100vh';
//         background_Vector.style.position = 'absolute';
//         capybara_welcome.style.opacity = '0';
//         title_welcome.style.opacity = '0';
//         MintNow.style.opacity = '0';
//     }
//     else {
//         background_Vector.style.top = '0vh';
//         background_Vector.style.position = 'fixed';
//         capybara_welcome.style.opacity = '1';
//         title_welcome.style.opacity = '1';
//         MintNow.style.opacity = '1';
//     }
// }


const capybara_none = document.querySelectorAll('.capybara_none');
const filterimage = document.querySelectorAll('.filterimage');
// const filter_gallery = document.querySelectorAll('.filter_gallery');
const rectOparcity = document.querySelectorAll('.rectOparcity');

// let i = 0;
for (let i = 0; i <= 7; i++) {
    capybara_none[i].addEventListener("mouseenter", e => {
        const filter_gallery = document.querySelectorAll('.filter_gallery');
        filterimage[i].style.transition = '0.5s';
        rectOparcity[i].style.opacity = '0';

        filterimage[i].classList.add('noneFilter')
        // rectOparcity[i].classList.remove('rectOparcity');


        // if (filter_gallery[i]) {
        // filter_gallery[i].remove();
        // }


        filter_gallery[i].style.transition = '1s';
        filter_gallery[i].style.opacity = '0';

        // filterimage[i].style.height = '0';
        // filterimage[i].src="img/gallery_visibility.png";
        // document.getElementById('filterimage')[i].src="";
    });
    capybara_none[i].addEventListener("mouseleave", e => {
        // console.log(capybara_none[i])
        // const filter_gallery = document.querySelectorAll('.filter_gallery');
        filterimage[i].style.transition = '8s';
        rectOparcity[i].style.opacity = '1';

        filterimage[i].classList.remove('noneFilter');


        filter_gallery[i].style.transition = '6s';
        filter_gallery[i].style.opacity = '1';
        // rectOparcity[i].classList.add('rectOparcity');


        // filterimage[i].innerHTML = '<img class="filter_gallery" src="img/filter_gallery.png" id="filter_gallery" alt=""/>'

        // filterimage[i].innerHTML = '<img class="filter_gallery"src="img/filter_gallery.png" id="filter_gallery" alt=""/>'
        // filterimage[i].style.height = '100%';

        // filterimage[i].src="img/filter_gallery.png";

        // filterimage[i].src='img/filter_gallery.png';

    })
}


// $(document).bind('mousewheel', function (e) {
//     var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 100);
//     // e.preventDefault();
//     e.stopPropagation();
//     $(document.body).stop().animate({
//         scrollTop: nt
//     }, 500, 'easeInOutCubic');
// })
// window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, {passive: false});
// document.addEventListener(handleEvent, { passive: false });

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );


// let scrollICON = document.querySelector(".scrollICON");
// let hash_scrollICON_1 = document.getElementById('hash_scrollICON_1');
// let hash_scrollICON_2 = document.getElementById('hash_scrollICON_2');
// let hash_scrollICON_3 = document.getElementById('hash_scrollICON_3');
// let hash_scrollICON_4 = document.getElementById('hash_scrollICON_4');
// let hash_scrollICON_5 = document.getElementById('hash_scrollICON_5');

// hash_scrollICON_1.addEventListener('click', function(){

// })

// hash_scrollICON_2.addEventListener('click', function(){

// })

// hash_scrollICON_3.addEventListener('click', function(){

// })

// hash_scrollICON_4.addEventListener('click', function(){

// })

// hash_scrollICON_5.addEventListener('click', function(){

// })


// const appHeight = () => {
//     const doc = document.documentElement
//     doc.style.setProperty('--app-height', `${window.innerHeight}px`)
// }
// window.addEventListener('resize', appHeight)
// appHeight()


