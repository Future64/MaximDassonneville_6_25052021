/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          TOUTES LES FONCTIONS DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// async = ON NE SAIT JAMAIS QUAND CA SE TERMINE !
export const initCache = async() => {
    //quand on arrive sur le site, on check le localStorage !
    let data = localStorage.getItem('data') // String

    // si on a rien trouvé dans le localStorage
    if (data === null) {
        fetch('data/bigData.json')
            // demander de retourner l'objet au format Json
            .then((response) => {
                return response.json()
            })
            // Fonction de récupération de d'utilisation des informations du Json
            .then((obj) => {
                // on a les data et on les mets dans le LocalStorage
                localStorage.setItem('data', JSON.stringify(obj))
                return data = JSON.parse(obj) // STRING => OBJ
            })
    } else {
        data = JSON.parse(data) // STRING => OBJ
    }
    return data
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche le header 
export const createHeader = (obj) => {
    // Selection de la balise Hml avec sa classe
    const headerNavTags = document.querySelector(".navTags")
    const navTagArray = [obj.photographers[0].tags[0], obj.photographers[2].tags[0], obj.photographers[2].tags[1], obj.photographers[1].tags[1], obj.photographers[0].tags[2], obj.photographers[1].tags[0], obj.photographers[0].tags[3], obj.photographers[0].tags[1]]

    // Boucle de récpération et de création des l'élements nav-tag 
    for (let n = 0; n < navTagArray.length; n++) {
        const headerLink = createDomElement("nav-tag", "a")
        headerLink.id = "#" + navTagArray[n]
        headerLink.setAttribute("href", "#")
        headerLink.ariaLabel = ("Tag " + navTagArray[n])
        headerLink.innerHTML += "#" + navTagArray[n]
        headerNavTags.append(headerLink)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer les coeurs pour incrémenter les likes
export const displayHeart = (firstElt, secondtElt, mediaNbLike, nbLikes, likeAndPriceLike) => {
    if (firstElt.style.display == 'block') {
        closeWindow(firstElt)
        launch(secondtElt)
        nbLikes += 1
        mediaNbLike.innerHTML = nbLikes
        likeAndPriceLike.innerHTML = nbLikes * 10
    } else {
        closeWindow(secondtElt)
        launch(firstElt)
        mediaNbLike.innerHTML = nbLikes
        likeAndPriceLike.innerHTML = nbLikes * 10
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet de fermer une fenêtre
export const closeWindow = (elt) => {
    elt.style.display = 'none'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const launch = (elt) => {
    elt.style.display = 'block'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fontion qui replie et déplie et affiche les fleches down et up si le dropdown est ouvert ou fermé
export const displayDropdown = (dropdownContent, spanArrowUp, spanArrowDown) => {
    if (dropdownContent.style.display == 'none') {
        launch(dropdownContent)
        launch(spanArrowUp)
        closeWindow(spanArrowDown)
    } else {
        closeWindow(dropdownContent)
        closeWindow(spanArrowUp)
        launch(spanArrowDown)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche les tags 
export const createTag = (tagArray) => {

    const navTagsPhotograph = document.querySelector(".navTags-photograph")

    // Boucle de récpération et de création des l'élements tag 
    for (let t = 0; t < tagArray.length; t++) {

        let tag = createDomElement("nav-tag", "a")
        tag.id = "#" + tagArray[t]
        tag.setAttribute("href", "#")
        tag.ariaLabel = ("Tag " + tagArray[t])
        tag.innerHTML += "#" + tagArray[t]

        navTagsPhotograph.append(tag)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction de création et d'affichage du header de la page photographe
export const createHeaderPH = (data, urlImage) => {

    const photoProfilPhotograh = document.querySelector(".photoProfil-photograph")
    const nameHeaderPhotograph = document.querySelector(".name--header-card-photograph")
    const locationBodyCardPhotograph = document.querySelector(".location--body-card-photograph")
    const citationBodyCardPhotograph = document.querySelector(".citation")

    photoProfilPhotograh.innerHTML = urlImage
    nameHeaderPhotograph.innerHTML = data.name
    locationBodyCardPhotograph.innerHTML = data.city + ", " + data.country
    citationBodyCardPhotograph.innerHTML = data.tagline

    // Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.portrait

    // Assigne la variable url pour les chemins des photos de profils
    photoProfilPhotograh.style.backgroundImage = `url(${urlPortrait})`
    photoProfilPhotograh.style.backgroundSize = "cover"
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui déclanche à l'écoute du click sur le dropdow la fonction "displayDropdown"
export const createSortZone = () => {

    const dropdownBtn = document.querySelector(".dropdownBtn")
    const dropdownContent = document.querySelector(".dropdownContent")
    const spanArrowDown = document.querySelector(".fa-chevron-down")
    const spanArrowUp = document.querySelector(".fa-chevron-up")

    // Events
    dropdownBtn.addEventListener("click", () => {
        displayDropdown(dropdownContent, spanArrowUp, spanArrowDown)
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche le formulaire
export const createForm = (mainPhotograph) => {

    const contactMe = document.querySelector(".contactMe")

    const formPage = createDomElement("formPage", "div")
    const formContainer = createDomElement("formContainer", "div")
    const form = createDomElement("form", "form")
    const formHeader = createDomElement("formHeader", "div")
    const formH1 = createDomElement("formH1", "h1")
    const formClose = createDomElement("formClose", "div")
    const formCloseIcone = createDomElement("fas", "i")
    const formFirstBox = createDomElement("formFirstBox", "div")
    const formFirstLabel = createDomElement("formFirstLabel", "label")
    const formFirstInput = createDomElement("formFirstInput", "input")
    const formLastBox = createDomElement("formLastBox", "div")
    const formLastLabel = createDomElement("formLastLabel", "label")
    const formLastInput = createDomElement("formLastInput", "input")
    const formEmailBox = createDomElement("formEmailBox", "div")
    const formEmailLabel = createDomElement("formEmailLabel", "label")
    const formEmailInput = createDomElement("formEmailInput", "input")
    const formMsgBox = createDomElement("formEmailBox", "div")
    const formMsgLabel = createDomElement("formEmailLabel", "label")
    const formMsgInput = createDomElement("formMsgInput", "textarea")
    const formValidBtn = createDomElement("formValidBtn", "button")

    // Ajout des attributs
    formFirstLabel.setAttribute("for", "formFirstInput")
    formLastLabel.setAttribute("for", "formLastInput")
    formEmailLabel.setAttribute("for", "formEmailInput")
    formMsgLabel.setAttribute("for", "formMsgInput")
    formFirstInput.setAttribute("placeholder", "Prénom")
    formFirstInput.setAttribute("id", "formFirstInput")
    formLastInput.setAttribute("placeholder", "Nom")
    formLastInput.setAttribute("id", "formLastInput")
    formEmailInput.setAttribute("placeholder", "Email")
    formEmailInput.setAttribute("id", "formEmailInput")
    formMsgInput.setAttribute("placeholder", "Votre message...")
    formMsgInput.setAttribute("id", "formMsgInput")

    formCloseIcone.classList.add("fa-times");

    formFirstLabel.innerHTML = "Prénom"
    formLastLabel.innerHTML = "Nom"
    formEmailLabel.innerHTML = "Email"
    formMsgLabel.innerHTML = "Votre message"
    formValidBtn.innerHTML = "Envoyer"

    // Attacher les DomElements entre eux
    mainPhotograph.append(formPage)
    formPage.append(formContainer)
    formContainer.append(form)
    form.append(formHeader)
    form.append(formFirstBox)
    form.append(formLastBox)
    form.append(formEmailBox)
    form.append(formMsgBox)
    form.append(formValidBtn)
    formFirstBox.append(formFirstLabel)
    formLastBox.append(formLastLabel)
    formEmailBox.append(formEmailLabel)
    formMsgBox.append(formMsgLabel)
    formFirstBox.append(formFirstInput)
    formLastBox.append(formLastInput)
    formEmailBox.append(formEmailInput)
    formMsgBox.append(formMsgInput)
    formHeader.append(formH1)
    formHeader.append(formClose)
    formClose.append(formCloseIcone)


    // Events -------------------------------------
    contactMe.addEventListener("click", () => {
        launch(formPage)
    })

    formClose.addEventListener("click", () => {
        closeWindow(formPage)
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche les médias de la page photographe
export const createMedia = (dataMedia, urlImage, urlVideo, mainPhotograph) => {

    // Creation des DomElements et des classes pour les DomElements
    const mediaZoneContainer = document.querySelector(".mediaZoneContainer")
    const likeAndPriceLike = document.querySelector(".likeAndPriceLike")
    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaVideo = createDomElement("mediaImage", "video")
    const mediaInfo = createDomElement("mediaInfo", "div")
    const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("far", "i")
    const mediaHeart2 = createDomElement("fas", "i")

    let nbLikes = parseInt(dataMedia.likes)
    console.log(dataMedia.likes.length)

    // Ajout d'atributs
    mediaImage.setAttribute("src", urlImage)
    mediaVideo.setAttribute("src", urlVideo)
    mediaVideo.setAttribute("type", "video/mp4")
    mediaVideo.controls = true

    // Ajout de class
    mediaHeart.classList.add("fa-heart");
    mediaHeart2.classList.add("fa-heart");

    // Affichage par defaut
    mediaHeart.style.display = 'block'
    mediaHeart2.style.display = 'none'

    // Event
    mediaLike.addEventListener("click", () => {
        displayHeart(mediaHeart, mediaHeart2, mediaNbLike, nbLikes, likeAndPriceLike)
    })

    // Afficher les informations dans les DomElements
    mediaTitle.innerHTML = dataMedia.title
    mediaPrice.innerHTML = dataMedia.price + " €"
    mediaNbLike.innerHTML = nbLikes
    likeAndPriceLike.innerHTML = nbLikes * 10



    // Attacher les DomElements entre eux
    mediaZoneContainer.append(mediaZone)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)
    mediaLink.append(mediaImage)

    if (dataMedia.video !== undefined) {
        mediaImage.replaceWith(mediaVideo)
    }

    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaPrice)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart, mediaHeart2)

    createLightbox(mainPhotograph, urlImage, mediaLink)
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche la lightbox dans la page photographe
export const createLightbox = (mainPhotograph, urlImage, mediaLink) => {

    const btnLightbox = document.querySelectorAll('.btnLightbox');

    const lightboxPage = createDomElement("lightboxPage", "div")
    const lightboxContainer = createDomElement("lightboxContainer", "div")
    const lightboxImg = createDomElement("lightboxImg", "img")
    const lightboxPreviousBtn = createDomElement("fas", "i")
    const lightboxNextBtn = createDomElement("fas", "i")
    const lightboxClose = createDomElement("fas", "i")
    const lightboxTitle = createDomElement("lightboxTitle", "div")

    lightboxImg.setAttribute("src", urlImage)

    lightboxPreviousBtn.classList.add("fa-chevron-left")
    lightboxPreviousBtn.classList.add("btnLightbox")
    lightboxNextBtn.classList.add("fa-chevron-right")
    lightboxNextBtn.classList.add("btnLightbox")
    lightboxClose.classList.add("fa-times");
    lightboxClose.classList.add("lightboxClose");

    lightboxPage.style.display = "none"


    // Events -------------------------------------
    mediaLink.addEventListener("click", () => {
        launch(lightboxPage)
    })

    lightboxClose.addEventListener("click", () => {
        closeWindow(lightboxPage)
    })


    // Attacher les éléments entre eux dans le Dom 
    mainPhotograph.append(lightboxPage)
    lightboxPage.append(lightboxContainer)
    lightboxContainer.append(lightboxPreviousBtn)
    lightboxContainer.append(lightboxImg)
    lightboxContainer.append(lightboxNextBtn)
    lightboxContainer.append(lightboxClose)
    lightboxContainer.append(lightboxTitle)
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui assigne les bon chemins relatif au medias puis déclanche createMedia
export const pathMediasPhotographer = (photographerID, dataMedia, urlVideo, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy, mainPhotograph) => {
    for (let j = 0; j < dataMedia.length; j++) {
        if (photographerID == 930) {
            urlVideo = pathEllie + dataMedia[j].video
            urlImage = pathEllie + dataMedia[j].image
        } else if (photographerID == 195) {
            urlVideo = pathMarcel + dataMedia[j].video
            urlImage = pathMarcel + dataMedia[j].image
        } else if (photographerID == 243) {
            urlVideo = pathMimi + dataMedia[j].video
            urlImage = pathMimi + dataMedia[j].image
        } else if (photographerID == 527) {
            urlVideo = pathNabeel + dataMedia[j].video
            urlImage = pathNabeel + dataMedia[j].image
        } else if (photographerID == 925) {
            urlVideo = pathRhode + dataMedia[j].video
            urlImage = pathRhode + dataMedia[j].image
        } else if (photographerID == 82) {
            urlVideo = pathTracy + dataMedia[j].video
            urlImage = pathTracy + dataMedia[j].image
        } else {
            console.log("Error medias !")
        }

        createMedia(dataMedia[j], urlImage, urlVideo, mainPhotograph)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/