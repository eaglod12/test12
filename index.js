//Page d'acceuil avec les articles

main()

async function main() {
    const articles = await getArticles();
    console.log(articles); // Affichage de array pour vérifier si fetch répond
    for (article of articles) {
        displayArticle(article);
    }

}

function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (res) {
            return res.json()
        })
        .then(function (articles) {
            return articles
        })
        .catch(function (error) {
            alert(error)
        })
}

//function pour récuperer et afficher les articles sur la page d'acceuil

function displayArticle(article) {
    const templateElt = document.getElementById("produit");
    let vueArticle = `        
    <figure id="encart-art" class= "encart-art">
        <img class="teddy-img" src="`+article.imageUrl+` "width="" height="">
        <figcaption class="name">`+article.name+`</figcaption>
        <figcaption class="description">`+article.description+`</figcaption>
        <figcaption class="price">`+article.price+`</figcaption>
    </figure>`
    console.log(article['imageUrl']); //pour la visualisation des Url
    templateElt.insertAdjacentHTML('afterend', vueArticle);
}






