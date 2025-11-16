const prompt=require('prompt-sync')();
const people = [
    {
      firstname: "Bat",
      lastname: "Dorj",
      birthday: "1990-05-15"
    },
    {
      firstname: "Chimeg",
      lastname: "Munkh",
      birthday: "1985-12-10"
    },
    {
      firstname: "Tuya",
      lastname: "Ankhaa",
      birthday: "1980-09-15"
    },
    {
      firstname: "Bolor",
      lastname: "Aldar",
      birthday: "1999-03-22"
    }
];

function calculateAge(birthday) {
  let today = new Date();
  let birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
}


function getInfo(nas, people) {
  let data = people.filter(person => calculateAge(person.birthday) >= nas);
  return data;
}

const nas = 26;
const result = getInfo(nas, people);

console.log(result);