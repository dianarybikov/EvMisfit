const baseUrl = "http://localhost:3000/products"
const ul = document.querySelector('#product-list')
fetch(baseUrl)
  .then(response => response.json())
  .then(product => product.forEach(product => {
    let li = document.createElement('li')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p = document.createElement('p')

    h2.textContent = product.name
    img.src = product.image
    p.textContent = product.description

    // li.addEventListener('click', () => {
    //   window.location.replace(`/show.html?id=${game.id}`)
    // })

    li.append(h2, img, p)
    ul.appendChild(li)
  }))