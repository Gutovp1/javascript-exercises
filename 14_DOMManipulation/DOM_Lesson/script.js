const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is an amazing text content just created.';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I\'m red';
para.style.setProperty('color','red');

container.appendChild(para);

const header3 = document.createElement('h3');
header3.textContent = "I\'m a blue h3!";
header3.style.setProperty('color','blue');

container.appendChild(header3);

const content2 = document.createElement('div');
cont2Style = content2.style;
cont2Style.setProperty('border','5px solid black');
cont2Style.setProperty('background-color','pink');

const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div';

const para2 = document.createElement('p');
para2.textContent = 'ME TOO';

content2.appendChild(header1);
content2.appendChild(para2);
container.appendChild(content2);

// 3 methods to create an interaction event onclick
// method 1 in HTML
const btn = document.querySelector('#btn');

//method 2
//btn.onclick = () => alert("Hellooo m2");

//method 3
//  btn.addEventListener('click',() => {
//      alert('Helloooo m3!');
//  });

btn.addEventListener('click', function (e) {
    console.log(e);
    e.target.style.background = 'blue';
  });
  

