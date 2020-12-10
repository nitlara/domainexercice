var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','puedes','icom', 'poderio'];
var domain = ['es','com', 'io'];
let phrase = []
var nounB =[]
var nounC =[]



for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < noun.length; j++)
            {for (let l = 0; l < domain.length; l++){
                phrase = 'www.'+ pronoun[i]+adj[h]+noun[j]+'.'+domain[l];
                console.log(phrase);
            }}
        }
    }

console.log("--------------------Primer intento replace dominio-------------------")
//--------------------funciona pero en realidad cuando añades algo que no sea ES no te sirve.
for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < noun.length; j++)
            {for (let l = 0; l < domain.length; l++){
                if ((noun[j].indexOf(domain[l]) !== -1) == true ) 
                    { nounB =noun[j].replace(/es/gi,"");
                    phrase = 'www.'+pronoun[i]+adj[h]+nounB+'.'+domain[l]}
                    else
                    { phrase = 'www.'+pronoun[i]+adj[h]+noun[j]+'.'+domain[l]
                                }
                console.log(phrase)                 
                    }
                }
            }
        }

console.log("--------------------Segundo intento replace dominio------------------")
//--------------------¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯

for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < noun.length; j++)
            {for (let l = 0; l < domain.length; l++){
                if ((noun[j].indexOf(domain[l]) !== -1) == true ) 
                    { var nounC = noun[j].replace(domain[l], ""); // añadir es variable 
                    phrase = 'www.'+pronoun[i]+adj[h]+nounC+'.'+domain[l]}
                    else
                    { phrase = 'www.'+pronoun[i]+adj[h]+noun[j]+'.'+domain[l]
                                }
                console.log(phrase)                 
                    }
                }
            }
        }
 

