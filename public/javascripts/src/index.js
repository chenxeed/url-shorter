(function () {

  // Short URL Generator
  const urlInput = document.querySelector('#url')
  const submitButton = document.querySelector('#generate')
  const urlResult = document.querySelector('#generate-result')
  
  submitButton.addEventListener('click', async () => {

    const response = await fetch('/shorter/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: urlInput.value
      })
    })

    const shorter = await response.json()

    urlResult.value = shorter.short
  })

  // Short URL Reader
  const shortInput = document.querySelector('#short')
  const readButton = document.querySelector('#read')
  const readResult = document.querySelector('#read-result')
  
  readButton.addEventListener('click', async () => {

    const response = await fetch(`/shorter/read/${shortInput.value}`)

    const shorter = await response.json()

    readResult.value = shorter.url
  })

})()