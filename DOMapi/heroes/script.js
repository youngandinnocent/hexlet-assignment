const header = document.querySelector('header');
const section = document.querySelector('section');

// fill header
const populateHeader = (jsonObj) => {
  const h1 = document.createElement('h1');
  h1.textContent = jsonObj.squadName;
  header.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`;
  header.appendChild(p);
};

// create hero cards
const showHeroes = (jsonObj) => {
  const heroes = jsonObj.members;
  for (let i = 0; i < heroes.length; i += 1) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const ul = document.createElement('ul');

    h2.textContent = heroes[i].name;
    p1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
    p2.textContent = `Age: ${heroes[i].age}`;
    p3.textContent = 'Superpowers:';

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j += 1) {
      const li = document.createElement('li');
      li.textContent = superPowers[j];
      ul.appendChild(li);
    }

    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(ul);

    section.appendChild(article);
  }
};

const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// get data
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();
request.onload = () => {
  const superHeroes = JSON.parse(request.response);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
