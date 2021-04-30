function savedata() {
  var Email = document.getElementById("email").value;
  var Pass = document.getElementById("password").value;
  //   const data = {
  //     email: Email,
  //     password: Pass,
  //   };

  window.localStorage.setItem("email", Email);

  console.log(JSON.parse(window.localStorage.getItem("user")));
}
console.log(JSON.parse(window.localStorage.getItem("user")));
var name = localStorage.getItem("email");
document.getElementById("Username").innerHTML = name;
