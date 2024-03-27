(async () => {

const survey = require('./survey')
const url = 'https://raw.githubusercontent.com/300088801/survey-demo/main/questions.json'
survey.setUrl(url)
console.log( await survey.run())

})()