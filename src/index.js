// write your code here
let menu =document.getElementById('ramen-menu')
let img = document.createElement('img')


function fetchRamen() {
    fetch (`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(data => {
        console.log (data); 
        renderRamens(data)})
}

fetchRamen()



let ramenImage = document.querySelector('.detail-image')
let ramenName = document.querySelector('.name')
let ramenRestaurant = document.querySelector('.restaurant')

let ramenRating = document.querySelector('#rating-display')
let ramenComment = document.querySelector('#comment-display')

const renderRamens = (data) => {
    console.log(data)
    for (const item of data) {
       // console.log(item)
        let image = document.createElement('img')
        image.src = item.image
        menu.append(image)

        image.addEventListener('click', function () {
            ramenImage.src = item.image
            ramenName.textContent = `${item.name}`
            ramenRestaurant.textContent = `${item.restaurant}`
            ramenRating.textContent = `${item.rating}`
            ramenComment.textContent = `${item.comment}`
        })
    }
}




// let ramenFrom= document.getElementById('new-ramen')
// let newRamenName= document.getElementById('new-name')
// let newRamenRestaurant= document.getElementById('new-restaurant')
// let newRamenImage = document.getElementById('new-image')
// let newRamenRating = document.getElementById('new-rating')
// let newRamenComment = document.getElementById('new-comment')

