// Theme management
const themeToggle = document.getElementById(
  'theme-toggle'
) as HTMLButtonElement;

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on user preference
const setInitialTheme = () => {
  if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙 Dark Mode';
  }
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
  themeToggle.textContent =
    newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
};

themeToggle.addEventListener('click', toggleTheme);

export { setInitialTheme };
