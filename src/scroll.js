window.onload = function () {

    let navigationScroll = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        console.log('Scrolled!')
        navigationScroll.setAttribute('class', 'background-nav')
    })

}