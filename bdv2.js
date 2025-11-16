const prompt = require('prompt-sync')();
const fs = require("fs");

// Dictionary object
let dictionary = {};

// Load dictionary from file
function loadDictionary() {
  if (fs.existsSync("dictionary.json")) {
    const data = fs.readFileSync("dictionary.json", "utf-8");
    dictionary = JSON.parse(data);
    console.log("Dictionary loaded successfully!");
  } else {
    console.log("No saved dictionary found. Starting fresh.");
  }
}

// Save dictionary to file
function saveDictionary() {
  fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2), "utf-8");
  console.log("Dictionary saved successfully!");
}

// Add a word manually
function addWord() {
  const english = prompt("Enter English word: ").trim();
  const mongolian = prompt("Enter Mongolian translation: ").trim();

  if (english && mongolian) {
    dictionary[english] = mongolian;
    console.log(`Added: ${english} -> ${mongolian}`);
  } else {
    console.log("Both English and Mongolian words are required.");
  }
}

// Add words from file
function addFromFile() {
  const fileName = prompt("Enter file name to load words from: ").trim();

  if (fs.existsSync(fileName)) {
    const fileContent = fs.readFileSync(fileName, "utf-8");
    const lines = fileContent.split("\n");

    let addedCount = 0;

    for (let line of lines) {
      const parts = line.split("->");
      if (parts.length === 2) {
        const english = parts[0].trim();
        const mongolian = parts[1].trim();
        dictionary[english] = mongolian;
        addedCount++;
      } else {
        console.log(`Skipping invalid line: ${line}`);
      }
    }

    console.log(`Successfully added ${addedCount} words from ${fileName}.`);
  } else {
    console.log(`File "${fileName}" not found.`);
  }
}

// Search for a word
function searchWord() {
  const english = prompt("Enter English word to search: ").trim();
  if (dictionary[english]) {
    console.log(`${english} -> ${dictionary[english]}`);
  } else {
    console.log(`${english} not found in the dictionary.`);
  }
}

// Delete a word
function deleteWord() {
  const english = prompt("Enter English word to delete: ").trim();
  if (dictionary[english]) {
    delete dictionary[english];
    console.log(`${english} deleted.`);
  } else {
    console.log(`${english} not found in the dictionary.`);
  }
}

// View all words with Bubble Sort
function viewDictionary() {
  const keys = Object.keys(dictionary);

  // Bubble Sort implementation
  for (let i = 0; i < keys.length - 1; i++) {
    for (let j = 0; j < keys.length - 1 - i; j++) {
      if (keys[j] > keys[j + 1]) {
        // Swap keys[j] and keys[j + 1]
        const temp = keys[j];
        keys[j] = keys[j + 1];
        keys[j + 1] = temp;
      }
    }
  }

  // Display the sorted dictionary
  if (keys.length > 0) {
    console.log("English --> Mongolian");
    for (let key of keys) {
      console.log(`${key} -> ${dictionary[key]}`);
    }
  } else {
    console.log("The dictionary is empty.");
  }
}

// Main menu
function mainMenu() {
  loadDictionary();

  while (true) {
    console.log("\n=== English-Mongolian Dictionary ===");
    console.log("1. Add a word");
    console.log("2. Add words from file");
    console.log("3. Search for a word");
    console.log("4. Delete a word");
    console.log("5. View dictionary");
    console.log("6. Save and exit");

    const choice = prompt("Choose an option (1-6): ").trim();

    if (choice === "1") {
      addWord();
    } else if (choice === "2") {
      addFromFile();
    } else if (choice === "3") {
      searchWord();
    } else if (choice === "4") {
      deleteWord();
    } else if (choice === "5") {
      viewDictionary();
    } else if (choice === "6") {
      saveDictionary();
      console.log("Goodbye!");
      break;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
}

// Run the program
mainMenu();
