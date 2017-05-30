document.getElementById('grid').addEventListener('click', function (e) {
  // only remove image
  if (e.target.tagName === 'IMG') {
    // if there's more than 1
    var qty = this.querySelectorAll('li').length

    if (qty > 1) {
      // var for target to be removed
      var removeTarget = e.target.parentNode
      removeTarget.parentNode.removeChild(removeTarget)
      if (qty === 2) {
        var photoLi = this.querySelectorAll('#grid img')
        document.querySelector('#title').innerHTML = `<p>You selected:</p><h2>${photoLi[0].alt}</h2>`

        document.querySelector('#details').innerHTML = `<p>
        Full size image: <a href="${photoLi[0].src}" title="${photoLi[0].alt}" target="_blank">${photoLi[0].attributes.src.nodeValue}</a><br>
        Original Height: ${photoLi[0].naturalHeight}px<br>
        Original Width: ${photoLi[0].naturalWidth}px<br><br>
        This page was last Modified on: ${photoLi[0].ownerDocument.lastModified}</p>`
        document.querySelector('#explain').style.display = 'none'
      }
    }
  }
}, false)
