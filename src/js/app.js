// Problem: User when clicking on image goes to dead end
// Solution create an overlay with the large image

let $overlay = $('<div id="overlay"></div>')
let $image = $('<img>');
let $caption = $('<p></p>');

// Add an image toverlay.append
$overlay.append($image);

// Add a caption  to overlay
$overlay.append($caption)

// Add overlay
$('body').append($overlay);

// 1. Capture the click event on a link to an image
$('#imageGallery a').click(function (e) {
    e.preventDefault()
    let imageLocation = $(this).attr('href');

    //Update overlay with  with the image linked in the link
    $image.attr('src', imageLocation);
    // Show the overlay
    $overlay.show();

    // Get child's alt attribute and set caption
    let captionText = $(this).children('img').attr('alt');
    $caption.html(captionText);
});

// When overlay is clicke
$overlay.click( function () { 
    // Hide overlay
    $(this).hide();
});
    
    