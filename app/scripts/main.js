console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$( document ).ready(function() {
    var heights = $("container-fluid").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $("container-fluid").height(maxHeight);
});
