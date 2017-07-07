$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(data) {
    
    $('<section>').attr('id', 'product-section').appendTo($('#container'));
    $('<h3>').attr('id', 'header').text('Products').appendTo($('#product-section'));
        
    $('#product-section').append($('<ul>').attr('id', 'products'));
    
    _.map(data, function(item) {
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
        
  });
  // ALL YOUR CODE GOES ABOVE HERE //
});