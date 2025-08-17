document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal');
    var img = document.querySelectorAll('.open-modal');
    var modalImg = document.getElementById("modal-image");

    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.getAttribute('src');
        }
    }

    // modal.onclick = function() {
    //     modal.style.display = "none";
    // }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.add('animate-close');
            setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('animate-close');
            }, 100);
        }
    }
});