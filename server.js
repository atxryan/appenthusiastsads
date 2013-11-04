var http = require('http');
var url = require("url");
var port = process.env.port || 1337;

var ads = [{ "id": 2, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "c9adc866-cadc-4a75-8a4b-0db101551ef7", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/5b366526-9ff0-4e97-8360-cfbec6091c4c/Screenshot.30317.1000000.jpg", "title": "MetroRadio", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 3, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "805f9742-8de2-41f6-b939-d7265fbda3c3", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/6264cfec-9089-4947-8b42-b62b09d58fe5/Screenshot.65950.1000000.jpg", "title": "Searchler", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 5, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "7a93f51c-b045-46e4-a47e-aa66176d9099", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/886dc4b3-8da9-43a3-a588-067c0ad9aeaf/Screenshot.214726.100000.jpg", "title": "Houston Astros by Statsheet", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 6, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "0b1cba03-2bb3-47e1-91d7-615870ef797d", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/505c15c3-10e8-4d7c-bff1-19e3c6916ac7/Screenshot.232330.100000.jpg", "title": "University of Houston - Computer Science", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-10-02T20:48:30.054Z", "createdBy": "Paul", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 7, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "3f9060c4-43be-46f7-9474-7c72b3dd4019", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/836ac52f-3e6e-469a-8110-b6019ce1b9e2/Screenshot.198214.100000.jpg", "title": "Daft Punk - JustAFan", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 10, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "eda34b44-ed2c-44ff-b51c-49f1f14dda04", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/07809a9e-50a6-4cb4-ad53-331a17faf08e/Screenshot.51887.1000000.jpg", "title": "Party Food", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 12, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "374a8735-159c-40ac-a25b-ec000c2b2092", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/06243c76-0642-4f34-8247-c4723c955bdf/Screenshot.199835.100000.jpg", "title": "Prize Claw", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 16, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "7b340d55-750b-4e04-b6cf-d390fd50c122", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/3f9e0fad-fda1-4076-a3b5-ba95dcc1938c/Screenshot.115532.1000000.jpg", "title": "Code In MIPS", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 17, "city": "Austin", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "F4BC95DA-B63A-4BFD-8090-31E1B62AA03D", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/13a176c9-0687-41e0-86c0-e6c34cfc3f3a/Screenshot.210984.100000.jpg", "title": "Combat Cats", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 18, "city": "Austin", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "TX", "storeId": "b5d654e1-3978-4521-b4f9-4edf1776dd06", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/eb4e8edf-2bb8-430a-8e72-08b54a4fd64d/Screenshot.117455.1000000.jpg", "title": "Metro CarFinder", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 19, "city": "Westerville", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-08-31T19:00:00.000Z", "state": "OH", "storeId": "5888fa7b-f708-487b-a629-4c4ccc7aad1f", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/61f165d5-ea8b-4885-b7e8-cc9fc907ca68/Screenshot.83875.1000000.jpg", "title": "Marvel Comics Almanac", "createDate": "2013-08-31T19:00:00.000Z", "updateDate": "2013-08-31T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 10005, "city": "Omaha", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "NE", "storeId": "b59fe74f-8081-4bfc-8738-446619cf9c7a", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/c1fdd6a5-ca87-4f77-8e10-22c778b56475/Screenshot.188579.100000.jpg", "title": "Battle Bears Gold", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 10006, "city": "Memphis", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TN", "storeId": "8813aa3c-16c4-4cf1-a3a0-783e6a590838", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/a5481b5e-c67f-40dd-bcfc-569df23cddc5/Screenshot.199555.100000.jpg", "title": "Ducks Unlimited", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 10007, "city": "Edmond", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "OK", "storeId": "af5f6405-7860-49a9-a6b4-a47381974e1d", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/391a9409-a2ef-456e-81ef-ee0dfef129b5/Screenshot.760.100000.jpg", "title": "Bible", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20002, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "62814c2f-2750-4ce4-91f0-57b1e9c241aa", "tileImageUrl": "http://wscont1.apps.microsoft.com/winstore/1x/4f812389-60e6-44f8-b872-09d74f790fe5/Screenshot.191448.1000000.jpg", "title": "7 Eleven", "createDate": "2013-09-26T16:56:39.910Z", "updateDate": "2013-09-26T16:56:39.910Z", "createdBy": "MicrosoftAccount:1deba536d991e1adee3ca8bd4c2c499d", "updatedBy": "MicrosoftAccount:1deba536d991e1adee3ca8bd4c2c499d", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20003, "city": "Westerville", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "OH", "storeId": "3761D794-B9E6-4BE8-B549-891005A47271", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/751c0488-0886-422a-896b-65d76409b4eb/Screenshot.205659.100000.jpg", "title": "Armenian Alphabet", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20005, "city": "Carbondale", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "IL", "storeId": "E63C4CEB-DFFC-4229-860A-5908C9DF2821", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/ddf8d126-773f-46ec-9ce7-8be3b77192b5/Screenshot.214657.100000.jpg", "title": "SIU Submit An Idea", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20006, "city": "Chicago", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "IL", "storeId": "ED7C0D50-7B54-4B38-9559-2FE0A5BE1172", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/7fe4f565-0d91-4fda-979c-b1a735204ff2/Screenshot.232135.100000.jpg", "title": "USTimeZone2013", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20007, "city": "Green Bay", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "WI", "storeId": "4356C3AD-CD86-443F-A20C-DA02FA0AA586", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/65a23fd4-0784-4dec-9558-36be243aa670/Screenshot.203997.100000.jpg", "title": "WPS Outages", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20008, "city": "Iowa City", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "IA", "storeId": "22E71EA1-46BD-4759-A18E-F5E9A37387D8", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/65e9bd68-9547-4c8d-9ca9-2d0b4fdf4bcc/Screenshot.216467.100000.jpg", "title": "Commander Scoreboard", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20009, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "AR", "storeId": "F73D9457-E852-4A94-99FC-B78BEAB9E334", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/339b8570-361e-43ec-9293-ce33bbe3df5c/Screenshot.232563.100000.jpg", "title": "Aquascaping", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20010, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "AR", "storeId": "69F035C4-8EE3-4596-BDEA-0DE1908CBFFC", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/2225a666-e922-4d65-900c-bfa52a999909/Screenshot.234392.100000.jpg", "title": "Bo Burnham Fan Club", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20011, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "AR", "storeId": "2FAC80F0-C28D-417E-842A-FF1EFD936735", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/8e679896-bafd-413b-891f-33cb6f73bcc9/Screenshot.235118.100000.jpg", "title": "Motor Trend", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20012, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "AR", "storeId": "CA0359EC-4844-4E9A-B6F3-816BE95F551A", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/e37de4e5-e1d7-40ff-a03a-69e1c2e96966/Screenshot.235331.100000.jpg", "title": "Nerdist Fan Club", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20013, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "7DDE93C6-9226-4ABA-996E-7724D155DC95", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/e635b93a-a840-4011-8182-d610acc8da2b/Screenshot.153025.100000.jpg", "title": "ConocoPhillips spirit", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20014, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "553FF3AB-F2DB-44D0-B884-1CBDD026212A", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/a7494d46-bbcb-42e2-bdbe-c692fe25fb49/Screenshot.213334.100000.jpg", "title": "WorkItem Glass", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20015, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "689FE98C-8045-4F5F-BE95-26CF8A5D0CEB", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/c4c5cf62-3c5c-4f43-89d9-89e55f885fe3/Screenshot.222005.100000.jpg", "title": "Prime Ultimate", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20016, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "9BA28672-21DC-4450-94C7-56592550698D", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/8a63df40-d3d4-4cb6-8042-9141418c7298/Screenshot.229007.100000.jpg", "title": "Prime Number Tool", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20017, "city": "Dallas", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-23T19:00:00.000Z", "state": "TX", "storeId": "ADC25194-0C85-495B-ABF9-AE33BD3F3CCE", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/aab2bce9-8661-4ddd-b53a-68c008a102cc/Screenshot.230170.100000.jpg", "title": "Baby's First Piano", "createDate": "2013-09-23T19:00:00.000Z", "updateDate": "2013-09-23T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20019, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-09-30T19:00:00.000Z", "state": "AR", "storeId": "ca936bcc-f665-4694-844b-afe6ed836e14", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/6a2c8592-5052-4a6d-9266-d2c25f95c3dc/Screenshot.237070.100000.jpg", "title": "Minecraft Minions", "createDate": "2013-09-30T19:00:00.000Z", "updateDate": "2013-09-30T19:00:00.000Z", "createdBy": "Paul", "updatedBy": "Paul", "isHidden": false, "platform": "WIN8", "tags": "UALR", "Column2": null }, { "id": 20028, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-09T05:00:00.000Z", "state": "TX", "storeId": "655e0b21-6a5f-455e-bc7f-01845c1198f9", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/4d4ba297-8149-4a70-9eac-ed2c5dea9da2/Screenshot.242737.100000.jpg", "title": "Super Street Fighter 2 - Strategy Guide", "createDate": "2013-10-09T15:16:27.520Z", "updateDate": "2013-10-09T15:16:27.520Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 20033, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-17T05:00:00.000Z", "state": "AR", "storeId": "ad9e782f-9f89-46b9-ae5d-fcc296e43118", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/e315a89e-d86b-4e49-80f6-0d744164eb75/Screenshot.245668.100000.jpg", "title": "Starbucks Menu", "createDate": "2013-10-17T16:00:57.782Z", "updateDate": "2013-10-17T16:00:57.782Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30031, "city": "Covina", "countryCode": "USA", "creditRegion": "USW", "groupByDate": "2013-10-20T05:00:00.000Z", "state": "CA", "storeId": "591c19c4-ecf4-47ee-a28f-50927cdfc27a", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/8654caf5-f133-4c44-a410-1cdec2846ed9/Screenshot.245803.100000.jpg", "title": "Todooey Todo List", "createDate": "2013-10-20T15:26:01.385Z", "updateDate": "2013-10-20T15:26:01.385Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30032, "city": "Novara", "countryCode": "ITA", "creditRegion": null, "groupByDate": "2013-10-20T05:00:00.000Z", "state": "Piedmont", "storeId": "49a46978-ee5f-4102-ba56-cf5abd141998", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/5dc347e5-e173-4173-a337-d5b1dfa925d7/Screenshot.14424.1000000.jpg", "title": "Medical Folder", "createDate": "2013-10-20T19:08:23.659Z", "updateDate": "2013-10-20T19:08:23.659Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30033, "city": "Detroit", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-17T05:00:00.000Z", "state": "MI", "storeId": "8f0d96fb-9e02-4d86-b8e3-fa698783d7ee", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/623968ec-591b-421b-b919-2c19a8bbaff0/Screenshot.241455.1000001.jpg", "title": "Eliza", "createDate": "2013-10-21T22:25:26.648Z", "updateDate": "2013-10-21T22:25:26.648Z", "createdBy": "MicrosoftAccount:1deba536d991e1adee3ca8bd4c2c499d", "updatedBy": "MicrosoftAccount:1deba536d991e1adee3ca8bd4c2c499d", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30035, "city": "Little Rock", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-22T05:00:00.000Z", "state": "AR", "storeId": "a0e0369d-34c6-4fa3-b162-1b0a0764886d", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/7e2dfd8f-4f72-4888-983b-3f0ea8632dee/Screenshot.248601.100000.jpg", "title": "All-Time Best Commercials", "createDate": "2013-10-22T18:09:49.456Z", "updateDate": "2013-10-22T18:09:49.456Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30036, "city": "Seattle", "countryCode": "USA", "creditRegion": "USW", "groupByDate": "2013-10-25T06:00:00.000Z", "state": "WA", "storeId": "b592ddfa-0900-40d5-871c-545d9a9abc46", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/471107df-9529-4bf6-b048-613df6480d2f/Screenshot.132144.1000000.jpg", "title": "Everyview", "createDate": "2013-10-25T21:48:44.351Z", "updateDate": "2013-10-25T21:50:16.417Z", "createdBy": "MicrosoftAccount:5c36108b4a176db2c92a161a7ef47f73", "updatedBy": "MicrosoftAccount:5c36108b4a176db2c92a161a7ef47f73", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30037, "city": "Austin", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "703f5078-0fd6-4b02-83e4-2dbc433694d0", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/c58eae06-11e9-48b0-a394-14b05006956f/Screenshot.196222.100000.jpg", "title": "Awesome Eats", "createDate": "2013-10-28T16:42:17.209Z", "updateDate": "2013-10-28T16:42:17.209Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30038, "city": "Columbus", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "OH", "storeId": "292C30E4-43D8-4151-9394-81BDCA49A981", "tileImageUrl": "http://wscont1.apps.microsoft.com/winstore/1x/5060b47f-a1d5-44db-9d16-8f65c1f34ca8/Screenshot.199985.1000000.jpg", "title": "CarRecords", "createDate": "2013-10-28T17:01:54.922Z", "updateDate": "2013-10-28T17:01:54.922Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30039, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "89CC174A-249C-42E2-942C-DCD2A80E8917", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/8be1fcae-8827-4507-bf78-18a5cc3ec954/Screenshot.217472.1000001.jpg", "title": "Football Gameplan Manager", "createDate": "2013-10-28T17:04:56.458Z", "updateDate": "2013-10-28T17:04:56.458Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30040, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "551CE9F8-0AB0-404C-B81D-41CBC30C3DF3", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/5c0038fb-97d1-4d56-8ccd-7f4a128941af/Screenshot.232109.100000.jpg", "title": "ChemCat", "createDate": "2013-10-28T17:06:37.415Z", "updateDate": "2013-10-28T17:06:37.415Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30041, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "197FE33C-AAA6-4824-859C-F97770428946", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/b5f7fed3-e577-4689-80f0-195f9f95dd54/Screenshot.227337.100000.jpg", "title": "Parkour Square", "createDate": "2013-10-28T17:08:45.375Z", "updateDate": "2013-10-28T17:08:45.375Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30042, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "8C55F639-A51E-4D96-9012-7CF3E6AA70E2", "tileImageUrl": "http://wscont1.apps.microsoft.com/winstore/1x/365e9d5b-9758-4646-a077-831484f9688a/Screenshot.199404.1000000.jpg", "title": "Bug Muncher", "createDate": "2013-10-28T17:09:47.191Z", "updateDate": "2013-10-28T17:09:47.191Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30043, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "CFAD7A8B-7E12-4D5D-8E00-A3306AD9D400", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/b9849fe6-3ba1-4453-8905-f3f0051e489e/Screenshot.220355.1000000.jpg", "title": "Hex Tetris", "createDate": "2013-10-28T17:11:12.907Z", "updateDate": "2013-10-28T17:11:12.907Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30044, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-28T05:00:00.000Z", "state": "TX", "storeId": "cddff7ed-a876-e011-9210-002264c2fb72", "tileImageUrl": "http://cdn.marketplaceimages.windowsphone.com/v8/images/bffc68c0-9286-4e11-a30e-bbd79ef10670?imageType=ws_icon_large", "title": "Walgreens", "createDate": "2013-10-28T17:40:01.459Z", "updateDate": "2013-10-28T17:40:01.459Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30045, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-11-01T05:00:00.000Z", "state": "TX", "storeId": "26bb7b15-e5d8-4b2a-954a-297c9871ec52", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/c9c5eea2-34e3-442c-aef0-47e6dc032cf1/Screenshot.202925.100000.jpg", "title": "Fluvium", "createDate": "2013-10-31T19:03:06.471Z", "updateDate": "2013-10-31T19:03:06.471Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30046, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-11-01T05:00:00.000Z", "state": "TX", "storeId": "d9b567c3-34a0-4ead-8bcb-da3591d95f56", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/14d7e85f-d54a-4d2d-b8be-5659057fb9c5/Screenshot.111690.100000.jpg", "title": "Flexie Clock", "createDate": "2013-10-31T19:05:01.632Z", "updateDate": "2013-10-31T19:11:12.166Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30047, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-10-31T05:00:00.000Z", "state": "TX", "storeId": "d9b567c3-34a0-4ead-8bcb-da3591d95f56", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/14d7e85f-d54a-4d2d-b8be-5659057fb9c5/Screenshot.111690.100000.jpg", "title": "Flexie Clock", "createDate": "2013-10-31T19:05:04.737Z", "updateDate": "2013-10-31T19:10:51.762Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": true, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30048, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-11-01T05:00:00.000Z", "state": "TX", "storeId": "972FE52D-047F-47D6-AC4A-D1AE8A99FCF8", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/b50d3e6b-e4a3-49df-b46b-d151b0385d15/Screenshot.232702.1000001.jpg", "title": "Star Wars Fan App", "createDate": "2013-10-31T19:14:13.855Z", "updateDate": "2013-10-31T19:14:13.855Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null }, { "id": 30049, "city": "Houston", "countryCode": "USA", "creditRegion": "USC", "groupByDate": "2013-11-01T05:00:00.000Z", "state": "TX", "storeId": "deaaa854-e499-48bd-9018-86d79245dc01", "tileImageUrl": "http://wscont2.apps.microsoft.com/winstore/1x/77a53dae-3e69-47cb-9ef9-148a5e3a6ce2/Screenshot.207973.1000001.jpg", "title": "Zombie Pop", "createDate": "2013-10-31T19:15:31.581Z", "updateDate": "2013-10-31T19:32:07.288Z", "createdBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "updatedBy": "MicrosoftAccount:dac0862b9ed9fadb9b464b1ac92295b6", "isHidden": false, "platform": "WIN8", "tags": null, "Column2": null}];

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

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;

	pathname = pathname.replace(/^\//, '');
	pathname = pathname.replace(/\/$/, '');

	var path = pathname.split("/")

	console.log(pathname);

	if (path[0] === "ads") {
		var shuffledAds = shuffle(ads);

		res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
		res.end(JSON.stringify(shuffledAds[0], 0, 4));
	} else {
		res.writeHead(200, { 'Content-Type': 'text/html', "Access-Control-Allow-Origin":"*" });
		res.end();
	}

	

}).listen(port);

console.log('Server running');