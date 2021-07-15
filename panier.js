//setCookie
/*function qui permet d'enregistrer les données dans un cookie*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    // règle le pb des caractères interdits
    if ('btoa' in window) {
        cvalue = btoa(cvalue);
    }

    document.cookie = cname + "=" + cvalue + "; " + expires + ';path=/';
}

// function saveCart
/*On ne peut stocker que des chaines de caractères dans les cookies, 
on sérialise donc notre tableau cartArticles avec JSON.stringify avant de l’enregistrer*/

function saveCart(inCartItemsNum, cartArticles) {
    setCookie('inCartItemsNum', inCartItemsNum, 5);
    setCookie('cartArticles', JSON.stringify(cartArticles), 5);
}

/*getCookie
  fonction pour récupérer les cookies
  Cette fonction prend en paramètre le nom du cookie et retourne sa valeur. 
  Si btoa est supporté, cela veut dire qu’on a enregistré du base64 dans le cookie, 
  on le retransforme alors en texte avec la fonction atob, sinon, 
  on récupère simplement le texte non encodé.*/

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c[0] == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) != -1) {
            if ('btoa' in window) return atob(c.substring(name.length, c.length));
        }
        else return c.substring(name.length, c.length);
    }
}

return false;
}



