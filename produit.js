main()

async function main() {

    getArticleId();
}

function getArticleId() {
    const articleId = $_GET("id");

    return fetch(`http://localhost:3000/api/teddies/` + articleId)
        .then(async function (res) {
            return res.json()
        })
        .then(function (article) {
            displayArticle(article);
            return article
        })
        .catch(function (error) {
            alert(error)
        })
}

function displayArticle(article) {
    const element = document.getElementById("article");

    let vueArticle = `  

    <figure id="encart-art" class= "encart-art">
        <img class="teddy-img" src="`+ article.imageUrl + ` "width=""height="">
    <div class="info" id="info">        
        <figcaption class="name">`+ article.name + `</figcaption>
        <figcaption class="description">`+ article.description + `</figcaption>
        <figcaption class="price" id="price">` + article.price / 100 + ",00 €" + `</figcaption>
        <button type="button" onclick="window.location.href = 'panier.html?id=`+ article._id + `'" class="btn-card" class="add-to-cart">Ajouter au panier</button>

        <!---------------les articles----------------->

        <label for="q">Quantité: </label>
        <select id="qt" name="q">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
    </div>

    </figure>`

    element.insertAdjacentHTML('afterend', vueArticle);
}

function $_GET(param) {
    let lets = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            lets[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return lets[param] ? lets[param] : null;
    }
    return lets;
}



