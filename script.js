window.onload = function() {
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;
    var language = navigator.language;
    var colorDepth = screen.colorDepth;
    var pixelRatio = window.devicePixelRatio;
    var plugins = "";
    var mimeTypes = "";
    var cookiesEnabled = navigator.cookieEnabled;
    var timeZone = new Date().getTimezoneOffset();
    for (var i = 0; i < navigator.plugins.length; i++) {
        plugins += navigator.plugins[i].name + "; ";
        mimeTypes += navigator.plugins[i].name + ": " + navigator.plugins[i].filename + "\n";
    }
    var fingerprint = "**User Agent:** " + userAgent + "\n**Platform:** " + platform + "\n**Language:** " + language + "\n**Color Depth:** " + colorDepth + "\n**Pixel Ratio:** " + pixelRatio + "\n**Cookies Enabled:** " + cookiesEnabled + "\n**Timezone:** " + timeZone + "\n**Plugins:** " + plugins + "\n**MIME Types:**\n " + mimeTypes;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/WEBHOOK");
    var params = JSON.stringify({
        content: fingerprint
    });
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(params);
}
