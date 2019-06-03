    var per = 0;
    var timer;

    timer = setInterval (function () {
        $('.bar').css('width',per + '%');
        per += 1;
        if(per > 100){
            $('.pageLoading').addClass('complete');
            setTimeout(function () {
                $('.monsterText').html('<h2>季青媛</h2>'+'<h3>弱智</h3>')
            }, 2000)
            
            setInterval(timer);
        }
    },30) 

    