Microsoft DPE App Enthusiasts
=================

## Installation

Insert the following wherever you want the ad to be displayed:
    
    <script src="http://appenthusiastsads.azurewebsites.net/scripts/getads.js" id="AEadControl"></script>

This will generate the following sample markup in your HTML:
    
    <div id="AppEnthusiastAd">
    	<a href="http://apps.microsoft.com/windows/en-us/app/E63C4CEB-DFFC-4229-860A-5908C9DF2821">
			<img src="http://wscont2.apps.microsoft.com/winstore/1x/ddf8d126-773f-46ec-9ce7-8be3b77192b5/Screenshot.214657.100000.jpg" width="200">
			<span>Download SIU Submit An Idea for Windows 8 today!</span>
		</a>
	</div>
    
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
</table>

<table>
    <tr>
        <td>Query param</td>
        <td>Possible values</td>
    </tr>
    <tr>
        <td>platform</td>
        <td>"WIN8" only supported right now. WP8 and WP75 coming soon.</td>
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
