let table = document.getElementById('ranking-table');
let tbody = table.appendChild(document.createElement('tbody'));

let loader = tbody.appendChild(document.createElement('div'));
loader.setAttribute('class', 'loader');

fetch('https://us-central1-prova-front-letras.cloudfunctions.net/ranking').then(function(response) {
  return response.json();
}).then(function(data) {
  tbody.removeChild(loader)
  let i = 0;
  
  for (let count in data.sort(sortfunction)) {
    let tr = tbody.appendChild(document.createElement('tr'));
    let position = tr.appendChild(document.createElement('td'));
    let name = tr.appendChild(document.createElement('td'));
    let score = tr.appendChild(document.createElement('td'));

    position.innerHTML += parseInt(count) + parseInt(1);
    name.innerHTML += data[count].name;
    score.innerHTML += (data[count].score).toLocaleString('pt-BR');

    tbody.setAttribute('class', 'tbody');
    tr.setAttribute('class', 'ranking-row');
    position.setAttribute('class', 'ranking-position');
    name.setAttribute('class', 'ranking-name');
    score.setAttribute('class', 'ranking-score');

    if (i >= 0 && i <= 2) {
      position.style.color = 'var(--color-text-complement)';
      name.style.color = 'var(--color-text-complement)';
      score.style.color = 'var(--color-text-complement)';
    } 
    i++;
  }
})

function sortfunction(a, b){
  return (b.score - a.score);
}