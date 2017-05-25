/**
 * Created by bill on 2017-05-25.
 */

chrome.runtime.sendMessage({from: "popup"}, function(data) {
    console.log(data);

    let xmlHttp = new XMLHttpRequest();
    let url = "https://genius.com/" + data.artist + "-" + data.name + "-lyrics";
    url = url.replace(/ /g, "-");
    console.log(url);
    xmlHttp.open("GET", "https://genius.com/Childish-gambino-redbone-lyrics", true);
    xmlHttp.send();
    // document.getElementById("lyrics").innerHTML = xmlHttp.responseText;
});