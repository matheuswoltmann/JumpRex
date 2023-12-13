let score = document.getElementById('score')
let username = document.getElementById('name');
let userscore = parseInt(localStorage.getItem('scoreNumber'));

let form = document.getElementById('save-in-ranking');

score.innerHTML = userscore;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  fetch('https://us-central1-prova-front-letras.cloudfunctions.net/save', {
    method: 'POST',
    body: JSON.stringify({
      name: username.value,
      score: userscore
    })
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.status + 'Erro ao salvar os dados!')
    } else {
      location.href = './ranking.html'
    }
  })
})

