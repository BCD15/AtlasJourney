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

            for (let i = 0; i < accounts.length; i++) {
                if(accounts[i].name != name || accounts[i].email != email || accounts[i].password != password) {
                    alert('Usuário não existente')
                    return
                } else {
                    window.location='../Home/index.html'
                }
            }
        }
    }
}