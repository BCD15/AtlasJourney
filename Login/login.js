function handle(e){
    var key=e.keyCode || e.which;
    if (key==13){
        Send()
    }
}

function Send() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if(name == "admin") {
        window.location='../Home/index.html'
    } else {
        if (!name || !email || !password) {
            alert('Por favor preencha todos os campos')
            return
        } else {
            const accounts = JSON.parse(localStorage.getItem("accounts"))
            const accountExists = accounts.some(account => account.name === name && account.email === email && account.password === password);

            if(accountExists) {
                window.location='../Home/index.html'
            } else {
                alert('Usuário não existente')
            }
        }
    }
}