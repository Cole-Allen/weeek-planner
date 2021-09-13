var $addEntryButton = document.querySelector('.add-entry-button');
var $addEntryForm = document.querySelector('.add-entry-form');

$addEntryButton.addEventListener('click', function (event) {
  var $addEntryModal = document.querySelector('.add-entry');
  $addEntryModal.classList.remove('hidden');
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {};
  entry.date = document.forms[0].date;
  entry.time = document.forms[0].time;
  entry.notes = document.forms[0].notes;
  entry.id = data.NextId;
  data.NextId++;
  data.entries.push(entry);
});
