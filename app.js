var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon','puede'];
var domain = ['es','com'];
let phrase = []


for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < noun.length; j++)
            {for (let l = 0; l < domain.length; l++)
                phrase = 'www.'+ pronoun[i]+adj[h]+noun[j]+'.'+domain[l]
                console.log(phrase)                
            }
        }
    }


for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < adj.length; j++)
            {for (let l = 0; l < domain.length; l++)
                if ((j.indexOf(l) !== -1) == true ) 
                    {j.replace(/es/gi,"");
                    phrase = 'www.'+pronoun[i]+adj[h]+noun[j]+'.'+domain[l]
                    } else 
                        { phrase = 'www.'+pronoun[i]+adj[h]+noun[j]+'.'+domain[l]
                        }
                
                console.log(phrase)                 
                
            }
        }
    }
