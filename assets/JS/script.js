/* Event handler for Image-viewer module */
$(document).ready(function() {

  $(".thumb-container img").click(function(e) {
    const image = $(this);
    const imgSource = image.attr("src");
    const imgAlt = image.attr("alt");
    const viewImg = document.getElementById("viewImg");

    $(".slide-bg").css(`background-image`, `url(${imgSource})`);
    viewImg.src = imgSource;
    viewImg.alt = imgAlt;

    e.preventDefault();

  })
});

/* MODAL IMAGE VIEWER */

$(document).ready(function() {
  $(".top-ten").click(function(e) {
    const setImg = document.getElementById("setImg");
    const subTitle = document.getElementById("subtitle");

    $(".modal, .closeModal").fadeIn(300);
    $(".modal").focus();
    setImg.src = $(e.target).attr("src");
    subTitle.innerHTML = $(e.target).attr("alt");
    e.preventDefault();
  })

  $(".close").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

  $(".closeModal").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

});
