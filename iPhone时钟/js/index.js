/* var oLi = document.getElementsByTagName('li');
var oSpan = document.getElementsByTagName('span'); */
var oUl = document.getElementsByTagName('ul')[0];
var oSecond = document.getElementsByClassName('second')[0];
var oMinute = document.getElementsByClassName('minute')[0];
var oHour = document.getElementsByClassName('hour')[0];
var leng = 12;

function inist () {
    var str = '';
    for (var i = 1;i <= 12; i++) {
        str += `<li class="num" style = transform:rotate(`+i*30+`deg)>
        <span style = transform:rotate(`+i*(-30)+`deg)>`+i+`</span></li>`;      

        /* oLi[i-1].style.transform = 'rotate('+i*30+'deg)';
        oSpan[i-1].style.transform = 'rotate('+i*(-30)+'deg)'; */
    }
    oUl.innerHTML = str;
    setTime();
} 
inist();
function setTime () {
    var date = new Date () ;

    var sec = date.getSeconds();
    var mSec = date.getMilliseconds();
    var fillSec = sec + mSec/1000;
    oSecond.style.transform = 'rotate('+fillSec*6+'deg)';

    var min = date.getMinutes();
    var fillMin = min + fillSec/60;
    oMinute.style.transform = 'rotate('+fillMin*6+'deg)';

    var hour = date.getHours();
    var fillHour = hour + fillMin/60;
    oHour.style.transform = 'rotate('+fillHour*30+'deg)';

    var timer = setTimeout(setTime,16.7);
}