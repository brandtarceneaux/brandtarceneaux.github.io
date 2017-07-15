$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(data) {
      
            // okay, so line 8 was above line 6, so you were appending the headers section before #product-section existed okay, I see that now
            $('#product-section').append($('<ul>').attr('id', 'products'));
            $('<section>').attr('id', 'product-section').appendTo($('#container'));
            $('<h3>').attr('id', 'header').text('Products').appendTo($('#product-section'));
    
    // Fix this to use jquery api vvvvvvvvvv like .attr and .addClass thank you :)
    var $searchSection = $('<div>').addClass('product-search');
        $searchSection.append($('<input>').attr('id', 'input-search').attr('name', 'input-search').attr('type', 'search'));
        $searchSection.append(($('<button>Search</button>')).attr('id', 'search-button'));
        
        $('#header').append($searchSection);
    
    data.map(function(item) {
            $('#product-section').append($('<ul>').attr('id', 'products'));
            $('<section>').attr('id', 'product-section').appendTo($('#container'));
            var $listItem = $('<li>').addClass('item');
            var $type = $('<div>').text(item.type.toUpperCase()).addClass('type');
            var $desc = $('<div>').text(item.desc).addClass('desc');
            var $price = $('<div>').text('$' + item.price).addClass('price');
            var $color = $('<div>').text(item.color).addClass('color');
            var $availColors = $('<div>').text(item.availableColors).addClass('availColors');
            var $stock = $('<div>').text(item.stock).addClass('stock');
            $listItem.append($type, $desc, $price, $color, $availColors, $stock).prepend($('<img>').attr('id', 'product-image').attr('src', '/projects/product-project/img/product/thumbs/' + item.image));
            $('#products').append($listItem);
        });
        
        
        $('#search-button').click(function(event){
            $('li').remove();
            $('#product-section').append($('<ul>').attr('id', 'products'));
            $('<section>').attr('id', 'product-section').appendTo($('#container'));
            var inputText = $('#input-search')[0].value.toString().toLowerCase();
              return (search(data, inputText)).map(function(item) {
                console.log(item);
                var $listItem = $('<li>').addClass('item');
                var $type = $('<div>').text(item.type.toUpperCase()).addClass('type');
                var $desc = $('<div>').text(item.desc).addClass('desc');
                var $price = $('<div>').text('$' + item.price).addClass('price');
                var $color = $('<div>').text(item.color).addClass('color');
                var $availColors = $('<div>').text(item.availableColors).addClass('availColors');
                var $stock = $('<div>').text(item.stock).addClass('stock');
            $listItem.append($type, $desc, $price, $color, $availColors, $stock).prepend($('<img>').attr('id', 'product-image').attr('src', '/projects/product-project/img/product/thumbs/' + item.image));
            // $newListItem does not exist? 
            $('#products').append($listItem);
        });;
             
        });
        
        function search(collection, term){
       var output = [];
       term = term.toLowerCase();
       _.each(collection, (function(value){
           if(isCollection(value)){
              if (search(value, term).length){
                   output.push(value);
              }
           } else {
               if (typeof value === 'string'){
                   if (value.toLowerCase().indexOf(term) > -1) {
                       output.push(value);
                   }
               }
           }
           }));
           return output;
   }
        
        // function search(collection, term) {
        // $('#products').empty();
    //     var output = [];
    //     // term = document.getElementById("search-criteria").toUpperCase();
    //     term = term.toLowerCase();
    //     return _.reduce(collection, function(output, value) {
    //         if(isCollection(value)) {
    //             if(search(value, term).length) ;
    //     } else if (typeof value === 'string') {
    //         if(value.toLowerCase().indexOf(term) > -1) {
    //             output.push(value);
    //             console.log(output);
    //         }
    //     }
    //     return output;
    // }, []); 
    //     }
});

function isCollection(value) {
    if (value === null || value instanceof Date) return false;
    if (typeof value === 'object') return true;
    return false;
  };
  
  // ALL YOUR CODE GOES ABOVE HERE //
});