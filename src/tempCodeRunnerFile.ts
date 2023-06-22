import express from 'express'
const app = express ()
app.get('/', (req, res) =>{
res.status(200).send('TypeScript con  Node y Express')

})

app.listen(5000, ()=>{

    console.log('servidor corriendo en el puerto 5000')
})