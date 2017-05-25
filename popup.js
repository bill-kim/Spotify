/**
 * Created by bill on 2017-05-25.
 */

(function() {

    let trackName = "";
    let trackArtist = "";

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.text) {
                trackName = request.name;
                trackArtist = request.artist;
            }
        }
    );

    console.log(trackName);
    console.log(trackArist);

})();