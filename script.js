let n1 = document.querySelector('#num1')
let n2 = document.querySelector('#num2')
let n3 = document.querySelector('#num3')
let n4 = document.querySelector('#num4')

let resultado1 = document.querySelector('#resultado-1')
let resultado2 = document.querySelector('#resultado-2')
let resultado3 = document.querySelector('#resultado-3')

    function somar() {
        const distância = parseFloat(n1.value)
        const velocidade = parseFloat(n2.value)
        const alcool = parseFloat(n3.value)
        const km = parseFloat(n4.value)

        // tempo de viagem -------------

        function time(distância, velocidade) {
            return distância / velocidade;
        } 
        let tempo = time(distância, velocidade);

        function sec(tempo, minutes, hours) {
            return tempo * minutes * hours;
        }   
        let seg = sec(tempo, 60, 60);

        function hours(seg, variable) {
            return parseInt(seg / variable);
        }
        let horas = hours(seg, 3600);

        function minutes(seg, hour, variable, divisor) {
            return parseInt( (seg- (hour * variable)) / divisor);
        }
        let minutos = minutes(seg, horas, 3600, 60);

        function seconds(seg, hours, variable, minutes, multiplicator){
            return Math.floor((seg - ((hours * variable) + (minutes * multiplicator))));
        }
        let segundos = seconds(seg, horas, 3600, minutos, 60);

        function result(hours, minutes) {
            return((hours < 10 ? "0" + horas : horas) + "h" + (minutes < 10 ? "0" + minutos : minutos) + "min");
        }
        let final = result(horas, 10, minutos);


        resultado1.innerHTML = final + ' aprox.'

        // litros de combustível---------
        let consumo = function(distância, médiaConsumo) {
            return distância / médiaConsumo;
        }
        let combustível = consumo(distância, km);
        
        
        resultado2.innerHTML = combustível.toFixed(2) + ' Litros'

        // Reais de abastecimento
        let gastos = (combustível, alcool) => {
            return combustível * alcool;
        }
        let gastoCombustível = gastos(combustível, alcool);
        
        
        resultado3.innerHTML = gastoCombustível.toFixed(2) + ' Reais'     
}