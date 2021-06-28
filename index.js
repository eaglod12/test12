main()

async function main() {
    const articles = await getArticles();
    console.log(articles);
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

function displayArticle(article) {
    const templateElt = document.getElementById("produit");
    let vueArticle = `        
    <figure>
        <img src="`+article.imageUrl+`" alt="`+article.name+`" width="400" height="300">
        <figcaption>`+article.name+`</figcaption>
        <figcaption>`+article.description+`</figcaption>
        <figcaption>`+article.price+`</figcaption>
    </figure>
`
    console.log(article['imageUrl']);
    templateElt.insertAdjacentHTML('afterend', vueArticle);
}






