let btnForm = document.getElementById("btnForm");

function teste() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  console.log(nome + email + msg);
}
btnForm.addEventListener("click", teste);

let btnMenu = document.getElementById("btn-menu");

function menuResponsivo() {
  let ul = document.getElementById("menu");
  ul.classList.toggle("active");
}
btnMenu.addEventListener("click", menuResponsivo);
