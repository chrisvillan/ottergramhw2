var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

var i = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src",imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail){
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail){
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
  "use strict";
  thumb.addEventListener("click",function (event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

// 1. Create the button
var button = document.createElement("left-button");
button.innerHTML = "<-";

var button2 = document.createElement("right-button");
button2.innerHTML = "->";
// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
body.appendChild(button2);


// 3. Add event handler
button.addEventListener ("click", function() {
  // var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnails = getThumbnailsArray();
  i=i+1;
  if(i==5){
    i=0;
  }
  setDetailsFromThumb(thumbnails[i]);

});

button2.addEventListener ("click", function() {
  // var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnails = getThumbnailsArray();
  i=i-1;
  if(i==-1){
    i=4;
  }
  setDetailsFromThumb(thumbnails[i]);

});


function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();
