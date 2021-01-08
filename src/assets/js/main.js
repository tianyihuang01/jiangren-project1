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
            console.log(pervious);
            console.log(perviousPage);
            perviousPage.classList.remove(className);
        }

        let page = document.querySelector('#' + current);
        console.log(current);
        console.log(page);
        page.classList.add(className);
        console.log(page);

    }

    function switchNav(){
        let className = 'nav--active';

        if(pervious){
            let perviousNav = document.querySelector('[href="' + pervious + '"]');
            // console.log(pervious);
            console.log(perviousNav);
            perviousNav.classList.remove(className);
        }

        let navItem = document.querySelector('[href="' + current + '"]');
        console.log(navItem);
        navItem.classList.add(className);

    }
}

main();

// window.addEventListener("load", function(){
//     var skill = document.querySelector(".skill");
//     skill.classList.add('skill--test');
// })
    
    
