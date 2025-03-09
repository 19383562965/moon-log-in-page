document.getElementById('sign-up-button').onclick = function() {
  let password = document.getElementById('input').value;
  let realpassword = "abcd";
  if (password === realpassword){
    window.location.href = "loged-in.html";
  }
  else {
    console.log("wrong password")
  };
};