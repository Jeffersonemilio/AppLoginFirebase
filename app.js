function registrar() {

    var email = document.getElementById('idEmail').value;
    var password = document.getElementById('idPassword').value;

    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            verificarEmail()
        })


    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });

}

function logar() {
    var email2 = document.getElementById('idEmail2').value;
    var password2 = document.getElementById('idPassword2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
}

function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.

            aparece(user)
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log("Usuario ativo")
            console.log(email)
            console.log(user.emailVerified)
                // ...
        } else {
            // User is signed out.
            // ...
            console.log("Usuario não ativo")
        }
    });
}

observador();

function aparece(user) {
    var user = user;

    if (user.emailVerified) {
        var contenido = document.getElementById('contenido');
        contenido.innerHTML =
            '<div class="alert alert-success" role="alert">'
        '<h4 class="alert-heading">Well done!</h4>'
        '<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>'
        '<hr>'
        ' <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>'
        '</div>'


        ' <button onclick="fechar()">Fechar Sessão</button>';
    }






}

function fechar() {
    firebase.auth().signOut()
        .then(function() {
            console.log("Saindo...")
                //var contenido = document.getElementById('contenido').style.display = 'none';


        })
        .catch(function(error) {
            console.log(error)
        })
}

function verificarEmail() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        // Email sent.
        console.log("Enviando Email");
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}