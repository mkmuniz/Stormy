


const req = (method, url) => {
    axios.method('http://localhost:3001/', + url)
    .then(res => res.data)
    .then(console.log('Request sucessfully!'))
}