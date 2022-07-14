window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500)
}

let block_number_0 = document.querySelectorAll(".block_number_conteiner_block_number")[0];
let block_number_1 = document.querySelectorAll(".block_number_conteiner_block_number")[1];
let block_number_2 = document.querySelectorAll(".block_number_conteiner_block_number")[2];

// let block_text = document.querySelectorAll(".TheChillClubRules_block_text");
let block_text_0 = document.querySelectorAll(".TheChillClubRules_block_text")[0];
let block_text_1 = document.querySelectorAll(".TheChillClubRules_block_text")[1];
let block_text_2 = document.querySelectorAll(".TheChillClubRules_block_text")[2];

block_number_0.addEventListener("mouseover", e => {

    // block_text_0.classList.add('active');
    // block_text_1.classList.remove('active');
    // block_text_2.classList.remove('active');

    block_number_0.style.width = '50%';
    block_number_1.style.width = '25%';
    block_number_2.style.width = '25%';

})
block_number_0.addEventListener("mouseout", e => {
    block_number_0.style.width = '33%';
    block_number_1.style.width = '33%';
    block_number_2.style.width = '33%';
    // block_text_0.classList.add('active');
});

block_number_1.addEventListener("mouseover", e => {
    // block_text_0.classList.remove('active');
    // block_text_1.classList.add('active');
    // block_text_2.classList.remove('active');

    block_number_0.style.width = '25%';
    block_number_1.style.width = '50%';
    block_number_2.style.width = '25%';
})
block_number_1.addEventListener("mouseout", e => {
    block_number_0.style.width = '33%';
    block_number_1.style.width = '33%';
    block_number_2.style.width = '33%';
    // block_text_0.classList.add('active');
    // block_text_1.classList.remove('active');
});

block_number_2.addEventListener("mouseover", e => {
    // block_text_0.classList.remove('active');
    // block_text_1.classList.remove('active');
    // block_text_2.classList.add('active');

    block_number_0.style.width = '25%';
    block_number_1.style.width = '25%';
    block_number_2.style.width = '50%';
})
block_number_2.addEventListener("mouseout", e => {
    block_number_0.style.width = '33%';
    block_number_1.style.width = '33%';
    block_number_2.style.width = '33%';
    // block_text_0.classList.add('active');
    // block_text_2.classList.remove('active');
})



let background_Vector = document.querySelector(".background_Vector");
let capybara_welcome = document.querySelector(".capybara_welcome");
let title_welcome = document.querySelector(".title_welcome");
let MintNow = document.querySelector(".MintNow");
//можно сделать другой фон которые при прокрутке будет моментально исчезать и его высоты будет равна высоте экрана, а фон который будет прокурчиваться оставить либо все как есть, либо сделать его postiion relative 

window.addEventListener("scroll", e => {
    if (window.scrollY >= $(window).height()) {
        background_Vector.style.top = '100vh';
        background_Vector.style.position = 'absolute';
        capybara_welcome.style.opacity = '0';
        title_welcome.style.opacity = '0';
        MintNow.style.opacity = '0';
    }
    else {
        background_Vector.style.top = '0vh';
        background_Vector.style.position = 'fixed';
        capybara_welcome.style.opacity = '1';
        title_welcome.style.opacity = '1';
        MintNow.style.opacity = '1';
    }
})

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
        // console.log(capybara_none[i])
        const filter_gallery = document.querySelectorAll('.filter_gallery');

        filterimage[i].classList.add('noneFilter')
        rectOparcity[i].classList.remove('rectOparcity');
        if (filter_gallery[i]) {
            filter_gallery[i].remove();
        }
        console.log(1)

        // filterimage[i].style.height = '0';
        // filterimage[i].src="img/gallery_visibility.png";
        // document.getElementById('filterimage')[i].src="";
    });
    capybara_none[i].addEventListener("mouseleave", e => {
        // console.log(capybara_none[i])
        const filter_gallery = document.querySelectorAll('.filter_gallery');

        filterimage[i].classList.remove('noneFilter');
        rectOparcity[i].classList.add('rectOparcity');
        filterimage[i].innerHTML = '<img class="filter_gallery" src="img/filter_gallery.png" id="filter_gallery" alt=""/>'

        console.log(2)

        // filterimage[i].innerHTML = '<img class="filter_gallery"src="img/filter_gallery.png" id="filter_gallery" alt=""/>'
        // filterimage[i].style.height = '100%';

        // filterimage[i].src="img/filter_gallery.png";

        // filterimage[i].src='img/filter_gallery.png';

    })
}

