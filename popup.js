// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
async function setPageBackgroundColor()  {
  chrome.storage.sync.get("color", ({ color }) => {
  //  document.body.style.backgroundColor = color;
  });

  let studenttable = document.getElementById('z_i');


//loop through csv first ..easier to get id instead of parsing ID from site.

let lines = await chrome.storage.sync.get('importcsv');
let seperator = await chrome.storage.sync.get('seperator');
console.log(seperator);

console.log(lines);
lines = lines.importcsv.split('\n');

for(var i = 0;i < lines.length;i++){
    //code here using lines[i] which will give you each line
console.log(lines[i]);

let number_group = lines[i].split(',');
console.log(number_group);
console.log(number_group[0]);

let check = number_group[0];
let col = number_group[1];


for (let row of studenttable.rows) 
{

  let firstcol = row.firstChild.innerHTML
            if (firstcol.search(check) > 0)  {
            console.log('found');

            let counter = 0;
                for (let cell of row.cells){
                    if (cell.tagName == 'TD'){
                     console.log('found td');
                       if (cell.firstChild.title.search(col) > 0){
                        cell.firstChild.checked = true;
                        row.style.backgroundColor = "#ccc";

                      }
                    }
                    
                  counter++;
                }
            }
            

}

}
 /* //.addEventListener('click', function (item) {

      // To get tr tag 
      // In the row where we click
      var row = item.path[1];

      var row_value = "";

      for (var j = 0; j < row.cells.length; j++) {

          row_value += row.cells[j].innerHTML;
          row_value += " | ";
      }

      alert(row_value);

      // Toggle the highlight
      if (row.classList.contains('highlight'))
          row.classList.remove('highlight');
      else
          row.classList.add('highlight');
  });
*/

}
