Microsoft DPE App Enthusiasts
=================

## Installation

Insert the following wherever you want the ad to be displayed:
    
    <script src="http://appenthusiastsads.azurewebsites.net/scripts/getads.min.js" id="AEadControl"></script>

*NOTE: The ad control will be inserted before the element with an ID of "AEadControl". If you'd prefer to serve the ad control HTML somewhere else, you can include `<div id="AEadControl"></div>` in your markup instead.

This will generate the following sample markup in your HTML:
    
    <div id="AppEnthusiastAd">
    	<a href="http://apps.microsoft.com/windows/en-us/app/E63C4CEB-DFFC-4229-860A-5908C9DF2821">
			<img src="http://wscont2.apps.microsoft.com/winstore/1x/ddf8d126-773f-46ec-9ce7-8be3b77192b5/Screenshot.214657.100000.jpg" width="200">
			<span>Download SIU Submit An Idea for Windows 8 today!</span>
		</a>
	</div>

The following CSS style rules will also be injected in your document head element. You can overwrite this CSS injection via the 'injectStyles' option. You can also use these CSS selectors to customize your look and feel.

	<style type="text/css">
		#AppEnthusiastAd {text-align: center; padding: 0; margin: 0 auto; width: 200px; min-height: 175px;}
		#AppEnthusiastAd img { padding: 0; margin: 0; border: none; }
		#AppEnthusiastAd span {display: block; font-size: 13px;}
	</style>
    
## Customization

You can customize the ad control by declaring an AE object in a script tag above the getads.js tag. Width and query parameters are currently supported.


    <script>
        var AE = {
            query : "?state=TX&platform=WIN8",
            width: "300",
            injectStyles: false
        }
    </script>
    
    
<table>
    <tr>
        <th>Option</th>
        <th>Possible values</th>
    </tr>
    <tr>
        <td>query</td>
        <td>Optional query string to filter the ads returned.</td>
    </tr>
    <tr>
        <td>width</td>
        <td>Width of the ad image; Defaults to 200;</td>
    </tr>
    <tr>
        <td>injectStyles</td>
        <td>Defaults to true; Set to false if you don't want any CSS styles applied or if you will apply your own.</td>
    </tr>
    <tr>
        <td>rotate</td>
        <td>Defaults to true; Set to false if you don't want ads to rotate on a setInterval timer</td>
    </tr>
    <tr>
        <td>rotateTimer</td>
        <td>Defaults to 10000;</td>
    </tr>
</table>

<table>
    <tr>
        <th>Query param</th>
        <th>Possible values</th>
    </tr>
    <tr>
        <td>platform</td>
        <td>E.g. "WIN8", "WP8", or "WP75"</td>
    </tr>
    <tr>
        <td>City</td>
        <td>E.g. "Austin"</td>
    </tr>
    <tr>
        <td>state</td>
        <td>E.g. "TX"</td>
    </tr>
    <tr>
        <td>countryCode</td>
        <td>E.g. "USA"</td>
    </tr>
    <tr>
        <td>creditRegion</td>
        <td>US DPE regions: USW, USC, or USE</td>
    </tr>
</table>

## Feedback?

Open an issue or email ryanjoy@microsoft.com. 
