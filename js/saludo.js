

/
let usuarioAutenticado = true;
let emailUsuario = 'usuario@example.com';

function modificarHeader() {
   
    let header = document.querySelector('#header');

    if (usuarioAutenticado) {
       
        let mensajeBienvenida = document.
        mensajeBienvenida. = `Bienvenido: ${emailUsuario}`;

        const linkLogout = document.createElement('a');
        linkLogout.href = '#'; 
        linkLogout. = 'logout';

       

        let elementosLoginRegistro = document.querySelectorAll('.login, .registro');
        
        elementosLoginRegistro.forEach(elemento => {
            elemento.style.display = 'none';
        });
    }
}

/

        
        let elementosLoginRegistro = document.querySelectorAll('.login, .registro');
        
        
