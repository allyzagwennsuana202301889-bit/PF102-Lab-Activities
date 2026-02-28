let isMenuOpen = false;

  // 2️⃣ Select the hamburger and menu
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });