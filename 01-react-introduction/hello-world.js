// create h1 tag with hello world text

const h1Hello = document.createElement('h1');
h1Hello.innerText = 'Hello world from JS';
const containerDiv = document.getElementById('container');
containerDiv.appendChild(h1Hello);