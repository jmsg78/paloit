      function validateNumber() {
        //Se obtiene el nro de card
        let numberCard = document.getElementById("card").value;
        //Se obtiene el número de digitos de la CARD.
        let countDigits = numberCard.length;
        //Convertie number Card en Array 
        let numberArray = numberCard.split('');
        //Creamos una variable de Objeto para acumular la cantidad de los numeros repetidos
        let repeated = {};
        
        numberArray.forEach(function(number){
          repeated[number] = (repeated[number] || 0) + 1;
        });
        console.log(repeated);
        //Generaoms arreglos con valores repetidos
        let maxNumberArray = Object.values(repeated);
        let keyNumberArray = Object.keys(repeated);
        console.log(maxNumberArray);
        //Obtenemos el máximo de Números Repetidos en el number Card
        let maxNumber = Math.max(...maxNumberArray);
        //Obtebemos el index del Numero Mayor
        let indexMaxNumber = maxNumberArray.indexOf(maxNumber);
        //Obtenemos el número Mayor con su indice.
        let numberMax = keyNumberArray[indexMaxNumber];
        
        if (!isCorrect(countDigits)) {
          document.getElementById("message").innerText=`Card number ${numberCard} invalid! (${countDigits} digits)`;
        } else {
          document.getElementById("message").innerText="";
          document.getElementById("luckyNumber").innerText=`Número de la Suerte: ${numberMax}`;
        }
        
      }

      //Funcion para validar el tamaño de card Number
      const isCorrect = (countDigits) => {
        return ((countDigits > 13 ) && (countDigits < 17)) ? true : false
      }