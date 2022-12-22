let videosList = []
let currentIndex
function addVideo(){
    let link = document.querySelector(".linkVideo").value
    let title = document.querySelector(".titleVideo").value
    videosList.push({
        manzil: link,
        sarlavha:title
    })

    document.querySelector(".titleVideo").value = ""
    document.querySelector(".linkVideo").value = ""
    reRender(videosList)
}

function reRender(videosList) { 
    let bascet = document.querySelector(".bascet")
    bascet.innerHTML = ""

    videosList.map((item, index) => {
        let video = document.createElement("iframe")
        video.src = item.manzil
        // video.alt = item.sarlavha
        video.style.width = "150px"

        let title = document.createElement("p")
        title.innerText = item.sarlavha        
        let delButton = document.createElement("button")
        delButton.innerText = "O'chirish"
        delButton.setAttribute("onclick", `deleteVideo(${index})`)

        let editVideo = document.createElement("button")
        editVideo.innerText = "Tahrirlash"
        editVideo.setAttribute("onclick", `editVideo(${index})`)

        let card = document.createElement("div")
        

        card.appendChild(video)
        card.appendChild(title)
        card.appendChild(delButton)
        card.appendChild(editVideo)

        bascet.appendChild(card)
    })
}


function deleteVideo(index) { 
    videosList.splice(index, 1)

    reRender(videosList)
 }

function editVideo(index) { 
    currentIndex = index
    document.querySelector(".titleVideo").value = videosList[index].sarlavha
    document.querySelector(".linkVideo").value = videosList[index].manzil
 }


 function editCurrentVideo() {
    let title = document.querySelector(".titleVideo").value
    let link = document.querySelector(".linkVideo").value
    videosList[currentIndex].sarlavha = title
    videosList[currentIndex].manzil = link
    document.querySelector(".title").value = ""
    document.querySelector(".linkVideo").value=""
    reRender(videosList)
 }

//  https://www.youtube.com/embed/Pp3jqtin5-s

// https://www.youtube.com/embed/eZfkITvTtkQ 

// https://www.youtube.com/embed/lhzAfxqnTys
