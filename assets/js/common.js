// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    // Assemble the email address on the client to keep it out of the static HTML
    var emailLink = document.getElementById('email-link');
    if (emailLink) {
        var addr = emailLink.getAttribute('data-u') + '@' + emailLink.getAttribute('data-d');
        emailLink.setAttribute('href', 'mailto:' + addr);
        emailLink.querySelector('.email-text').textContent = addr;
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pause autoplaying cover videos for users who prefer reduced motion
    if (reducedMotion) {
        document.querySelectorAll('video[autoplay]').forEach(function (v) {
            v.removeAttribute('autoplay');
            v.pause();
        });
    }

    // Scroll reveal: fade cards in as they enter the viewport
    if (!reducedMotion && 'IntersectionObserver' in window) {
        var revealEls = document.querySelectorAll('.bg-white.shadow-sm, .publication-item > .row, .publication-mobile-item, .research-topic');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
        revealEls.forEach(function (el) {
            el.classList.add('reveal');
            io.observe(el);
        });
        // Stagger sibling rows inside each panel for a cascading entrance
        document.querySelectorAll('.bg-white.shadow-sm').forEach(function (panel) {
            var rows = panel.querySelectorAll('.publication-item > .row, .publication-mobile-item, .research-topic');
            rows.forEach(function (row, i) {
                row.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
            });
        });
    }
})
