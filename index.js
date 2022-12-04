<script>
        function ex1(){
            alert("exercicio 1");
            let numero1 = parseInt(prompt("insira um número"));
            let numero2 = parseInt(prompt("Insira outro número"));
            if (numero1 > numero2){
            return(document.write("O primeiro número" + "(" + numero1 + ")" + "é maior que o segundo número" + "(" + numero2 + ")"))}

            else{
                return(document.write("O segundo número" + "(" + numero2 + ")" + "é maior que o primeiro número" + "(" + numero1 + ")"))
            }
        }

<!---------------------------------->

        function ex2 (){
            alert("exercicio 2");
            alert("Verifica se um número é positivo, negativo ou zero");
            let numero = parseInt(prompt("Insira um número"));

            if (numero > 0){
                return(document.write(numero + " , é um número positivo"))
            }
            
            else if(numero < 0){
                return(document.write(numero + ", é um número negativo"))
            }

            else( numero = 0)
                return(document.write(numero + " esse número é 0"))    

            }
        
<!---------------------------------->

            function ex3){
                alert("exercicio 3");
                let numero1 = parseInt(prompt("Insira o primeiro número"));
                let numero2 = parseInt(prompt("Insira o segundo número"));
                let numero3 = parseInt(prompt("Insira o terceiro número"));
                if (numero1>numero2 && numero1>numero3){
                    return(document.write("O primeiro número" + "(" + numero1 + ")" + "é maior que os outros números"))}
                
                else if(numero2> numero1 && numero2> numero3){
                return(document.write("O segundo número" + "(" + numero2 + ")" + "é maior que os outros números"))}

                else (numero3>numero1 && numero3>numero2)
                {
                return(document.write("O terceiro número" + "(" + numero3 + ")" + "é maior que os outros números"))}
            }

<!---------------------------------->

            function ex4){
                alert("exercicio 4");
                alert("Recebe 3 números e soma os dois maiores")
                let numero1 = parseInt(prompt("Insira o primeiro número"));
                let numero2 = parseInt(prompt("Insira o segundo número"));
                let numero3 = parseInt(prompt("Insira o terceiro número"));
                if( numero1 > numero2 && numero1 > numero3){
                 if(numero2 > numero3){
                  let soma = numero1 + numero2;
                   return(document.write("A soma dos dois maiores é " + soma))            
                  }
                }

                  if(numero2 > numero1 && numero2 > numero3){
                   if(numero3 > numero1){
                    let soma = numero2 + numero3;
                   return(document.write("A soma dos dois maiores é " + soma))
                   }
                  }

                  if(numero3>numero1 && numero3>numero2){
                   if(numero1>numero2){
                    let soma = numero3 + numero1;
                   return(document.write("A soma dos dois maiores é " + soma))
                   }
                  }

                  if(number1 > number2 && number1 > number3){
                if(number3 > number2){

                    let soma = number1 + number3;
                    return(document.write("A soma dos dois maiores números é: " + soma));

                }
            }

            if(number3 > number2 && number3 > number1){
                if(number2 > number1){

                    let soma = number3 + number2;
                    return(document.write("A soma dos dois maiores números é: " + soma));
                  }                                         
                }
             }

<!---------------------------------->

           function ex5){
            alert ("exercicio5");
            alert ("Recebe 6 números e verifica a média aritmética deles");
            
            let numero1 = parseInt(prompt("Insira o primeiro número"));
            let numero2 = parseInt(prompt("Insira o segundo número"));
            let numero3 = parseInt(prompt("Insira o terceiro número"));
            let numero4 = parseInt(prompt("Insira o quarto número"));
            let numero5 = parseInt(prompt("Insira o quinto número"));
            let numero6 = parseInt(prompt("Insira o sexto número"));

            let media = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6
            return(document.write("A média final é:" + media ))
           }

<!---------------------------------->

           function ex6){
            alert("exercicio 6")
            alert("Recebe 4 valores e diz qual é o primeiro, o segundo e o maior de todos")

            let numero1 = parseInt(prompt("Insira o primeiro número"));
            let numero2 = parseInt(prompt("Insira o segundo número"));
            let numero3 = parseInt(prompt("Insira o terceiro número"));
            let numero4 = parseInt(prompt("Insira o quarto número"));

            if(numero1 > numero2 && numero1 > numero3 && numero1 > numero4){
                return(document.write("O primeiro número é: " + numero1 + " O ultimo número é: " + numero4 + " O maior número é: " + numero1))
            }

            if(numero2 > numero1 && numero2 > numero3 && numero2 > numero4){
                return(document.write("O primeiro número é: " + numero1 + " O ultimo número é: " + numero4 + " O maior número é: " + numero2))
            }

            if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4){
                return(document.write("O primeiro número é: " + numero1 + " O ultimo número é: " + numero4 + " O maior número é: " + numero3))
            }

            if(numero4 > numero2 && numero4 > numero3 && numero4 > numero1){
                return(document.write("O primeiro número é: " + numero1 + " O ultimo número é: " + numero4 + " O maior número é: " + numero4))
            }

           }

<!---------------------------------->

           function ex7){
            alert("exercicio 7")
            alert("Recebe 6 números inferiores a 72 e soma todos eles e escreve os valores informados")

             let n1 = parseInt(prompt("Digite o primeiro número"));
             let n2 = parseInt(prompt("Digite o segundo número"));
             let n3 = parseInt(prompt("Digite o terceiro número"));
             let n4 = parseInt(prompt("Digite o quarto número"));
             let n5 = parseInt(prompt("Digite o quinto número"));
             let n6 = parseInt(prompt("Digite o sexto número"));


             if (n1 < 72 && n2 < 72 && n3 < 72 && n4 < 72 < n5 < 72 && n6 < 72) {
                alert("O resultado da soma é: " + (n1 + n2 + n3 + n4 + n5 + n6));
             }

                else {
                    alert("Os numeros são maiores que 72");
                }
            }

<!---------------------------------->

            function ex8(){
                alert("exercicio 8")
                alert("Calcula a média de 4 números e informa se passou no teste ou não")

                    let n1 = parseInt(prompt("Digite o primeiro número"));
                    let n2 = parseInt(prompt("Digite o segundo número"));
                    let n3 = parseInt(prompt("Digite o terceiro número"));
                    let n4 = parseInt(prompt("Digite o quarto número"));

                    let soma = (n1 + n2 + n3 +n4) / 4;
                    if(soma >= 5){
                    alert("Sua média foi " + soma + " você passou no teste");
                    }

                    if(soma <= 4){
                    alert("Sua média foi " + soma + " você não passou no teste");
                    }

            }
            
<!---------------------------------->

            function ex9(){
                alert("exercicio 9")
                alert("Recebe seu ano de nascimento e informa se você pode ou votar esse ano")

                let ano = parseInt(prompt("Digite seu ano de nascimento"));

                if(ano <= 2006){
                alert("Você pode votar")
                }
                if(ano >= 2007){
                alert("Você não pode votar")
                }
            }

<!---------------------------------->

            function ex10(){
                alert("exercicio 10")
                alert("Informe seu sexo e sua altura e ele informa seu peso")

                var sexo = prompt("1- Homem 2- Mulher")

                if (sexo == "1"){
                    var altura = parseInt(prompt("Informe sua altura"))
                    var peso = (72.7 * altura) - 58;
                    alert("Seu peso ideal é: " + peso);
                }

                if(sexo == "2"){
                    var altura = parseInt(prompt("Informe sua altura"))
                    var peso = (62.1 * altura) - 44.7;
                    alert("Seu peso ideal é: " + peso);
                }

            }

<!---------------------------------->

            function ex11(){
                alert("exercicio 11")
                alert("Micro calculadora")

                var oper = parseInt(prompt("1- Adição, 2-Subtração, 3-Divisão, 4-Multiplicação"))
                var n1 = parseInt(prompt("Informe o primeiro número"))
                var n2 = parseInt(prompt("Informe o segundo número"))

                if(oper == "1"){
                 var soma = n1 + n2;
                 alert("O resultado é " + soma);
                }

                if(oper == "2"){
                    var sub = n1 - n2;
                    alert ("O resultado é " + sub);
                }

                if(oper == "3"){
                    var divi = n1 / n2
                    alert ("O resultado é " + divi);
                }

                if(oper == "4"){
                    var multi = n1 * n2
                    alert ("O resultado é " + multi);
                }
            }

    </script>
