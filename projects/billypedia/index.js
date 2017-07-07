/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio p:last-child').remove();
        $('#section-quotes').css('background-color', 'rgb(239, 80, 41)').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('.heading-quotes').css('padding-top', '10px');
        $('#section-bio p:last-child').remove();


    // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
       
        //create Top Rated list
        var topRated = data.discography.topRated;
        var listRat = $('#list-top-rated');
            _.map(topRated, function(recording) {
                listRat.append($('<li>').text(recording.title));
        });
        
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
        
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        $('ul li').css('font-weight', 'bold').css('color', 'white');
        $('#sidebar').css('background-color', 'rgb(125, 198, 205)');
        $('#header-top-rated').css('font-weight', 'bold').css('color', 'white');
        $('#section-recordings').css('font-weight', 'bold').css('color', 'white');
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        var recordings = data.discography.recordings;
        var topRated = data.discography.topRated;
        
        //Create Recordings section
        _.map(recordings, function(recording) {
            var $listItem = $('<li>').addClass('recording');
            var $title = $('<div>').text(recording.title).addClass('title');
            var $artist = $('<div>').text(recording.artist).addClass('artist');
            var $release = $('<div>').text(recording.release).addClass('release');
            var $year = $('<div>').text(recording.year).addClass('year');
            $listItem.append($title, $artist, $release, $year);
            $('#list-recordings').append($listItem);
        });
        
        //adding images to the recordings lists
        $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art));
        $('#section-recordings').prepend($('<img>').attr('id', 'recordings-image').attr('src', recordings[0].art));

        //change image of billy on click
        $('#image-billy').on('click', function(event) {
            var billyPic = $('#image-billy').attr('src');
            var billyIndex = _.indexOf(data.images.billy, billyPic);
            console.log(billyIndex);
            if(billyIndex < data.images.billy.length) {
                billyPic = data.images.billy[billyIndex + 1];
                return $('#image-billy').attr('src', billyPic);
            } else {
                billyPic = data.images.billy[0];
                return $('#image-billy').attr('src', billyPic);
           }
        });
        
        // change recordings images on click of recording title
        $('#list-top-rated li').click(function(event) {
           var text = $(this).text();
           console.log(text);
           for(var i = 0; i < topRated.length; i++) {
               if(text === topRated[i].title) {
                   return $('#top-rated-image').attr('src', topRated[i].art);
               }
           }
        });
        
        $('#list-recordings li div').click(function(event) {
           var text = $(this).text();
           console.log(text);
           for(var i = 0; i < recordings.length; i++) {
               if(text === recordings[i].title) {
                   return $('#recordings-image').attr('src', recordings[i].art);
               }
           }
        });
        
        //construct a table of Billy's rider
        var rider = data.rider;
        var createTable = function(riderData) {
            var createRow = function(items) {
                var $row = $('<tr>');
                var $item = $('<td>').text(items.type);
                var $desc = $('<td>').text(items.desc);
                $row.append($item);
                $row.append($desc);
                return $row;
            };
            var $table = $('<table>');
            var $rows = _.map(rider, createRow);
            $table.append($rows);
            return $table;
        };
        
        console.log(createTable(rider));
        createTable(rider).attr('id', 'billy-rider').prepend($('<h3>').text('Billy\'s Rider')).appendTo('.content');
        $('#billy-rider').css('background', 'rgb(239, 80, 41)').css('color', 'white').css('border-radius', '4px').css('margin-top', '15px');
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


