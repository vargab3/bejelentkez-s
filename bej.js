
const storedData = JSON.parse(localStorage.getItem('userData')) || [];

function register() {
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;

    
    if (storedData.some(user => user.username === regUsername)) {
        alert('Ez a felhasználónév már foglalt!');
        return;
    }

   
    storedData.push({ username: regUsername, password: regPassword });


    localStorage.setItem('userData', JSON.stringify(storedData));

    alert('Regisztráció sikeres!');
}

function checkCredentials() {
   
    const inputUsername = document.getElementById('login-username').value;
    const inputPassword = document.getElementById('login-password').value;


    if (storedData.some(user => user.username === inputUsername && user.password === inputPassword)) {
        document.getElementById('result').innerText = 'Sikeres belépés!';
    } else {
        document.getElementById('result').innerText = 'Hibás adatok. Kérlek, ellenőrizd a felhasználónév/email és jelszó mezőket.';
    }
}
