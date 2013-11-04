
var AE = AE || {};
(function (global, AE, undefined) {

    var httpRequest, ads, 
        url = "http://appenthusiastsads.azurewebsites.net/ads";
        
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
        var elem = document.getElementById("AEadControl");
        var div = document.createElement("div");
        

        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            
            var adJSON = JSON.parse(httpRequest.responseText);
            console.log(adJSON);

            var adString = "<a href='http://apps.microsoft.com/windows/en-us/app/" + adJSON.storeId + "'>" +
                           "<img src='" + adJSON.tileImageUrl + "' width='200' />" +
                           "<span>Download " + adJSON.title + " for Windows 8 today!</span></a>"

            div.innerHTML = adString;
            elem.parentNode.insertBefore(div, elem)

          } else {
            console.log('There was a problem with the request.');
          }
        }
      }

      getAds();
})(window, AE);
