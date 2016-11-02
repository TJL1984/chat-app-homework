(function () {
        'use strict';

        // console.log('ready');

        window.chat.listenForMessages(function messageHandler(data) { });
        //     var userName =
        //     $.listenForMessages

        $.ajax({
            url: '/login',
            data:'JSON.stringify'({
                    userName: $('.userName').val()
            }),
            headers: {
                    'Content-Type': 'application/JSON',
            }
        })


        $.login
                .on('submit', function userName(event){

        })

        .done(function successHandler(data){
                console.log('it works!', data);
        })
        .fail(function failHandler(xhr){
                console.log('no soup', xhr);
        })




})();
