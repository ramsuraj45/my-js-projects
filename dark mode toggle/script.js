const toggleButton = document.getElementById('toggle-dark-mode');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '🌞';
} else {
  toggleButton.textContent = '🌙';
}

// Toggle theme
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  toggleButton.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
