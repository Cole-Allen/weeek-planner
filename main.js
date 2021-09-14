/* global data */
/* exported data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $addEntryForm = document.querySelector('.add-entry-form');
var $addEntryModal = document.querySelector('.add-entry');
var documentForms = document.forms[0];
var documentFormsUpdate = document.forms[1];
var $timeSelect = documentForms.time;
var $daysButtons = document.querySelector('.days-buttons');
var $table = document.querySelector('.table-container tbody');
var $tableTitle = document.querySelector('.table-container h2');
// var $tableBody = document.querySelector('tbody');

window.addEventListener('DOMContentLoaded', function (event) {
  selectDay('sunday');
});

populateTime();

$daysButtons.addEventListener('click', function (event) {
  selectDay(event.target.value);
});

$addEntryButton.addEventListener('click', function (event) {
  $addEntryModal.classList.remove('hidden');
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (data.editing) {
    data.editing.time = documentForms.time.value;
    data.editing.notes = documentForms.notes.value;
    data.editing.date = documentForms.date.value;
    console.log(data.editing);
    deleteDOM();
    selectDay('sunday');
    $addEntryForm.reset();
    $addEntryModal.classList.add('hidden');
  } else {
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
  }
});

function domTree(entry) {
  var $tr = document.createElement('tr');
  $tr.setAttribute('data-entry', entry.id);
  $tr.setAttribute('date', entry.date);
  var $td1 = document.createElement('td');
  var $td2 = document.createElement('td');
  var $span = document.createElement('span');
  $span.classList.add('update-delete-buttons');
  var $updateButton = document.createElement('button');
  $updateButton.textContent = 'Update';
  $updateButton.setAttribute('class', 'update-button');
  $updateButton.addEventListener('click', function (event) {
    $addEntryModal.classList.remove('hidden');
    documentForms.querySelector('h1').textContent = 'Update Entry';
  });
  var $deleteButton = document.createElement('button');
  $deleteButton.textContent = 'Delete';
  $deleteButton.setAttribute('class', 'delete-button');

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
  for (var i = 0; i < data.entries.length; i++) {
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
// };

function deleteDOM() {
  while ($table.firstChild) {
    $table.removeChild($table.firstChild);
  }
}

function selectDay(day) {
  deleteDOM();
  var upperDay = upperCase(day);
  $tableTitle.textContent = 'Scheduled Events for ' + upperDay;
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].date === day) {

      $table.appendChild(domTree(data.entries[i]));
    }
  }
}

function upperCase(string) {
  var newString = '';
  newString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
