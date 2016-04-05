function isRetina(){var i="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return window.devicePixelRatio>1?!0:window.matchMedia&&window.matchMedia(i).matches?!0:!1}function retina(){isRetina()&&$("img.2x").map(function(i,e){var n=$(e).attr("src");n=n.replace(".png","@2x.png"),n=n.replace(".jpg","@2x.jpg"),$(e).attr("src",n)})}
$(document).ready(retina);

// $(document).ready(function() {
//     $(function() {
//         $('a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//     });
// });

$.fn.instagram = function(options) {
    var that = this,
        apiEndpoint = "https://api.instagram.com/v1",
        settings = {
            userId: null,
            accessToken: null,
            clientId: null,
            show: null,
            image_size: null,
            photoLink: true
        };
    options && $.extend(settings, options);

    function createPhotoElement(photo) {
        var image_url = photo.images.thumbnail.url;
        if (settings.image_size == 'low_resolution') {
            image_url = photo.images.low_resolution.url
        } else if (settings.image_size == 'thumbnail') {
            image_url = photo.images.thumbnail.url
        } else if (settings.image_size == 'standard_resolution') {
            image_url = photo.images.standard_resolution.url
        }
        var innerHtml = $('<img>').addClass('instagram-image').attr('src', image_url);
        innerHtml = $('<span>').append(innerHtml);
        if (settings.photoLink) {
            innerHtml = $('<a>').attr('target', '_blank').attr('href', photo.link).append(innerHtml)
        }
        return $('<li>').addClass('photo-placeholder').attr('id', photo.id).append(innerHtml)
    }

    function createEmptyElement() {
        return $('<li>').addClass('photo-placeholder').attr('id', 'empty').append($('<p>').html('No photos for this query'))
    }

    function composeRequestURL() {
        var url = apiEndpoint,
            params = {};
        url += "/users/self/media/recent";
        settings.accessToken != null && (params.access_token = settings.accessToken);
        settings.clientId != null && (params.client_id = settings.clientId);
        settings.show != null && (params.count = settings.show);
        url += "?" + $.param(params);
        return url
    }
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        timeout: 5e3,
        cache: false,
        url: composeRequestURL(),
        success: function(res) {
            var length = typeof res.data != 'undefined' ? res.data.length : 0;
            var limit = settings.show != null && settings.show < length ? settings.show : length;
            if (limit > 0) {
                for (var i = 0; i < limit; i++) {
                    that.append(createPhotoElement(res.data[i]))
                }
            } else {
                that.append(createEmptyElement())
            }
        }
    });
    return this
}

$(function() {
    $("#instagram-grid").instagram({
        accessToken: "29531297.44bdc22.3fdd65b843344298b90a7379caa3aa66",
        clientId: '44bdc22352a74ce0bedd2df5c49d0beb',
        show: 6,
        image_size: 'standard_resolution'
    })
});