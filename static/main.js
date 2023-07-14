var conversation = [];

$(document).ready(function(){
    $('#echo-form').on('submit', function(e) {
        e.preventDefault();
        var message = $('#message-input').val();

        if(message.trim() === '') {
            return;
        }

        var chatBox = $('#chat-box');
        var userDiv = $('<div>').text(message).addClass('message user-message');
        chatBox.append(userDiv.hide().fadeIn(300));
        chatBox.scrollTop(chatBox[0].scrollHeight);
        conversation.push({"role": "user", "content": message});

        $('#message-input').val('');
        $('.submit-button').prop('disabled', true);

        var loadingDiv = $('<div>').text('...').addClass('message server-message');
        chatBox.append(loadingDiv.hide().fadeIn(300));
        chatBox.scrollTop(chatBox[0].scrollHeight);

        $.ajax({
            url: '/echo',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({message: message, conversation: conversation}),
            success: function(response) {
                loadingDiv.remove();
                var serverDiv = $('<div>').text(response.message).addClass('message server-message');
                chatBox.append(serverDiv.hide().fadeIn(300));
                conversation.push({"role": "assistant", "content": response.message});
                chatBox.scrollTop(chatBox[0].scrollHeight);
            },
            complete: function() {
                $('.submit-button').prop('disabled', false);
            }
        });
    });
});
