const displaynumeroguardado = document.getElementById('numeroguardado');
const displaynumeroactual = document.getElementById('numeroactual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displaynumeroguardado, displaynumeroactual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});