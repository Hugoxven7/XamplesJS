
/* FUNCIÓN DE PRECARGA DESDE JS */
    window.onload = function()
    {

    }

/* FUNCIÓN DE PRECARGA CON USO DE AJAX */
    $(document).ready(function()
    {   

    });

/* FUNCIÓN CLCIK MEDIANTE AJAX ACTIVACIÓN DE CREACIÓN */
    $('.bttsend').click(function()
    {
        swal("!AVISO¡","SE CREARA UN BOTON NUEVO APPENCHILD",'info');
        creationNodo();
    });

/* DECLARACIÓN DE FUCNCIÓN, CREACIÓN DE NODO BOTON */
    function creationNodo()
    {
        /*  ESTABLECER NODO PRINCIPAL */
        var NodoPrincipal = document.querySelector("#divselector"); 

        /* CREACIÓN DE NUEVOS ELEMENTOS */
        let nwelement = document.createElement('button');
        nwelement.className = ('nuevoclass');
        nwelement.classList.add('btn', 'btn-primary'); /* AGREGAR CLASES A YA EXISTENTE */
        nwelement.textContent = 'Agregar';

        NodoPrincipal.appendChild(nwelement);
    }