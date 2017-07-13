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
        
        var $searchSection = $('<div class="product-search"></div>');
        $searchSection.append('<input id = "search-criteria" placeholder="Search products..."></input>');
        $searchSection.append(($('<button>Search</button>')).attr('id', 'search-button'));
        $('#header').append($searchSection);
        
        var input = ('#search-criteria');
        
        
        // $('#search-button').click(function(data, input) {
        function myFunction() {
 
        var input, filter, ul, li, a, i;
        input = document.getElementById('input');
        filter = input.value.toUpperCase();
        ul = document.getElementById("products");
        li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
        
  });
  // ALL YOUR CODE GOES ABOVE HERE //
});