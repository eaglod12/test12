

function Panier() {
    this.liste = [];
    this.ajouterArticle = function (produit, quantite, price) {
        let index = this.getArticle(produit);
        if (index == -1) this.liste.push(new LignePanier(produit, quantite, price));
        else this.liste[index].ajouterquantite(quantite);
    }
    this.getpricePanier = function () {
        let total = 0;
        for (let i = 0; i < this.liste.length; i++)
            total += this.liste[i].getpriceLigne();
            if (isNaN(total)) {
                return 0;
              }
            
                
        return total;
    }
    this.getArticle = function (produit) {
        for (let i = 0; i < this.liste.length; i++)
            if (produit == this.liste[i].getproduit()) return i;
        return -1;
    }
    this.supprimerArticle = function (produit) {
        let index = this.getArticle(produit);
        if (index > -1) this.liste.splice(index, 1);
    }
}

function LignePanier(produit, quantite, price) {
    this.produitArticle = produit;
    this.quantiteArticle = quantite;
    this.priceArticle = price;
    this.ajouterquantite = function (quantite) {
        this.quantiteArticle += quantite;
    }
    this.getpriceLigne = function () {
        let resultat = this.priceArticle * this.quantiteArticle;
        return resultat;
    }
    this.getproduit = function () {
        return this.produitArticle;
    }
}

/*----------------local storage-----------------*/


let panier = JSON.parse(localStorage.getItem('monpanier'));

console.log(panier['liste']);


/*------------------injection du html-----------------*/

function displayPanier(monPanier) {
    const element = document.getElementById("panier");

    let vueArticle = `
     
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>

`  
//element.insertAdjacentHTML('afterend', vueArticle);

}




