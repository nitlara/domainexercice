var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domain = ['.es','.com'];
let phrase = []

for (let i=0; i < pronoun.length;i++)
    {for (let h = 0; h < adj.length; h++)
        {for (let j = 0; j < adj.length; j++)
            {for (let l = 0; l < domain.length; l++)
                phrase = pronoun[i]+adj[h]+noun[j]+domain[l]
                console.log('www.'+ phrase)                
            }
        }
    }
