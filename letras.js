

            let letras = new Array ('J','E','F','F','E','R','S','O','N');
          

            for (let i = 0; i < letras.length; i++)
            {
                console.log(letras[i]);
            }
 

           let nameList = new Array();

            for (let i = 0; i < letras.length;i++ )
            {
                nameList.push(letras[i]);
            }

                for (let i = 0; i <  nameList.length; i++){
                 switch( nameList[i]){

                  case "A":
                  console.log("Vocal");
                  break;
                  case "E":
                   console.log("Vocal");
                  break;
                  case "I":
                   console.log("Vocal");
                  break;
                  case "O":
                   console.log("Vocal");
                  break;
                  case "U":
                   console.log("Vocal");
                  break;

                  case 1:
                  console.log("Los nombre de personas no contienen números!");
                  break;
                  case 2:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 3:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 4:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 5:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 6:
                  console.log("Los nombre de personas no contienen números!");
                  break;
                  case 7:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 8:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 9:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  case 0:
                   console.log("Los nombre de personas no contienen números!");
                  break;
                  default:
                  console.log("Consonante");
                }
            }


          
                 
                 

                 let mynameDictionary = new Map();
                
                  

                 for (var letra of  letras) 
                  {
                    if ( mynameDictionary.has(letra)) {
                      mynameDictionary.set(letra, mynameDictionary.get(letra)+1);
                      
                    } else {
                       mynameDictionary.set(letra,1);
                    }
                   
                  };

                  for (letra of mynameDictionary)
                  {
                      console.log(letra);
                  }
              
               
                 var primerApellido = new Array("O","T","T","O");
                 var segundoApellido = new Array("G","O","N","S","A","L","V","E","S");

                 var fullName = letras.concat(" ").concat( primerApellido).concat(" ").concat(segundoApellido);
                 console.log(fullName);

                 



    
   
