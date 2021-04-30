
/* ===============================================
    2. ITEM TABS
=============================================== */

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})


/* ===============================================
    3. SHOP CAROUSEL
=============================================== */

$('.shop-carousel .owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    stagePadding: 0,
    loop: true,
    dots: true,
    margin: 0,
    nav: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.shop-carousel .custom-nav',
    responsive: {
        0: {
            items: 1
        }
    }
});

/* ===============================================
    3. PRODUCT CAROUSEL 
=============================================== */

$('.products-carousel .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop: true,
    dots: true,
    margin: 0,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.products-carousel .custom-nav',
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

/* ===============================================
    4. SHOP CAROUSEL ALT 2 
=============================================== */
$('.products-carousel-2 .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop: true,
    dots: true,
    margin: 0,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.products-carousel-2 .custom-nav',
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});