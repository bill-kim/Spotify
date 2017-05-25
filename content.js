/**
 * Created by bill on 2017-05-25.
 */

(function() {
    let track_info = document.getElementsByClassName("track-info__name").getElementsByTagName("a");

    let info = {
        name: track_info[0],
        artist: track_info[1]
    }

    chrome.runtime.sendMessage(info, null);
})();