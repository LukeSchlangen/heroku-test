$(function() {
  getCats();
  $('#add-cat').on('submit', addCat);
});

function replaceCats(cats) {
  var $cats = $('#cats').empty();
  if (cats.length === 0) {
    $cats.append('<li>None :(</li>');
    return;
  }

  cats.forEach(function(cat) {
    var $li = $('<li></li>');
    $li.append('<p>' + cat.name + ', ' + cat.age + '</p>');
    $li.append('<img src="https://placekitten.com/'+ random(100, 600) + '/' + random(100, 600) + '">');
    $cats.append($li);
  });
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCats() {
  $.get('/cats')
    .then(function(data){
      replaceCats(data.cats);
    })
    .catch(function() {
      $('#cats').append('<li>None :(</li>');
    });
}

function showFormError() {
  $('#err').removeClass('hidden');
  $('.form-group').addClass('has-error');
}

function clearFormError() {
  $('#err').addClass('hidden');
  $('.form-group').removeClass('has-error');
}

function addCat(submitEvent) {
  clearFormError();
  submitEvent.preventDefault();
  var data = $(this).serialize();
  $.post('/cats', data)
    .then(getCats)
    .catch(showFormError);
  $(this).find('input').val('');
}
