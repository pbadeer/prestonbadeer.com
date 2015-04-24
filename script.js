$(document).ready(function(){
    'use strict'

    var currentQuote = 0;
    var quoteTime = 12000;
    var fadeTime = 2000;
    var citeDelay = 8000;
    var quotes = [
        'Perfection is achieved, not when there is nothing more<br>to add, but when there is nothing left to take away.<cite>Antoine De Saint-Exupery</cite>',
        'Simplicity is the ultimate sophistication.<cite>Leonardo da Vinci</cite>',
        'Innovation distinguishes between a leader and a follower.<cite>Steve Jobs</cite>',
        'One should aim not at being possible to understand,<br>but at being impossible to misunderstand.<cite>Quintilian</cite>',
        'Confusion and clutter are the failure of design,<br>not the attributes of information.<cite>Edward Tufte</cite>'
    ];

    var nextQuote = function() {
        if (currentQuote == quotes.length) {
            currentQuote = 0;
        }

        $('blockquote').fadeOut(fadeTime, function(){
            $(this).html(quotes[currentQuote]).find('cite').hide();
            
            $(this).fadeIn(fadeTime, function(){
                setTimeout(
                    function(c, fadeTime){
                        c.fadeIn(fadeTime);
                    }( $(this).find('cite'), fadeTime ),
                6000);
            });

            currentQuote += 1;
        });
    };

    var repeat = window.setInterval(nextQuote, quoteTime + fadeTime);
});
