window.onresize = doLayout;
var isLoading = false;

onload = function() {
  var webview = document.querySelector('webview');
  doLayout();

  var version = navigator.appVersion.substr(navigator.appVersion.lastIndexOf('Chrome/') + 7);
  var match = /([0-9]*)\.([0-9]*)\.([0-9]*)\.([0-9]*)/.exec(version);
  var majorVersion = parseInt(match[1]);
  var buildVersion = parseInt(match[3]);

};
