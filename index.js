//Page d'acceuil avec les articles

main()

async function main() {
    const articles = await getArticles();
    console.log(articles); // Affichage de array dans la console pour vérifier si fetch répond
    for (article of articles) {
        displayArticle(article); //display défini le type d'affichage,article l'élément de contenu
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
    const element = document.getElementById("produit");
    let vueArticle = `       
    <figure id="encart-art" class= "encart-art">
        <a href="produit.html" id="link-produit" class="link-produit"/>    
        <img class="teddy-img" src="`+ article.imageUrl + ` "width="" height="">
    <div class="info" id="info">        
        <figcaption class="name">`+ article.name + `</figcaption>
        <figcaption class="description">`+ article.description + `</figcaption>
        <figcaption class="price">`+ article.price + `</figcaption>
    </div>
    </figure>`
    console.log(article['imageUrl']); //pour la visualisation des Url dans la console
    element.insertAdjacentHTML('afterend', vueArticle);
}
    /*insertAdjacentHTML() analyse le texte spécifié en tant que HTML ou XML et
    insère les noeuds résultants dans le DOM à la position spécifiée.
    L'élement qui est utilisé n'est pas  réanalysé et les élements qu'il contient
    ne sont donc pas corrompus. Ceci, et le fait d'éviter la sérialisation
    supplémentaire, rend la fonction plus rapide et directe que innerHTML.*/





