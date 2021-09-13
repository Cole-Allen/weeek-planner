/* exported data */
var data = {
  NextId: 1,
  entries: []
};

var previousData = localStorage.getItem('entries.data');
if (previousData) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('entries.data', dataJSON);
});
