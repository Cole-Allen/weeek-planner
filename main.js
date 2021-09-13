/* global data */
/* exported data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $addEntryForm = document.querySelector('.add-entry-form');
var $addEntryModal = document.querySelector('.add-entry');
var documentForms = document.forms[0];
var documentFormsUpdate = document.forms[1];
var $timeSelect = documentForms.time;

var $table = document.querySelector('.table-container tbody');
// var $tableBody = document.querySelector('tbody');

window.addEventListener('DOMContentLoaded', function (event) {
  updatePage(event);
});

populateTime();

$addEntryButton.addEventListener('click', function (event) {
  $addEntryModal.classList.remove('hidden');
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {};
  entry.date = documentForms.date.value;
  entry.time = documentForms.time.value;
  entry.notes = documentForms.notes.value;
  entry.id = data.NextId;
  data.NextId++;
  $table.appendChild(domTree(entry));
  data.entries.push(entry);
  $addEntryForm.reset();
  $addEntryModal.classList.add('hidden');
});

function domTree(entry) {
  var $tr = document.createElement('tr');
  $tr.setAttribute('data-entry', entry.id.value);
  var $td1 = document.createElement('td');
  var $td2 = document.createElement('td');
  var $span = document.createElement('span');
  $span.classList.add('update-delete-buttons');
  var $updateButton = document.createElement('button');
  $updateButton.textContent = 'Update';
  var $deleteButton = document.createElement('button');
  $deleteButton.textContent = 'Delete';

  $td1.textContent = entry.time;
  $td2.textContent = entry.notes;

  $tr.appendChild($td1);
  $tr.appendChild($td2);
  $span.appendChild($updateButton);
  $span.appendChild($deleteButton);
  $td2.appendChild($span);

  return $tr;
}

function updatePage(event) {
  for (var i = 0; data.entries.length; i++) {
    $table.appendChild(domTree(data.entries[i]));
  }
}

function populateTime() {
  for (var i = 0; i < 23; i++) {
    var $option = document.createElement('option');
    $option.setAttribute('value', i);
    $option.textContent = i;
    $timeSelect.appendChild($option);
  }
}

function editEntry(entry) {
  event.preventDefault();
  entry.time = documentFormsUpdate.time.value;
  entry.date = documentFormsUpdate.date.value;
  entry.notes = documentFormsUpdate.notes.value;
}

// for (var i = 0; i < data.entries.length; i++){
//   if(data.entries[i].id.toString() ===
// }

var $updateModal = document.querySelector('.update-modal');
$updateModal.addEventListener('click', function (event) {
  editEntry();
});
