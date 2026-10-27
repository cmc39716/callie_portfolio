
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Callie Clark | Portfolio</title>

  <!-- Connect CSS -->
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="site-header">

    <!-- LOGO -->
    <a href="index.html" class="logo">
      <span class="logo-icon">♨</span>
      <span>Callie Clark</span>
    </a>

    <!-- RIGHT SIDE -->
    <div class="header-right">

      <!-- DARK MODE TOGGLE -->
      <button
        class="theme-toggle"
        id="themeToggle"
        type="button"
        aria-label="Toggle dark mode"
        aria-pressed="false">
        <span class="toggle-circle"></span>
      </button>

      <!-- NAVIGATION -->
      <nav class="nav-links" id="navLinks">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#relevant">Radically Relevant</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
      </nav>

      <!-- SEARCH ICON -->
      <button
        class="search-button"
        type="button"
        aria-label="Search">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="7.8"/>
          <path d="M16.5 16.5L22 22"/>
        </svg>
      </button>

      <!-- MOBILE MENU -->
      <button
        class="menu-toggle"
        id="menuToggle"
        type="button"
        aria-label="Open navigation"
        aria-controls="navLinks"
        aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>

  <!-- JAVASCRIPT -->
  <script>
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Toggle dark mode
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      themeToggle.setAttribute("aria-pressed", String(isDark));
    });

    // Toggle mobile navigation
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  </script>

</body>
</html>

