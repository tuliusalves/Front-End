$('.owl-carousel').owlCarousel({
    loop:true,//efeito de loop
    margin:10,//margin entre as imagens
    nav:true,//botão com setas de navegação
    responsive:{//Responsividade, aquilo que se adapta ao tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{/*Quando a tela tiver mais de 1000 px ou mais, será colocado 5 
            elementos na tela. */
            items:5
        }
    }
})