console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$( document ).ready(function() {
    var heights = $(".well").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".well").height(maxHeight);
});
