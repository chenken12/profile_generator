'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// q1
rl.question("What's your name? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)

  //q2
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`)

    //q3
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`)

      //q4
      rl.question("Which meal is your favourite? ", (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`)
        
        //q5
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`)
          
          //q6
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`)
            
            //q7
            rl.question("What is your superpower? ", (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`)
              
              rl.close();
            })
          })
        })
      })
    })
  })
})
