function main(){
    var pervious = '';
    var current = 'home';

    switchPage();
    switchNav();

    document.querySelectorAll('.nav-link')
        .forEach(function(element) {
            element.onclick = function(event) {
                event.preventDefault();

                let to = event.target.getAttribute('href');
                push(to);
            };
        });
    
    console.log(document.querySelectorAll('.nav-item'));
    
    function push(to){
        pervious = current;
        current = to;

        switchPage();
        switchNav();
    }

    function switchPage(){
        let className = 'card--active';

        if(pervious){
            let perviousPage = document.querySelector('#' + pervious);
            // console.log(pervious);
            // console.log(perviousPage);
            perviousPage.classList.remove(className);
        }

        let page = document.querySelector('#' + current);
        // console.log(current);
        // console.log(page);
        page.classList.add(className);
        // console.log(page);

    }

    function switchNav(){
        let className = 'nav--active';

        if(pervious){
            let perviousNav = document.querySelector('[href="' + pervious + '"]');
            // console.log(pervious);
            // console.log(perviousNav);
            perviousNav.classList.remove(className);
        }

        let navItem = document.querySelector('[href="' + current + '"]');
        // console.log(navItem);
        navItem.classList.add(className);

    }
}

main();

// window.addEventListener("load", function(){
//     var skill = document.querySelector(".skill");
//     skill.classList.add('skill--test');
// })
    
// https://getbootstrap.com/docs/4.5/components/forms/#validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();