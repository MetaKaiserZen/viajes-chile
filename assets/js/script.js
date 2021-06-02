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
});
