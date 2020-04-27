(function () {
    function marcarLinkComoSelecionado(hash) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[wm-link='${hash}']`)
        link.classList.add('selecionado')
    }

    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        console.log('url(1)', url)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                marcarLinkComoSelecionado(hash)
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        console.log('hash', location.hash)
        if (location.hash) {
            console.log('tem hash')
            navegarViaAjax(location.hash)
        } else {
            console.log('n tem hash')

            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => {
        navegarViaAjax(location.hash)
        console.log('hash mudou')
    }
    configurarLinks()
    navegacaoInicial()
})()