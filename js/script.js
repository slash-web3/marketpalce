var nav1__list__btn = document.querySelector(`.nav1__list_btn`);

nav1__list__btn.addEventListener("click", function(){
  var nav1__lst_submen = document.querySelector(`.nav_list_submenu`);
  nav1__lst_submen.classList.toggle('active');
  nav1__list__btn.classList.toggle('active');
});


var burger_btn = document.querySelector(`.nav2__burger__btn`);

  burger_btn.addEventListener("click", function(){
  var aside_menu = document.querySelector(`.aside__menu`);
  aside_menu.classList.toggle('active');
  burger_btn.classList.toggle('active');
});
