/**
 * Created by bill on 2017-05-25.
 */

let data = null;

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.from === "content") {
            data = message.data;
            console.log(data);
        } else if (message.from === "popup") {
            sendResponse(data);
        }
    }
)