var AE = AE || {};
(function (global, AE, undefined) {

    /* We're relying on native JSON support in the browser. 
       If it's not there, we'll abandon the effort.
       http://caniuse.com/json 
       IE8+, Chrome, Firefox 3.0+, Safari 4.0+ 
    */ 
    if (!JSON & !JSON.parse) {
        return;
    }

    var httpRequest, ads,
        url = "https://appenthusiasts.azure-mobile.net/api/ads/" + (AE.query || ""),
        adWidth = AE.width || 200;

    /* Go ahead and inject stylesheet into <head> unless
       AE.injectStyles is set to false. */
    if (AE.injectStyles !== false) {
        injectStyles();
    }

    // Fisher-Yates shuffle
    function shuffle(array) {
        var counter = array.length,
            temp, index;

        // While there are elements in the array
        while (counter--) {
            // Pick a random index
            index = (Math.random() * counter) | 0;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    function getAds() {
        if (window.XMLHttpRequest) { // Modern browsers
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // Older versions of IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!httpRequest) {
            console.log('[ads] Cannot create an XMLHTTP instance');
            return false;
        }

        httpRequest.onreadystatechange = displayAd;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function displayAd() {
        var adJSON, ad, adString, div,
            scriptElem = document.getElementById("AEadControl");


        if (document.getElementById("AppEnthusiastAd") != null) {
            div = document.getElementById("AppEnthusiastAd");
        } else {
            div = document.createElement("div");
            div.id = "AppEnthusiastAd";
        }

        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {

                adJSON = JSON.parse(httpRequest.responseText);
                ad = shuffle(adJSON)[0];

                adString = "<a href='http://apps.microsoft.com/windows/en-us/app/" + ad.storeId + "'>" +
                    "<img src='" + ad.tileImageUrl + "' width='" + adWidth + "' />" +
                    "<span>Download " + ad.title + " for Windows 8 today!</span></a>"

                div.innerHTML = adString;
                scriptElem.parentNode.insertBefore(div, scriptElem)

            } else {
                console.log('There was a problem with the request.');
            }
        }
    }

    function injectStyles() {
        var css = '#AppEnthusiastAd {text-align: center; padding: 0; margin: 0; width: ' + adWidth + 'px; min-height: 175px;}' +
                  '#AppEnthusiastAd img { padding: 0; margin: 0; border: none; }' +
                  '#AppEnthusiastAd span {display: block; font-size: 13px;}',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
            style.type = 'text/css';
        
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }

    // Kick off the first call to the App Enthusiasts
    getAds();

    // Rotate the ads by calling getAds every 10 seconds
    // TODO: If the query string has not changed, this should be cached.
    /* if (AE.rotate !== false) {
        setInterval(getAds, AE.rotateTimer || 10000);
    } */

})(window, AE);