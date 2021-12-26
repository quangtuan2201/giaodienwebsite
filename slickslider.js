$(document).ready(function () {
    $('.favorite-places-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left favorite-arrow-left hide-on-mobile" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right favorite-arrow-right hide-on-mobile" aria-hidden="true"></i></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
            },
          }
          ],
      });

      

      $('.suggestions-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left suggestion-arrow-left hide-on-mobile" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right suggestion-arrow-right hide-on-mobile" aria-hidden="true"></i></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
            },
          }
          ],
      });

      $('.discovery-slider').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left discovery-arrow-left hide-on-mobile" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right discovery-arrow-right hide-on-mobile" aria-hidden="true"></i></div>',

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          }
          ],
      });


      $('.promotion-slider').slick({
        mobileFisrt: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left promotion-arrow-left hide-on-mobile" aria-hidden="true"></i></div>',
              nextArrow: '<div class="slick-next"><i class="fa fa-angle-right promotion-arrow-right hide-on-mobile" aria-hidden="true"></i></div>'
            }
          },
        ]
      });

      //$('.guidelines-slider').slick({
      //  responsive: [
      //    {
      //      breakpoint: 1200,
      //      settings: 'unslick'
      //    },
      //    {
      //      breakpoint: 1022,
      //      settings: {
      //        slidesToShow: 2,
      //        slidesToScroll: 1,
      //        infinite: true,
      //        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left promotion-arrow-left" aria-hidden="true"></i></div>',
      //        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right promotion-arrow-right" aria-hidden="true"></i></div>'
      //      }
      //    },
      //  ]
        
      //});
});