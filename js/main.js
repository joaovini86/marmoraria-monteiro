const swiper = new Swiper('.hero-slider', {
    // Outras opções do Swiper
    loop: true, // Para que o slideshow seja contínuo
    autoplay: {
        delay: 5000, // Tempo em milissegundos entre os slides (5 segundos neste exemplo)
        disableOnInteraction: false, // Para que o autoplay não seja interrompido quando o usuário interagir com o slideshow
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});