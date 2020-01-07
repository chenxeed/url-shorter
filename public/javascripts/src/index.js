(function () {

  // The fake domain for the short URL
  const shortDomain = 'https://chx.ly/'

  // Short URL Generator
  const urlInput = document.querySelector('#url')
  const submitButton = document.querySelector('#generate')
  const urlResult = document.querySelector('#generate-result')
  
  submitButton.addEventListener('click', async () => {

    let url = urlInput.value

    if (!validateUrl(url)) {
      alert('Wrong URL format!')
      return
    }

    if (url.indexOf('http') < 0) {
      url = `https://${url}`
    }

    const response = await fetch('/shorter/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url
      })
    })

    const shorter = await response.json()

    urlResult.value = shortDomain + shorter.short
  })

  // Browser simulator
  const shortInput = document.querySelector('#short')
  const browserIframe = document.querySelector('#browser')
  
  shortInput.addEventListener('change', async () => {

    const url = shortInput.value

    if (url && validateUrl(url)) {

      let targetUrl = url

      if (url.indexOf(shortDomain) === 0) {
        const shortId = url.substr(shortDomain.length)
        const response = await fetch(`/shorter/read/${shortId}`)
        const shorter = await response.json()
        if (shorter && shorter.url) {
          targetUrl = shorter.url
        } else {
          alert('Invalid Shorter URL')
        }
      }
      shortInput.value = targetUrl
      browserIframe.setAttribute('src', targetUrl)
    }

  })

  // inspired by https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  function validateUrl (url) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
  }

})()