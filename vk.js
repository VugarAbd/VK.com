function myVk () {
    let email =  document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    console.log(email);
    console.log(password);
    
    var error = "";
    if (email == "" || password == "")    
     error = "Заполни правильно все поля";
    else if (email.length <= 1 || email.length > 18)
      error = "не правильно ввели или не сущетсвует такой E-mail";
    else if (password.length <= 1 || password.length >24)
     error = "Пароль неверный"
    if(error != "") 
        document.getElementById('false').innerHTML = error;
    else {
        document.getElementById('false').innerHTML = null; 
        alert("Все правильно ,Добро пожаловать ВКонтакте");
        window.location = 'http://127.0.0.1:5500/vs%20code/%D1%83%D1%80%D0%BE%D0%BA%D0%B8%20%D0%B8%20%D0%B7%D0%http://127.0.0.1:5500/vs%20code/vk/vk.html?%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F/fb/fb.html';
         
    }
    return false;
}


myVk ()
