Drupal.behaviors.mainMenu = {
  attach(context) {
    const toggleExpand = context.getElementsByClassName('mobile-menu-button')[0];
    const menu = context.getElementsByClassName('header__menu')[0];
    if (menu) {
      const expandMenu = menu.getElementsByClassName('expand-sub');

      // Mobile Menu Show/Hide.
      toggleExpand.addEventListener('click', e => {
        toggleExpand.classList.toggle('opened');
        menu.classList.toggle('opened');
        e.preventDefault();
      });

      // Expose mobile sub menu on click.
      for (let i = 0; i < expandMenu.length; i += 1) {
        expandMenu[i].addEventListener('click', e => {
          const menuItem = e.currentTarget;
          const subMenu = menuItem.nextElementSibling;

          menuItem.classList.toggle('expand-sub--open');
          subMenu.classList.toggle('main-menu--sub-open');
        });
      }
    }
  },
};
