'use strict';
{
  const toggleNavSidebar = document.getElementById('toggle-nav-sidebar');
  if (toggleNavSidebar !== null) {
    const navLinks = document.querySelectorAll('#nav-sidebar a');

    function disableNavLinkTabbing() {
      for (const navLink of navLinks) {
        navLink.tabIndex = -1;
      }
    }

    function enableNavLinkTabbing() {
      for (const navLink of navLinks) {
        navLink.tabIndex = 0;
      }
    }

    function disableNavFilterTabbing() {
      document.getElementById('nav-filter').tabIndex = -1;
    }

    function enableNavFilterTabbing() {
      document.getElementById('nav-filter').tabIndex = 0;
    }

    const main = document.getElementById('main');
    let navSidebarIsOpen = localStorage.getItem(
      'django.admin.navSidebarIsOpen',
    );
    if (navSidebarIsOpen === null) {
      navSidebarIsOpen = 'true';
    }
    if (navSidebarIsOpen === 'false') {
      disableNavLinkTabbing();
      disableNavFilterTabbing();
    }
    main.classList.toggle('shifted', navSidebarIsOpen === 'true');

    toggleNavSidebar.addEventListener('click', function () {
      if (navSidebarIsOpen === 'true') {
        navSidebarIsOpen = 'false';
        disableNavLinkTabbing();
        disableNavFilterTabbing();
      } else {
        navSidebarIsOpen = 'true';
        enableNavLinkTabbing();
        enableNavFilterTabbing();
      }
      localStorage.setItem('django.admin.navSidebarIsOpen', navSidebarIsOpen);
      main.classList.toggle('shifted');
    });
  }

  function initSidebarQuickFilter() {
    const options = [];
    const navSidebar = document.getElementById('nav-sidebar');
    if (!navSidebar) {
      return;
    }

    /* OLD code
        navSidebar.querySelectorAll('th[scope=row] a').forEach((container) => {
          options.push({ title: container.innerHTML, node: container });
        });
         */

    $('#div_result').empty();
    navSidebar
      .querySelectorAll('div[data-kt-menu-flip] .menu-sub .menu-item a')
      .forEach((container) => {
        options.push({ title: container.title, node: container });
        // console.log('---', container)
        const clonedE = $(container)
          .clone()
          .addClass('d-flex text-hover-primary align-items-center mb-5');
        clonedE.find('.menu-bullet').remove();
        clonedE.appendTo('#div_result');
      });

    // console.log('options', options);

    function checkValue(event) {
      let filterValue = event.target.value;
      if (filterValue) {
        filterValue = filterValue.toLowerCase();
      }
      if (event.key === 'Escape') {
        filterValue = '';
        event.target.value = ''; // clear input
      }
      let matches = false;
      for (const o of options) {
        let displayValue = '';
        if (filterValue) {
          if (o.title.toLowerCase().indexOf(filterValue) === -1) {
            displayValue = 'none';
          } else {
            matches = true;
          }
        }
        // show/hide parent <TR>
        o.node.parentNode.parentNode.style.display = displayValue;
        // console.log('displayValue', displayValue, 'o.node.href', o.node, '#div_result a[href="' + $(o.node).attr('href') + '"]')
        if (displayValue === 'none') {
          $('#div_result a[href="' + $(o.node).attr('href') + '"]')
            .removeClass('d-flex')
            .addClass('d-none');
        } else {
          $('#div_result a[href="' + $(o.node).attr('href') + '"]')
            .removeClass('d-none')
            .addClass('d-flex');
        }
      }
      console.log('filterValue', filterValue, 'matches', matches);
      const $result = $('#div_result');
      const $recently = $('#div_recently');
      const $no_result = $('#div_no_result');

      if (!filterValue || matches) {
        event.target.classList.remove('no-results');
        $result.removeClass('d-none');
        $recently.addClass('d-none');
        $no_result.addClass('d-none');
      } else {
        event.target.classList.add('no-results');
        $result.addClass('d-none');
        if (!matches) {
          $recently.addClass('d-none');
          $no_result.removeClass('d-none');
        } else {
          if (filterValue === '') {
            $recently.removeClass('d-none');
            $no_result.addClass('d-none');
          }
        }
      }

      sessionStorage.setItem('django.admin.navSidebarFilterValue', filterValue);
    }

    const nav = document.getElementById('nav-filter');
    nav.addEventListener('change', checkValue, false);
    nav.addEventListener('input', checkValue, false);
    nav.addEventListener('keyup', checkValue, false);

    const storedValue = sessionStorage.getItem(
      'django.admin.navSidebarFilterValue',
    );
    if (storedValue) {
      nav.value = storedValue;
      checkValue({ target: nav, key: '' });
    }
  }

  window.initSidebarQuickFilter = initSidebarQuickFilter;
  initSidebarQuickFilter();
}
