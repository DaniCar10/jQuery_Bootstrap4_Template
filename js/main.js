/* ==========================================================================
   SMOOTH SCROLL
   ========================================================================== */
var scroll = new SmoothScroll('a[href*="#"]', {
// Selectors
ignore: '[data-scroll-ignore]',
header: null,

// Speed & Easing
speed: 1000,
offset: 0,
easing: 'easeInOutCubic',
customEasing: function (time) {},

// Callback API
before: function () {},
after: function () {}
});


/* ==========================================================================
   EFFECTS ON SCROLL
   ========================================================================== */

   //
   //
   // window.sr = ScrollReveal();
   //   sr.reveal('.show-down', {
   //     duration: 500,
   //     origin: 'top',
   //     distance: '50px'
   //   });
   //   sr.reveal('.show-up', {
   //     duration: 500,
   //     origin: 'bottom',
   //     distance: '50px'
   //   });
   //   sr.reveal('.show-right', {
   //     duration: 500,
   //     origin: 'right',
   //     distance: '300px'
   //   });
   //
   //   sr.reveal('.show-advance-1',   { delay: 100  });
   //   sr.reveal('.show-advance-2',   { delay: 200  });
   //   sr.reveal('.show-advance-3',   { delay: 300  });
   //   sr.reveal('.show-advance-4',   { delay: 100  });
   //   sr.reveal('.show-advance-5',   { delay: 200  });
   //   sr.reveal('.show-advance-6',   { delay: 300  });
   //
   //   sr.reveal('.show-left', {
   //     duration: 1000,
   //     origin: 'left',
   //     distance: '300px'
   //   });
   //   sr.reveal('.opacity', {
   //     duration: 1000,
   //     opacity: 0,
   //   });
   //   sr.reveal('.opacity-2', {
   //     duration: 1000,
   //     opacity: 0,
   //   });
   //   sr.reveal('.rotate', {
   //     duration: 1000,
   //     rotate: { x: 10, y: 10, z: 10 },
   //   });
   //   sr.reveal('.opacity-3', {
   //     duration: 1000,
   //     opacity: 0,
   //   });
   //   sr.reveal('.show-btn', {
   //     duration: 1000,
   //     delay: 1000,
   //     origin: 'bottom',
   //     distance: '50px'
   //   });

     /**
         * Want to disable delay on mobile devices? (uncomment the line below)
         */
        // if ( self.isMobile() && self.config.mobile ) elem.config.wait = 0

/* ==========================================================================
  MASK
  ========================================================================== */


     $(document).ready(function () {
         $('#date').mask('00/00/0000');
         $('#fone').mask('(00) 00000-0000');
         $('#CPF').mask('000.000.000-00');
         $('#place').mask('AAA 0000');

     });

/* ==========================================================================
             DATEPICKER E CIDADES
========================================================================== */

      $(document).ready(function(){
        $("#calendar").datepicker({
          changeMonth: true,
          changeYear: true,
          // mostrar mais anos no dropdown
          yearRange: "c-100:c+10"
        });
      });


      var city = [
                      "Florianópolis",
                      "Founde City",
                      "Flinstone City",
                      "São Francisco",
                      "São Leopoldo",
                      "São Petesburgo",
                      "Rio de Janeiro",
                      "Rwanda Capital",
                      "United Kingdom",
                      "United States",
                      "UCLA",
                      "Porto Alegre",
                      "Pittsburg",
                      "Pindamoiangaba",
                      "Piracicaba",
                      ];

            $(document).ready(function(){
              $("#city").autocomplete({source: function(request,response){
                var filterArray = $.map(city, function(element){
                  if (element.toUpperCase().indexOf(request.term.toUpperCase()) == 0) {
                    return element;
                  } else {
                    return null;
                  }
                });
              response(filterArray);
              }});
            });

/* ==========================================================================
        FAQ
========================================================================== */

           $(".question").click(function() {
           $(this).next().slideToggle();
           $(this).children().toggleClass("mouving");
         });



/* ==========================================================================
   CONTADOR
   ========================================================================== */

    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
