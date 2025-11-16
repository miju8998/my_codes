const prompt = require('prompt-sync')();
const { existsSync, readFileSync, writeFileSync } = require("fs");

// Dictionary object
let dictionary = {};

// Load dictionary from file
function loadDictionary() {
  if (existsSync("dictionary.json")) {
    const data = readFileSync("dictionary.json", "utf-8");
    dictionary = JSON.parse(data);
    console.log("Dictionary loaded successfully!");
  } else {
    console.log("No saved dictionary found. Starting fresh.");
  }
}

// Save dictionary to file
function saveDictionary() {
  writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2), "utf-8");
  console.log("Dictionary saved successfully!");
}

// Add a word manually
function addWord() {
  const english = prompt("Enter English word: ").trim();
  const mongolian = prompt("Enter Mongolian translation: ").trim();
  dictionary[english] = mongolian;
  console.log(`Added: ${english} -> ${mongolian}`);
}

// Add words from file
function addFromFile() {
  const fileName = prompt("Enter file name to load words from: ").trim();

  if (existsSync(fileName)) {
    try {
      const fileContent = readFileSync(fileName, "utf-8");
      const lines = fileContent.split("\n");

      let addedCount = 0;
      for (const line of lines) {
        const [english, mongolian] = line.split("->").map(word => word.trim());

        if (english && mongolian) {
          dictionary[english] = mongolian;
          addedCount++;
        } else {
          console.log(`Skipping invalid line: ${line}`);
        }
      }
      console.log(`Successfully added ${addedCount} words from ${fileName}.`);
    } catch (err) {
      console.log("Error reading or processing the file:", err.message);
    }
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

// View all words
function viewDictionary() {
  if (Object.keys(dictionary).length > 0) {
    console.log("English --> Mongolian");

    // Sort keys
    const sortedKeys = Object.keys(dictionary).sort();

    // Print sorted keys
    for (const english of sortedKeys) {
      console.log(`${english} -> ${dictionary[english]}`);
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

    switch (choice) {
      case "1":
        addWord();
        break;
      case "2":
        addFromFile();
        break;
      case "3":
        searchWord();
        break;
      case "4":
        deleteWord();
        break;
      case "5":
        viewDictionary();
        break;
      case "6":
        saveDictionary();
        console.log("Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

// Run the program
mainMenu();