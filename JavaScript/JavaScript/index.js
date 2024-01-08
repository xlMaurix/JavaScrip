function Display(){
    let myuuid = crypto.randomUUID();
    
    if (!document.getElementById('Username').value) {
        document.getElementById('ERROR').innerHTML = 'Insert a Username.'
        return false;
    }

    if (!document.getElementById('Password').value){
        document.getElementById('ERROR').innerHTML = 'Insert a Password.';
        return false;
    }
    
    const User = document.getElementById('Username').value;
    const Pass = document.getElementById('Password').value;


    document.getElementById('ERROR').innerHTML = 'User: ' + User + ' ' + 'Password: ' + Pass;
    setTimeout(Disapear, 1000);
    setTimeout(Redirect, 2000);
}

function Disapear(){
    document.getElementById('ERROR').innerHTML = null
    document.getElementById('Username').value = null
    document.getElementById('Password').value = null
}

function Redirect(){
    window.open("/profile.html", "_self")
}

///Profile Code after this

function Back(){
    window.open("/index.html", "_self")
}