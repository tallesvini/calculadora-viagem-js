$('input').keyup(e => {
        
        const distância = $('#num1').val()
        const velocidade = $('#num2').val()
        const alcool = $('#num3').val()
        const km = $('#num4').val()
    
        let resultado1 = $('#resultado-1')
        let resultado2 = $('#resultado-2')
        let resultado3 = $('#resultado-3')

    
        // tempo de viagem -------------

        function time(distância, velocidade) {
            return distância / velocidade;
        } 
        let tempo = time(distância, velocidade);
        console.log(tempo)

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


        // litros de combustível---------
        let consumo = function(distância, médiaConsumo) {
            return distância / médiaConsumo;
        }
        let combustível = consumo(distância, km);
        

        // Reais de abastecimento
        let gastos = (combustível, alcool) => {
            return combustível * alcool;
        }
        let gastoCombustível = gastos(combustível, alcool);
        

        // resultado------------ 
        $('#botao').click(e => {
            resultado1.text(final + " aprox.")
            resultado2.text(combustível.toFixed(2) + " Litros")
            resultado3.text(gastoCombustível.toFixed(2) + " Reais")
        })

        //reset------
        const reset1 = $('#resultado-1').text()
        const reset2 = $('#resultado-2').text()
        const reset3 = $('#resultado-3').text()
        
        $('#reset').click(e => {
            $('.caixas')[0].reset()
            resultado1.text(reset1)
            resultado2.text(reset2)
            resultado3.text(reset3)
        })

})