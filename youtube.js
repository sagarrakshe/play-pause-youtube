var temp = true;
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var isActive = true;

function onBlur() {
    isActive = false;
    document.title = 'Not Active Window'
    if (temp){
        player.pauseVideo();
    }
};

function onFocus(){
    isActive = true;
    document.title = 'Active Window'
    if (temp){
        player.playVideo();
    }
};

var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'tEnsqpThaFg',
    });

    if (/*@cc_on!@*/false) { // check for Internet Explorer
        document.onfocusin = onFocus;
        document.onfocusout = onBlur;
    }
    else {
        window.onfocus = onFocus;
        window.onblur = onBlur;
    }

    document.getElementById('option').onclick = function(){    
        if (temp) {
            temp = false;
            
        } else {
            temp = true;
        }
    }
}
