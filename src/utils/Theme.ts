const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const setInitialTheme = () => {
  const themeToggle = document.getElementById(
    'theme-toggle'
  ) as HTMLButtonElement | null;
  if (!themeToggle) return; // Don't crash if the element isn't there

  if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙 Dark Mode';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent =
      newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
  });
};

export { setInitialTheme };
