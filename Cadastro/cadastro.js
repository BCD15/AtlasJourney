function Send() {
    var name = document.querySelector('#name').value;
    var sName = document.querySelector('#sName').value;
    var cpf = document.querySelector('#cpf').value;
    var country = document.querySelector('#country').value;
    var date = document.querySelector('#date').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var cPassword = document.querySelector('#cPassword').value;

    const account = {
        name : name,
        sName : sName,
        cpf : cpf,
        country : country,
        date : date,
        email : email,
        password : password,
    }
    if(name == "admin") {
        if(localStorage.getItem("accounts") === null) {
            localStorage.setItem("accounts", JSON.stringify([account]));
        } else {
            const accounts = JSON.parse(localStorage.getItem("accounts"))

            for (let i = 0; i < accounts.length; i++) {
                if(accounts[i].name == account.name || accounts[i].email == account.email) {
                    alert('Usuário já existente')
                    return
                }
            }

            localStorage.setItem("accounts", JSON.stringify([...JSON.parse(localStorage.getItem("accounts")), account,]));
        }
        window.location='../Home/index.html'
    } else {
        if (!name || !sName || !cpf || !country || !date || !email || !password) {
            alert('Por favor preencha todos os campos')
            return
        } else if (password !== cPassword) {
            alert('As senhas informadas não correspondem ')
            return
        } else {
            if(localStorage.getItem("accounts") === null) {
                localStorage.setItem("accounts", JSON.stringify([account]));
            } else {
                const accounts = JSON.parse(localStorage.getItem("accounts"))

                for (let i = 0; i < accounts.length; i++) {
                    if(accounts[i].name == account.name || accounts[i].email == account.email) {
                        alert('Usuário já existente')
                        return
                    }
                }

                localStorage.setItem("accounts", JSON.stringify([...JSON.parse(localStorage.getItem("accounts")), account,]));
            }
        }
        window.location='../Home/index.html';
    }
}