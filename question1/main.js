// 1. The table with id="age-table".
let ageTable = document.getElementById("age-table");

// 2. All label elements inside that table (there should be 3 of them).
let labels = ageTable.getElementsByTagName("label");

// 3. The first td in that table (with the word “Age”).
let firstTD = ageTable.getElementsByTagName("td")[0];

// 4. The form with name="search".
let searchForm = document.getElementsByName("search")[0];

// 5. The first input in that form.
let firstInput = searchForm.getElementsByTagName("input")[0];

// 6. The last input in that form.
let inputs = searchForm.getElementsByTagName("input");
let lastInput = inputs[inputs.length - 1];
