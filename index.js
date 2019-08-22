function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  let imgAry = responseJson.message;
  $('.results').empty();

  imgAry.forEach(img => {
    $('.results').append(
      `<img src="${img}" class="results-img">`
    );
  });
}

function watchForm() {
  $('#getDogs').submit(event => {
    event.preventDefault();
    let usrInput = $('#numDogs').val();
    if(!usrInput) {
      usrInput = 1;
    }
    getDogImage(usrInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});