// Container banaye
const container = document.createElement('div');
container.className = 'container';

// Heading
const heading = document.createElement('h1');
heading.textContent = 'Welcome!';

// Paragraph
const para = document.createElement('p');
para.textContent = 'This is a simple dark mode toggle example using DOM.';

// Button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.id = 'toggle-dark-mode';

// Button click event
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Elements ko container me add karo
container.appendChild(heading);
container.appendChild(para);
container.appendChild(toggleButton);

// Container ko body me add karo
document.body.appendChild(container);
