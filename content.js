/**
 * Created by bill on 2017-05-25.
 */

let id = setInterval(checkLoaded, 300);

function checkLoaded() {
    if (document.getElementsByClassName('track-info__name').length !== 0) {
        clearInterval(id);
        fullyLoaded();
    }
}

function fullyLoaded() {
    let track_name = document.getElementsByClassName('track-info__name')[0].firstChild.firstChild.innerHTML;
    let track_artist = document.getElementsByClassName('track-info__artists')[0].firstChild.firstChild.firstChild.innerHTML;

    let info = {
        name: track_name,
        artist: track_artist
    };

    console.log(info);

    chrome.runtime.sendMessage({from: "content", data: info}, null);
}

