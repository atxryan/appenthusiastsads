var AE = AE || {};
(function (global, AE, undefined) {

    AE.query = AE.query || "";
    
    if (AE.injectStyles !== false) {
        injectStyles();
    }
    
    var httpRequest, ads, 
        url =  "https://appenthusiasts.azure-mobile.net/api/ads/" + AE.query,
        AE.width = AE.width || 200;
        
    function shuffle(array) {
        var counter = array.length, temp, index;

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
        
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
          httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
          try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
          } 
          catch (e) {
            try {
              httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {}
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
        var adJSON, ad, adString;
        var elem = document.getElementById("AEadControl");
        var div = document.createElement("div");
            div.id = "AppEnthusiastAd";
        

        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            
            adJSON = JSON.parse(httpRequest.responseText);
            ad = shuffle(adJSON)[0];

            adString = "<a href='http://apps.microsoft.com/windows/en-us/app/" + ad.storeId + "'>" +
                           "<img src='" + ad.tileImageUrl + "' width='" + AE.width + "' />" +
                           "<span>Download " + ad.title + " for Windows 8 today!</span></a>"

            div.innerHTML = adString;
            elem.parentNode.insertBefore(div, elem)

          } else {
            console.log('There was a problem with the request.');
          }
        }
      }
      
      function injectStyles() {
        var css = '#AppEnthusiastAd {text-align: center; }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        
        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        
        head.appendChild(style);
      }

      getAds();

})(window, AE);
