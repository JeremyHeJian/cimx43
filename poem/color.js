document.getElementById('changeme').style.background = '#fff';

var bgcolors = [
  '#f5977d',
  '#fcc58e',
  '#fff69f',
  '#c5de9e',
  '#7dccc8',
  '#7fa8d7',
  '#8494c8',
  '#bc8ebe',
  '#f39bc1',
];

var i = 0;

function change() {
  document.getElementById('changeme').style.backgroundColor = bgcolors[i];
}

var sentences = [
  'Just off the swirling sea,',
  "There's a lighthouse,",
  'Bigger than an aged oaken tree,',
  'Thicker in the base,',
  "And lighter on it's face,",
  'A homing beacon,',
  'For the ships, just off the shore,',
  'A warning, to be cautious of the waves and more.',
  '--Laura Williams',
];

function changeText() {
  document.getElementById('textbox').innerHTML = sentences[i++];
  if (i == sentences.length) i = 0;
}
