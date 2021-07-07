main()

async function main() {
    const articleId = getArticleId()
    const articleData = await getArticleData(articleId)
    displayArticle(articleData);
}


function getArticleId() {
    return new URL(Location.href).searchParams.get('id')
}

function getArticleData(articleId) {
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(async function (res) {
            return res.json()
        })
        .then(function (article) {
            return article
        })
        .catch(function (error) {
            alert(error)
        })
}

function displayArticle(articleData) {
    document.getElementById()
}




