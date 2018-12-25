const app = require('express')()

app.get('/', (req,res) => {
    console.log('hhhh')
})

app.listen(80,() => {
    console.log('listen on port 80')
})

