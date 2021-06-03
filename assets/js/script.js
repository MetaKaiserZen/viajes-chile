// Función que Llama a un Tooltip

$(function()
{
    $('[data-toggle="tooltip"]').tooltip();
});

// Preparar Documento

$(document).ready(function()
{
    // Función de Transición de Navbar

    $(window).scroll(function()
    {
        if ($(window).scrollTop() > 140)
        {
            $('.navbar').addClass('bg-info');
        }
        else
        {
            $('.navbar').removeClass('bg-info');
        }
    })

    // Evento Toggle Básado en Clases

    $('.titulo-destacado').on('click', function(e)
    {
        // Previene la Ejecución Inmediata del Evento

        e.preventDefault();

        // Esconde el Texto en las Tarjetas

        $('.color-parrafo').toggle();
    }); 
});
