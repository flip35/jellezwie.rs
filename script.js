document.addEventListener("DOMContentLoaded", function(event) {
  var tx = document.getElementsByTagName("textarea");
  for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  }
});

var currentTimeZone = luxon.DateTime.fromObject({zone: 'Europe/Amsterdam'}).toLocaleString(luxon.DateTime.DATETIME_FULL);
