main()

async function main() {
    const produitId = getProduitId()
    const produitData = await getProduitData(produitId)
    displayproduit(produitData);
}



function getProduitData(produitId) {
    return fetch(`http://localhost:3000/api/teddies/${produitId}`)
        .then(async function (res) {
            return res.json()
        })
        .then(function (produit) {
            return produit
        })
        .catch(function (error) {
            alert(error)
        })
}







