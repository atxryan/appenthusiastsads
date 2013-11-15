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

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                displayAd(httpRequest.responseText);

                // Cache the response in localStorage
                localStorage.setItem('AppEnthusiastAds', httpRequest.responseText);
                localStorage.setItem('AppEnthusiastAdstimestamp', (new Date()).getTime());
            } else {
                console.log('There was a problem with the request.');
            }
        }};
        httpRequest.open('GET', url);
        httpRequest.send();
        console.log("Called " + url); 
    }

    function displayAd(ads) {
        var adJSON, ad, adString, div, appURL,
            scriptElem = document.getElementById("AEadControl");


        if (document.getElementById("AppEnthusiastAd") != null) {
            div = document.getElementById("AppEnthusiastAd");
        } else {
            div = document.createElement("div");
            div.id = "AppEnthusiastAd";
        }

        adJSON = JSON.parse(ads);
        ad = shuffle(adJSON)[0];
        appURL = (ad.platform === "WIN8") ? "http://apps.microsoft.com/windows/en-us/app/" : "http://windowsphone.com/s?appId=";
        appURL = appURL + ad.storeId

        adString = "<a href='" + appURL + "' target='_blank'>" +
            "<img src='" + ad.tileImageUrl + "' width='" + adWidth + "' />" +
            "<span>Download " + ad.title + " for " + (ad.platform === 'WIN8' ? 'Windows 8' : 'Windows Phone') + " today!</span></a>"

        div.innerHTML = adString;
        scriptElem.parentNode.insertBefore(div, scriptElem)
         
    }

    function injectStyles() {
        var css = '#AppEnthusiastAd {text-align: center; padding: 0; margin: 0 auto; width: ' + adWidth + 'px; min-height: 175px;}' +
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

    // Cache local content for 1 day
    if (localStorage.getItem('AppEnthusiastAds') && localStorage.getItem('AppEnthusiastAdstimestamp') && ((new Date().getTime() - localStorage.getItem('AppEnthusiastAdstimestamp')) / 1000 /60 / 60 / 24) < 1) {
        displayAd(localStorage.getItem('AppEnthusiastAds'));
    } else {
        // Kick off the first call to the App Enthusiasts
        getAds();
    }
    

    // Rotate the ads by calling getAds every 10 seconds
    // TODO: If the query string has not changed, this should be cached.
    if (AE.rotate !== false) {
        setInterval(function () {displayAd(localStorage.getItem('AppEnthusiastAds'))}, AE.rotateTimer || 10000);
    }

})(window, AE);