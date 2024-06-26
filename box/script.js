const colors = [
  '#c49ee6',
  '#9ee6da',
  '#06a0bf',
  '#bfffd6'
]

function createSquare(){
  const section = document.querySelector('section');
  const square = document.createElement('span');

  var size = Math.random() * 50;

  square.style.width = 15 + size + 'px';
  square.style.height = 15 + size + 'px';

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
  const bg = colors[Math.floor(Math.randomseed(os.time()) * colors.length)];

  square.style.background = bg;
  
  section.appendChild(square);

  setTimeout(() =>{
    square.remove()
  },5000)
}

setInterval(createSquare, 150)
