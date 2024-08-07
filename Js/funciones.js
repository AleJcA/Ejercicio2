function calcularNota(){
    let nota1 = parseFloat(document.getElementById('not1').value);
    let nota2 = parseFloat(document.getElementById('not2').value);
    let nota3 = parseFloat(document.getElementById('not3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">Por favor, complete todas las notas.</div>';
        return;
    }

    if (nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">Las notas deben estar entre 0 y 40.</div>';
        return;
    }

    let notaFinal = (nota1) + (nota2) + (nota3);

    let mensaje;
    if (notaFinal >= 90 && notaFinal <= 100) {
        mensaje = "Sobresaliente";
    } else if (notaFinal >= 80 && notaFinal < 90) {
        mensaje = "Muy Bueno";
    } else if (notaFinal >= 60 && notaFinal < 80) {
        mensaje = "Bueno";
    } else {
        mensaje = "Reprobado";
    }

    let resultadoF = '<div class="alert alert-info" role="alert">Tu nota final es: ' + notaFinal + ' ' + mensaje + '</div>';
    document.getElementById('resultado').innerHTML = resultadoF;
}

function limpiarFormulario() {
    // Limpiar los valores de los inputs y el resultado
    document.getElementById('not1').value = '';
    document.getElementById('not2').value = '';
    document.getElementById('not3').value = '';
    document.getElementById('resultado').innerHTML = '';
}