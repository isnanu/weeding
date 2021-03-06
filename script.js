$(document).ready(function(e) {
    $('#contentSection').hide();
});

//Get the button
var mybutton = document.getElementById("myBtn");
var playMusic = document.getElementById("play");
var stopMusic = document.getElementById("pause");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function playButton() {
    document.getElementById('audio').play();
    stopMusic.style.display = "block";
    playMusic.style.display = "none";
}

function stopButton() {
    document.getElementById('audio').pause();
    stopMusic.style.display = "none";
    playMusic.style.display = "block";
}

function openInvitation () {
    // $('#contentSection').show();
    // $('#contentDashboardAwal').hide();
    $('#contentDashboardAwal').fadeOut();
    $('#contentSection').fadeIn();
    this.playButton();
}

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("textRek");
  
     /* Copy the text inside the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value).then({
        
    })
}

function modalImage(url) {
    console.log('here ');
    var modal = document.getElementById("myModal");

    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = url;
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}