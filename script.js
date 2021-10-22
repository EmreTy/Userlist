const leeresArray = [];

class UserData {
  constructor(userName, userAge) {
    this.name = userName;
    this.age = userAge;
  }
}

function newUser() {
  const nameText = document.getElementById("input-name");
  const outputText = nameText.value;
  const ageNumber = document.getElementById("input-age");
  const outputNumber = ageNumber.value;
  if (outputText.length > 0 && outputNumber.length > 0) {
    const combinedData = new UserData(outputText, outputNumber);
    leeresArray.push(combinedData);
    console.log(leeresArray);
    renderUsers();
  } else {
    alert("Füllen sie die Felder aus!!");
  }
}

function renderUsers() {
  const list = document.getElementById("user-list");
  leeresArray.forEach((user) => {
    const userList = document.createElement("li");
    userList.innerText = ${user.name}, ${user.age};
    list.appendChild(userList);
  });
}