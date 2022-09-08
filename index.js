const app = express();

import express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLength from './bootcamp/wordLength.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js'
import enoughAirtime from './bootcamp/enoughAirtime.js';




app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/word_game', function(req, res){
    
        const sentence = req.query.sentence;
        res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLength(sentence)
       
         } );
});

app.post('/api/total/phonebill',  (request, response) => {

        const { billString } = request.body;
        
        console.log(billString);
        
        
        const biilInstance = totalPhoneBill(billString)
        
        console.log(biilInstance);
        
        response.json({
        
         total: biilInstance
         })
        
        
        })

        app.post('/api/enoughAirtime',  (request, response) => {

                const { usage } = request.body;
                
                console.log(usage);
                const { airtime} = request.body;
                
                console.log(airtime);
                
                const bill = enoughAirtime(usage, airtime)
                
                console.log(bill);
                
                response.json({
                
                 airtimeMessage: bill
                 })
                
                
                })        

const PORT = 6007;
app.listen(PORT, function(){
console.log('api started on port ', PORT) 
})