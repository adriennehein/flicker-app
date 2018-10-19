$(document).ready(function(){
  $('form').submit(e => {
    e.preventDefault(); //prevent page reload
    const flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const filter = $('#filter').val(); //set search query
    const flickerOptions = {
      tags: filter,
      format: "json"
    }
    const displayPhotos = (data) => {
      let photoGrid = '<div class="photo-grid">';
      $.each(data.items, function(i, photo){
        photoGrid +=
        `<div class="photo">
          <a href="${photo.link}">
            <div class="image" style="background:url(${photo.media.m}) center center; background-size: cover;">
            <div class="label">${photo.title}</div>
            </div>
          </a>
        </div>`;
      })
      photoGrid += '</div>';
      $('#photos').html(photoGrid);
    }
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);
  });


});
