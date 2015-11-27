())
$('.btn-pepperonni').on('click',function(){
  $('.pep').toggle();
});
$('.btn-mushrooms').on('click',function(){
  $('.mushroom').toggle();
});
$('.btn-green-peppers').on('click',function(){
  $('.green-pepper').toggle();
});
$('.btn-sauce,.btn-crust').removeClass('active');
$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');

$('.btn-crust').on('click',function(){
  $('.crust').toggleClass('crust-gluten-free');
});

$('.btn-sauce').on('click',function(){
  $('.sauce').toggleClass('sauce-white');
});

$('.btn').on('click',function(event){
  $(event.currentTarget).toggleClass('active');
  calculateTotalPrice();
  updateItemization ();
});


function updateItemization(){
  $('.price ul').empty();
  if ($('.btn-pepperonni').hasClass('active')){
    $('.price ul').append('<li>$1 pepperonni</li>');
  }
  if ($('.btn-mushrooms').hasClass('active')){
    $('.price ul').append('<li>$1 mushrooms</li>');
  }
  if ($('.btn-green-peppers').hasClass('active')){
    $('.price ul').append('<li>$1 green peppers</li>');
  }
  if ($('.btn-crust').hasClass('active')){
    $('.price ul').append('<li>$5 gluten-free crust</li>');
  }
  if ($('.btn-sauce').hasClass('active')){
   $('.price ul').append('<li>$3 white sauce</li>'); 
  }
}
updateItemization ();

function calculateTotalPrice(){
  var base = 10;

  if ($('.btn-pepperonni').hasClass('active')){
    base += 1
  }
  if ($('.btn-mushrooms').hasClass('active')){
    base += 1
  }
  if ($('.btn-green-peppers').hasClass('active')){
    base += 1
  }
  if ($('.btn-crust').hasClass('active')){
    base += 5
  }
  if ($('.btn-sauce').hasClass('active')){
    base += 3
  }
  $('.price strong').text("$" + base)
}
$('.price strong').text("$13")
