import { createDomElement } from "./tools.js"

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche les tags 
//---------------------------------------

export const createTag = (tagArray) => {

    const navTagsPhotograph = document.querySelector(".navTags-photograph")

    // Boucle de récpération et de création des l'élements tag 
    for (let t = 0; t < tagArray.length; t++) {

        let tag = createDomElement("tag", "a")
        tag.id = "#" + tagArray[t]
        tag.setAttribute("href", "#")
        tag.ariaLabel = ("Tag " + tagArray[t])
        tag.innerHTML += "#" + tagArray[t]

        navTagsPhotograph.append(tag)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche le header 
//----------------------------------------
export const createTagList = (obj) => {
    // Selection de la balise Hml avec sa classe
    const headerNavTags = document.querySelector(".navTags")

    // on récupère tous les tags existant
    const allTags = [];
    obj.photographers.forEach(photographer => {
        photographer.tags.forEach(tag => {
            allTags.push(tag)
        });
    });

    // on filtre les tags
    const navTagArray = allTags.filter(function(item, pos) {
        return allTags.indexOf(item) == pos;
    })

    // Boucle de récupération et de création des l'élements nav-tag 
    for (let n = 0; n < navTagArray.length; n++) {
        const headerLink = createDomElement("nav-tag", "a")
        headerLink.id = navTagArray[n]
        headerLink.setAttribute("href", "#")
        headerLink.ariaLabel = ("Tag " + navTagArray[n])
        headerLink.innerHTML += "#" + navTagArray[n]
        headerNavTags.append(headerLink)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Quand on clic sur les tags ça filtre les cards en questions
//------------------------------------------------------------
export const mainTagHandler = () => {
    const tags = document.querySelectorAll(".header .nav-tag")
    const cards = document.querySelectorAll(".containerCard")
    let askedTag = ''

    // a chaque tags on écoute le clic et on récupère l'ID
    tags.forEach(tag => {

        tag.addEventListener("click", () => {
            if (tag.classList.contains('selectedTag')) {
                tag.classList.remove("selectedTag")

                askedTag = "All"

            } else {
                const selectedTag = document.querySelector(".selectedTag")

                if (selectedTag) {
                    selectedTag.classList.remove('selectedTag')
                }
                tag.classList.add("selectedTag")

                askedTag = tag.id
            }

            if (askedTag == "All") {
                cards.forEach(card => {
                    card.style.display = 'block'
                })
            } else {
                //Gestion de l'affichage des cards
                cards.forEach(card => {
                    //Pour chaques cards 
                    //on récupère tout les tags 
                    const cardTags = card.querySelectorAll(".tag")

                    let listTags = []
                        //On va insérer dans listTags tout les tags de la cards
                    cardTags.forEach(tag => { listTags.push(tag.id) })
                        //indexOf permet de trouver quelque chose dans un tableau
                        //si il le trouve il renvoit son index (la position dans le tableau)
                        // sinon il renvoit -1
                    if (listTags.indexOf(askedTag) == -1) {
                        card.style.display = "none"
                    } else {
                        card.style.display = "block"
                    }
                });
            }
        })
    });
}


export const secondaryTagHandler = () => {
    const tags = document.querySelectorAll(".tag")
    const cards = document.querySelectorAll(".containerCard")
    let askedTag = ''

    // a chaque tags on écoute le clic et on récupère l'ID
    tags.forEach(tag => {

        tag.addEventListener("click", () => {
            askedTag = tag.ariaLabel.split(' ')[1]

            const selectedTag = document.querySelector(".selectedTag")
            if (selectedTag) {
                selectedTag.classList.remove('selectedTag')
            }
            const mainTag = document.querySelector('nav a#' + askedTag)
            mainTag.classList.add('selectedTag')

            //Gestion de l'affichage des cards
            cards.forEach(card => {
                //Pour chaques cards 
                //on récupère tout les tags 
                const cardTags = card.querySelectorAll(".tag")

                let listTags = []
                    //On va insérer dans listTags tout les tags de la cards
                cardTags.forEach(tag => { listTags.push(tag.id) })
                    //indexOf permet de trouver quelque chose dans un tableau
                    //si il le trouve il renvoit son index (la position dans le tableau)
                    // sinon il renvoit -1
                if (listTags.indexOf(askedTag) == -1) {
                    card.style.display = "none"
                } else {
                    card.style.display = "block"
                }
            });
        })
    });
}