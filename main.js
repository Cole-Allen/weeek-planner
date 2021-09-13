/* global data */
/* exported data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $addEntryForm = document.querySelector('.add-entry-form');
var $addEntryModal = document.querySelector('.add-entry');
var documentForms = document.forms[0];
// var $tableBody = document.querySelector('tbody');

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
  data.entries.push(entry);
  $addEntryForm.reset();
  $addEntryModal.classList.add('hidden');
});

// function domTree(entry) {
//   var $tr = document.createElement('tr');
//   var $td1 = document.createElement('td');
//   var $td2 = document.createElement('td');
//   var $span = document.createElement('span');
//   var $updateButton = document.createElement('button');
//   var $deleteButton = document.createElement('button');

//   $tr.appendChild($td1);
//   $tr.appendChild($td2);
//   $td2.appendChild($span);
//   $span.appendChild($updateButton);
//   $span.appendChild($deleteButton);

//   $td1.textContent = entry.time;
//   $td2.textContent = entry.desc;

//   return $tr;
// }
