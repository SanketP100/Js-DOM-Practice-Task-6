var h3 = document.querySelector('#card h3')
var progress = document.querySelector('#progress')
var progressBar = document.querySelector('#progressBar')
var h2 = document.querySelector('#card h2')
var btn = document.querySelector('#card button')


var count = 0

btn.addEventListener('click', () => {
    var downloadfun = setInterval(() => {
        if (count < 100) {
            count++
            h3.innerHTML = count + "%"
            h3.style.display = 'block'
            progressBar.style.display = 'block'
            progress.style.width = count + "%"
            btn.innerHTML = 'Downloding...'
            btn.style.opacity = '0.6'
        }

    }, 50)

    setTimeout(() => {
        btn.innerHTML = '😊'
        btn.style.padding = '.4vw .5vw '
        btn.style.backgroundColor = '#fff'
        h3.style.display = 'none'
        progressBar.style.display = 'none'
        btn.style.opacity = '1'
        h2.innerHTML = 'Congrats Downloaded This File...'
        clearInterval(downloadfun)
    }, 5000)

})