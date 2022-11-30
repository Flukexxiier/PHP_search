function save_data() {
    var data = document.getElementsByClassName('form_content');
    var data = new FormData();

    for(var count =0; count < form_element.length; count++) {
        data.append(form_element[count].name, form_element[count].value);
    }
    document.getElementById('btnFetch').disabled = true;
    var ajax_request = new XMLHttpRequest();
    ajax_request.open('POST' , 'search.php');
    ajax_request.send(data);
    ajax_request.onreadystatechange = function() {
        if(ajax_request.readyState == 4 && ajax_request.status == 200) {
            document.getElementById('btnFetch').disabled = false;
            document.getElementById('formLoad').reset();
        }
    }
}

$('#btnFetch').click(function() {
    $.post($('#formLoad').attr('action'),
            $('#formLoad :input').serializeArray(),

            function(info) {});

    $('#formLoad').submit(function() {
        return false;
    });
});