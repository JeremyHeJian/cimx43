console.log('WIP');

let newLink = document.createElement('a');
newLink.setAttribute('href', '#');
newLink.setAttribute('class', 'readMore');
newLink.innerHTML = 'Read more';
newLink.style.display = 'inline-block';
newLink.style.color = 'red';
newLink.style.fontSize = '30px';

let allParagraphs = document.getElementsByTagName('p');
const firstParagraph = allParagraphs[0];

firstParagraph.appendChild(newLink);

for (let i = 0; i < allParagraphs.length; i++) {
  
}
