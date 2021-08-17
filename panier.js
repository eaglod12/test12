//const e = require("express");

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

    // Formulaire de Commande

    const afficherFormulaireHtml = () => {
        // Sléction de l'élément du DOM pour la position du formulaire
        const structureFormulaire = document.querySelector("#formulaire");
        const formulaireHtml = `
            <div id="formulaire-commande">
                <h2>Valider la commande en remplissant le formulaire</h2>
                <form method="post" action= "http://localhost:3000/api/cameras"  name="validation" >
                    <label for="nom">Nom :</label>
                    <input type="text" id ="lastName"  name="lastName" >
            
                    <label for="prénom">Prénom :</label>
                    <input type="text" id ="firstName" name="firstName" >
            
                    <label for="email">E-mail :</label>
                    <input type="text" id="email" name="email" >

                    <label for="adresse">Adresse :</label>
                    <input id ="adress" name="adress" maxlength = 50 ></input>

                    <label for="ville">Ville :</label>
                    <input type="text" id="city" name="city" >

                    <p style="color:red;" id="erreur"></p>
            
                    <button type="submit" id="envoyerCommande" class="btn-form" class="envoyer-commande">Valider votre commande</button>
                </form>
            </div>    
        `;
        structureFormulaire.insertAdjacentHTML("afterend", formulaireHtml);
    };

    //appel function formolaire

    afficherFormulaireHtml();








