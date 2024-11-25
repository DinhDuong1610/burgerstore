<header class="bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50" id="header">
  <nav class="container relative h-14 flex justify-between items-center">
    <div>
      <a href="#" class="text-2xl uppercase  font-oswald">
        Burge<span>rring!</span>
      </a>
    </div>
    <div
      class="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
      id="nav-menu">
      <ul class="flex flex-col text-center gap-5 md:flex-row">
        <li>
          <a href="#home"
            class="nav__link text-secondaryColor hover:text-secondaryColor ease-in duration-200">Home</a>
        </li>
        <li>
          <a href="#about" class="nav__link hover:text-secondaryColor ease-in duration-200">Service</a>
        </li>
        <li>
          <a href="#menu" class="nav__link hover:text-secondaryColor ease-in duration-200">Menu</a>
        </li>
        <li>
          <a href="#review" class="nav__link hover:text-secondaryColor ease-in duration-200">Review</a>
        </li>
        <li>
          <a href="#contact" class="nav__link hover:text-secondaryColor ease-in duration-200">Contact</a>
        </li>
      </ul>

      <div class="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden" id="nav-close">
        <i class="ri-close-line"></i>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <i class="ri-moon-line cursor-pointer ml-4 text-xl" id="theme-toggle"></i>

      <div class="md:hidden" id="hamburger">
        <i class="ri-menu-2-line cursor-pointer text-xl"></i>
      </div>
    </div>
    <a href="#" onclick="toggleSidebar(event)">
      <img src="img/carts.png" alt="Cart" class="cart-header">
    </a>
    <button class="btn btn-primary" id="signinButton">SIGN IN</button>
  </nav>
</header>