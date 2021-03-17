var text = document.getElementById('text1')
var i = 0;

function postFunction()
{
    comment = text.value;

    if( i == 0 ){
        document.getElementById('topic1').innerHTML = comment;
        document.getElementById('text1').value = '';
        i++
    }

    else if( i == 1 ){
        document.getElementById('comment1').innerHTML = comment;
        document.getElementById('text1').value = '';
        i++
    }

    else if( i == 2 ){
        document.getElementById('comment2').innerHTML = comment;
        document.getElementById('text1').value = '';
        i++
    }
}

function clearFunction(){
    document.getElementById('topic1').innerHTML='';
    document.getElementById('comment1').innerHTML='';
    document.getElementById('comment2').innerHTML='';
    document.getElementById('text1').value='';
    i = 0;
}

