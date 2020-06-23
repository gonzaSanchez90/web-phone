$('#darAlta').click(()=>{
    if(($('#marca').val()=='')||($('#modelo').val()=='')||($('#version').val()=='')||($('#fechaFabricacion').val()=='')||($('#stock').val()==''))
    {
        alert('Hay un campo vacio por favor completar todos los campos');
        return false;
    }
    else{
        return true;
    }
})
$('#darBaja').click(()=>{
    if(($('#marca').val()=='')||($('#modelo').val()=='')||($('#version').val()==''))
    {
        alert('Hay un campo vacio por favor completar todos los campos');
        return false;
    }
    else{

        return true;
    }
})
$('#darModificacion').click(()=>{
    if(($('#marca').val()=='')||($('#modelo').val()=='')||($('#version').val()==''))
    {
        alert('Hay un campo vacio por favor completar todos los campos');
        return false;
    }
    else{

        return true;
    }
})

$('#volver').click(()=>{
    window.location.href = "/administrador";
})
$('#volver2').click(()=>{
    window.location.href = "/";
})


/* botones crud */
$('#darAlta').click(()=>{
    window.location.href = "/administrador/alta";
});
$('#darBaja').click(()=>{
    window.location.href = "/administrador/baja";
});
$('#darModificar').click(()=>{
    window.location.href = "/administrador/modificar";
});
$('#darMostrar').click(()=>{
    window.location.href = "/administrador/mostrar";
});
$('#smartphones').mouseover(()=>{
    $('#smartphones').attr('nav-item dropdown', 'nav-item dropdown show');
    // $('#smartphones').attr('aria-expanded','true');
    
});
activo = false
$('#clicazo').click(()=>{
    if(activo == false){
    $('#clicazo').css('color','red');
    activo = true;
    }
    else{
        $('#clicazo').css('color','white');
        activo= false;
    }
})

  

    