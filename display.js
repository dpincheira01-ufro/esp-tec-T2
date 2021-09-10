class Display {
    constructor(displaynumeroguardado, displaynumeroactual) {
        this.displaynumeroactual = displaynumeroactual;
        this.displaynumeroguardado = displaynumeroguardado;
        this.calculador = new Calculadora();
        this.operacion = undefined;
        this.numeroactual = '';
        this.numeroguardado = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
            inverso: "+/-"
        }
    }

    borrar() {
        this.numeroactual = this.numeroactual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.numeroactual = '';
        this.numeroguardado = '';
        this.operacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.operacion !== 'igual' && this.calcular();
        this.operacion = tipo;
        this.numeroguardado = this.numeroactual || this.numeroguardado;
        this.numeroactual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.numeroactual.includes('.')) return
        this.numeroactual = this.numeroactual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displaynumeroactual.textContent = this.numeroactual;
        this.displaynumeroguardado.textContent = `${this.numeroguardado} ${this.signos[this.operacion] || ''}`;
    }

    calcular() {
        const numeroguardado = parseFloat(this.numeroguardado);
        const numeroactual = parseFloat(this.numeroactual);

        if (isNaN(numeroactual) || isNaN(numeroguardado)) return
        this.numeroactual = this.calculador[this.operacion](numeroguardado, numeroactual);
    }
}