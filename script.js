function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.presionaBackSpace();
        },
        presionaBackSpace(){
            this.display.addEventListener('keydown', e =>{
                if(e.keyCode === 8){
                    e.preventDefault();
                    this.clearDisplay();
                }
            })

        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.fazerConta()
                }
            })
        },
        fazerConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                
                if (!conta) {
                    alert('conta invalida')
                    return;
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },
        deletOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay(el.innerText)
                };
                if (el.classList.contains('btn-del')) {
                    this.deletOne()
                };
                if (el.classList.contains('btn-igual')) {
                    this.fazerConta()
                }
                this.display.focus()
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
