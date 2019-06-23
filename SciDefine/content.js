var elements = document.getElementsByTagName("p");
var dict = {"GASPs": "GPCR-associated&nbsp;sorting&nbsp;proteins", 
"GPCRs": "G&nbsp;protein-coupled&nbsp;receptors", 
"C-tail": "carboxyl-terminal&nbsp;intracellular&nbsp;tail", 
"GASP-1": "GPCR-associated&nbsp;sorting&nbsp;protein&nbsp;1", 
"DOR": "d-opioid&nbsp;receptor", 
"AA": "amino&nbsp;acids",
"SPR": "surface&nbsp;plasmon&nbsp;resonance",
"BCA": "bicinchoninic&nbsp;acid",
"RU": "Resonance&nbsp;Units",
"TGFﬂ": "transforming&nbsp;growth&nbsp;factor&nbsp;ﬂ&nbsp;receptor",
"CALCR": "calcitonin&nbsp;receptor", 
"TXA2": "thromboxane&nbsp;A2&nbsp;receptor",
"FZ4": "frizzled&nbsp;4&nbsp;receptor", 
"CNR2": "cannabinoid&nbsp;receptor&nbsp;type 2"
};     

for (var i=0; i<elements.length; i++) {
    for (var key in dict) {
        if (elements[i].innerHTML.includes(key)) {
            var words = elements[i].innerHTML.split(" ");    // split text content, find index, add to that word only
            for (var k=0; k<words.length; k++) {
                if (words[k].includes(key)) {
                    words[k] = "<span class='abbrev' rel='tooltip' title="+`${dict[key]}`+">" + words[k] + "</span>"
                }
            }
            updatedElement = words.join(" ");
            elements[i].innerHTML = updatedElement;
        }
    }
}

$( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;
 
    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );
 
        if( !tip || tip == '' )
            return false;
 
        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );
 
        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );
 
            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;
 
            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );
 
            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );
 
            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );
 
            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };
 
        init_tooltip();
        $( window ).resize( init_tooltip );
 
        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });
 
            target.attr( 'title', tip );
        };
 
        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});