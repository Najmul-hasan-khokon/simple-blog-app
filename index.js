/**
 * ? lkdflf
 * ! lkdf kkfd
 * ? lkdf
 * *k ldkfldf kld flkdfkllkkdkkfkdjfk
 */

const menu_icon = document.getElementById("menu_icon");
const menu = document.getElementById("menu");

menu_icon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});


