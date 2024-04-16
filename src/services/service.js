async function getProducts(url) {
    let res = await fetch(`http://localhost:3000${url}`)
    return await res.json()
}

export { getProducts }