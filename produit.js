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
       <a href="produit.html?id=`+ article._id + `" id="link-produit" class="link-produit"/>    
       <img class="teddy-img" src="`+ article.imageUrl + ` "width=""height="">
   <div class="info" id="info">        
       <figcaption class="name">`+ article.name + `</figcaption>
       <figcaption class="description">`+ article.description + `</figcaption>
       <figcaption class="price" id="price">` + article.price / 100 + ",00 €" + `</figcaption>
   </div>
   </figure>`
    element.insertAdjacentHTML('afterend', vueArticle);
}

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}



