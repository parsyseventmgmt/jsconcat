function concatChange() {
    var qr="https://api-ssl.bitly.com/v3/shorten?access_token=570f34fc8fe2d4f0774c562eeb36220a1b99f909&amp;format=txt&amp;longUrl=";
    var permalink = document.getElementById("txtUrl").value;
    var callApi=qr.concat(permalink);
    document.getElementById("myFrame").src = callApi;
}
