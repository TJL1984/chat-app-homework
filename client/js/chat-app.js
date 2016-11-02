(function () {
        'use strict';

        // console.log('ready');

        window.chat.listenForMessages(function messageHandler(data) {
                console.log('message received', data);
                // TODO: add the new message to the UI
        });
        //     var userName =
        //     $.listenForMessages

        $('.login')
                .on('submit', function username(event){
                        console.log("Clicked Submit", event);
                        event.preventDefault();
                        $.ajax({
                                url: '/login',
                                method: 'POST',
                                data: JSON.stringify({
                                username: $('.username').val()
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                            }
                        })
                        .done(function finished(data){
                                console.log('logged in!', data);
                                // TODO: hold onto the token from inside the data object!
                        })
                })



                // TODO: use the token and message from the form to send a message to the server
                // once the message form is submitted


        $('.chat')
                .on('send-message', function messenger(event){
                        console.log("", event)
                        event.preventDefault();
                        $.ajax({
                                url: 'sendmessage',
                                method: 'POST',
                                data: JSON.stringify({
                                message: $('.message').val()
                                }),
                                headers: {
                                        Authorization: token,
                                        'Content-Type': 'application/json',
                                }
                        })
                })






                // .done(function successHandler(data){
                //         console.log('it works!', data);
                // })
                // .fail(function failHandler(xhr){
                //         console.log('no soup', xhr);
                // })




})();
