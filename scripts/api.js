$('document').on('ready', function () {
    $('#send').on('submit', function (e) {
        e.preventDefault();
        
        console.log(new FormData(this));

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            processData: false,

            success: function(res) {
                alert(res);
            }
        })

    })
})