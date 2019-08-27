let students = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("page loaded");

  async function getJson() {
    let jsonData = await fetch("http://petlatkea.dk/2019/students1991.json");
    students = await jsonData.json();

    showStudents();
  }

  function showStudents() {
    console.log(students);
    let temp = document.querySelector("template");
    let dest = document.querySelector(".studentlist");
    students.forEach(student => {
      let klon = temp.cloneNode(!0).content;
      klon.querySelector(".student h2").innerHTML = student.fullname;
      klon.querySelector(".student h3").innerHTML = student.house;
      dest.appendChild(klon);
    });
  }

  getJson();
}
