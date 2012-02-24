/*  MODERNIZR
-------------------------------------------------------------------------- */





/*  VARS & FUNCS
-------------------------------------------------------------------------- */
var func = $('body').attr('id');

if (window[func] && typeof window[func] === 'function') {
    window[func]();
}

// var classes = $body.attr('class').split(' '),
//     num_classes = classes.length;
//
// for (var i = 0; i < num_classes; i++) {
//     var body_class = classes[i];
//
//     if (window[body_class] && typeof window[body_class] === 'function') {
//         window[body_class]();
//     }
// }




/*  HELPER FUNCTIONS
-------------------------------------------------------------------------- */
$('body').on('click', 'a[rel="external"]', function() {
    window.open($(this).attr('href'));
    return false;
});




/*  TEMP FUNCTIONS
-------------------------------------------------------------------------- */
$('body').on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});