
$(document).ready( () => {

    $('#b1').click( () => {
        alert('Text of p :' + $('#test').text())
    })

    $('#b2').click( () => {
        alert('HTML of p :' + $('#test').html())
    })

    $('#b3').click( () => {
        alert('Text of ul :' + $('ul').text())
    })

    $('#b4').click( () => {
        alert('HTML of ul :' + $('ul').html())
    })

    $('#b5').click( () => {
        var old = $('ul').html();
        var yeni = '<li>Wasser</li>'

        //$('ul').html(old + '<li>Wasser</li>')
        $('ul').html( $('ul').html() + '<li>Wasser</li>')
    })

    $('input').change( function () {
        $('#city').text('City name is :' + $(this).val())
    })

    $('#city').text('City name is :' + $('input').val())

})