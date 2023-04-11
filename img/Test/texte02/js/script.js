let btnForm = document.getElementById("btnForm");
let div = document.getElementById("div");

function enviarMsg() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;


  console.log(`Nome:${name} | E-mail:${email} | Mensagem:${msg}`);
  div.innerHTML = `Nome:${name} | E-mail:${email} | Mensagem:${msg}`;
}

btnForm.addEventListener("click", enviarMsg);
