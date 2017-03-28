window.onload=function () {
    function $(element) {
        return document.querySelector(element);
    }
    var leftin=$('.ctrl__btn--left-in');
    var leftout=$('.ctrl__btn--left-out');
    var rightin=$('.ctrl__btn--right-in');
    var rightout=$('.ctrl__btn--right-out');
    var result=$('.result');

    function btn() {
        var input=$('.ctrl__input');
        var list=document.createElement('li');
        list.innerHTML=input.value;
        switch (event.target){
            case leftin:
                result.insertBefore(list, result.firstElementChild);
                break;
            case leftout:
                alert(result.removeChild(result.firstElementChild).innerText);
                break;
            case rightin:
                result.appendChild(list);
                break;
            case rightout:
                alert(result.removeChild(result.lastElementChild).innerText);
                break;
        }
        input.value=null;
    }

    leftin.addEventListener('click', btn);
    leftout.addEventListener('click', btn);
    rightin.addEventListener('click', btn);
    rightout.addEventListener('click', btn);

    result.addEventListener('click', function () {
        result.removeChild(event.target);
    })
};