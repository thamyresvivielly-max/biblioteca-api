fetch('http://localhost:3000/categorias', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nome: 'Literatura'
    })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
