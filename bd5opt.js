const prompt = require('prompt-sync')();
const fs = require("fs"); // file uudiig unshij bichhed ashiglah module

let dictionary = {};

function loadDictionary() {
  if (fs.existsSync("dictionary.json")) {
    const data = fs.readFileSync("dictionary.json", "utf-8");
    dictionary = JSON.parse(data);
    console.log("Толь бичиг амжилттай ачаалагдлаа!");
  } else {
    console.log("Хадгалагдсан толь бичиг олдсонгүй. Шинээр эхэлнэ.");
  }
}

function saveDictionary() {
  fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2), "utf-8");
  console.log("Толь бичиг амжилттай хадгалагдлаа!");
}

function addWord() {
  const english = prompt("Англи үг оруулна уу: ").trim();
  const mongolian = prompt("Монгол орчуулгыг оруулна уу: ").trim();

  if (english && mongolian) {
    dictionary[english] = mongolian;
    console.log(`Нэмэгдлээ: ${english} -> ${mongolian}`);
  } else {
    console.log("Англи болон Монгол үг хоёул шаардлагатай.");
  }
}

function searchWord() {
  const english = prompt("Хайх Англи үг оруулна уу: ").trim();
  if (dictionary[english]) {
    console.log(`${english} -> ${dictionary[english]}`);
  } else {
    console.log(`${english} толь бичигт олдсонгүй.`);
  }
}

function deleteWord() {
  const english = prompt("Устгах Англи үг оруулна уу: ").trim();
  if (dictionary[english]) {
    delete dictionary[english];
    console.log(`${english} устгагдлаа.`);
    console.log(`${english} толь бичигт олдсонгүй.`);
  }
}

function viewDictionary() {
  const keys = Object.keys(dictionary);//keys-buh ugnuud

  // Bubble Sort ashiglaad
  for (let i = 0; i < keys.length - 1; i++) {
    for (let j = 0; j < keys.length - 1 - i; j++) {
      if (keys[j] > keys[j + 1]) {
        const temp = keys[j];
        keys[j] = keys[j + 1];
        keys[j + 1] = temp;
      }
    }
  }

  // eremlegdsenii daraa toli bichigt hevlene
  if (keys.length > 0) {
    console.log("Англи --> Монгол");
    for (let key of keys) {
      console.log(`${key} -> ${dictionary[key]}`); // buh utga
    }
  } else {
    console.log("Толь бичиг хоосон байна.");
  }
}

function mainMenu() {
  loadDictionary();

  while (true) { // hereglegch songolt hiih hurtel
    console.log("\n=== Англи-Монгол толь бичиг ===");
    console.log("1. Үг нэмэх");
    console.log("2. Үг хайх");
    console.log("3. Үг устгах");
    console.log("4. Толь бичгийг харах");
    console.log("5. Хадгалаад гарах");

    const choice = prompt("Сонголтоо хийнэ үү (1-5): ").trim();

    if (choice === "1") {
      addWord();
    } else if (choice === "2") {
      searchWord();
    } else if (choice === "3") {
      deleteWord();
    } else if (choice === "4") {
      viewDictionary();
    } else if (choice === "5") {
      saveDictionary();
      console.log("Баяртай!");
      break;
    } else {
      console.log("Буруу сонголт. Дахин оролдоно уу.");
    }
  }
}

//ajilluulah
mainMenu();
