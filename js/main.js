window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500)
}

let block_number = document.querySelectorAll(".block_number_conteiner_block_number");

block_number.forEach(element => {
    element.addEventListener("mouseover", e => {
        console.log(element)
    })
});