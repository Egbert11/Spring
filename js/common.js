/**
 * Created by NetEase on 14-3-4.
 */
String.prototype.trim = function() {
    return this.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

function mySubStr(str, maxlen) {
    str = str.trim();
    var len = 0;
    var i;
    for (i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
            else {
            len += 2;
        }
        if (len > maxlen) break;
    }
    return str.substring(0, i);
}

/*
function clickIE4() {
    if (event.button == 2) {
        return false;
    }
}

function clickNS4(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }
}

function OnDeny() {
    if (event.ctrlKey || event.keyCode == 78 && event.ctrlKey || event.altKey || event.altKey && event.keyCode == 115) {
        return false;
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
    document.onkeydown = OnDeny();
} else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
    document.onkeydown = OnDeny();
}

document.oncontextmenu = new Function("return false");*/
