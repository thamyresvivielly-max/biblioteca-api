fetch('http://localhost:3000/livros', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        titulo: 'Dom Casmurro',
        ano: 1899,
        autorId: 1
    })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);