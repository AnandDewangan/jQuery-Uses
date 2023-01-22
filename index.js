$(document).ready(function () {
    $('#show').click(function () {
        $('#box1').show(1500);
        $('#box2').show(1000);
        $('#box3').show(500);
    })
    $('#hide').click(function () {
        $('#box1').hide(500);
        $('#box2').hide(1000);
        $('#box3').hide(1500);
    })
    $('.toggle').click(function () {
        $('.container').toggle(1000);
    })
    $('.fade').click(function () {
        $('#box1').fadeTo('500', 0.6);
        $('#box2').fadeTo('1000', 0.4);
        $('#box3').fadeTo('1500', 0.2);
    })
    $('.fade_remove').click(function () {
        $('#box1').fadeTo('500', 1);
        $('#box2').fadeTo('1000', 1);
        $('#box3').fadeTo('1500', 1);
    })
    $('.slideDown').click(function(){
        $('.slideText').slideDown(1000);
    })
    $('.slideUp').click(function(){
        $('.slideText').slideUp(1000);
    })
})

const x = document.getElementById('demo');
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }catch(e){
        x.innerHTML = e.message;
    }
}
function showPosition(position){
    x.innerHTML = "Latitude : "+position.coords.latitude +'<br> Longitude : '+ position.coords.longitude;
}

