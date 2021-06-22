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
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
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

`
    console.log(article['imageUrl']);
    templateElt.insertAdjacentHTML('afterend', vueArticle);
}








