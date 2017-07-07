$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(data) {
    
    $('<section>').attr('id', 'product-section').append($('<h3>').text('Products')).appendTo($('#container'));
        
    $('#product-section').append($('<ul>').attr('id', 'list-products'));
    
    _.map(data, function(item) {
            var $listItem = $('<li>').addClass('item');
            var $type = $('<div>').text(item.type.toUpperCase()).addClass('type');
            var $desc = $('<div>').text(item.desc).addClass('desc');
            var $price = $('<div>').text('$' + item.price).addClass('price');
            var $color = $('<div>').text(item.color).addClass('color');
            var $availColors = $('<div>').text(item.availableColors).addClass('availColors');
            var $stock = $('<div>').text(item.stock).addClass('stock');
            $listItem.append($type, $desc, $price, $color, $availColors, $stock).prepend($('<img>').attr('id', 'product-image').attr('src', '/projects/product-project/img/product/thumbs/' + item.image));
            $('#list-products').append($listItem);
        });
        
        $('img').css(height, '100').css(width, '100');
    
  
  
});
  // ALL YOUR CODE GOES ABOVE HERE //
});