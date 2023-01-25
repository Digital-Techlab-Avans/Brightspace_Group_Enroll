let page = document.getElementById("buttonDiv");

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
let v  = document.getElementById("csv");
   console.log('saving');
   chrome.storage.sync.set({'importcsv':v.value});
   //chrome.storage.sync.set({'seperator':s.value});

 
  // Mark the button as selected
  let color = event.target.dataset.color;

  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions() {
  chrome.storage.sync.get("importcsv", (data) => {
    document.getElementById("csv").value = data.importcsv;
  });


      let button = document.createElement("button");
      button.dataset.color = '#fff';
      button.style.backgroundColor = '#ccc';
      button.innerHTML = "Opslaan";

     
      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
}

// Initialize the page by constructing the color options
constructOptions();

