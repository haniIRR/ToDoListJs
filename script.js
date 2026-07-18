let addbtn = document.getElementById("addbtn");
let taskTitle = document.getElementById("taskTitle");
let dayTask = document.getElementById("dayTask");
let timeTask = document.getElementById("timeTask");
let tagTask = document.getElementById("tagTask");
let tbody = document.querySelector("tbody");

let form = document.querySelector("form");

let selectedcolor = "white";

let statusTask = [
  {
    id: 1,
    t: "Not done",
    stylecss:
      "px-3 py-1 rounded-full border border-red-500 text-red-500 bg-red-100",
  },
  {
    id: 2,
    t: "Done",
    stylecss:
      "px-3 py-1 rounded-full border border-green-500 text-green-500 bg-green-100",
  },
  {
    id: 3,
    t: "In process",
    stylecss:
      "px-3 py-1 rounded-full border border-yellow-500 text-yellow-600 bg-yellow-100",
  },
];

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    selectedcolor = color.getAttribute("data-color");
    taskTitle.style.backgroundColor = selectedcolor;
  });
});

function Counter() {
  document.getElementById("counter").textContent = tbody.children.length;
}
addbtn.addEventListener("click", function (event) {
  event.preventDefault();
  let tr = document.createElement("tr");

  //   input check
  if (
    taskTitle.value.trim() === "" ||
    dayTask.value === "" ||
    timeTask.value === "" ||
    tagTask.value.trim() === ""
  ) {
    alert("Please fill all inputs");
    return;
  }
  //   id
  let idtd = document.createElement("td");
  idtd.className = "p-4";
  idtd.innerText = tbody.children.length + 1;
  tr.append(idtd);

  //   title
  let title = document.createElement("td");
  title.textContent = taskTitle.value;
  title.className = "p-4 font-semibold";
  title.style.backgroundColor = selectedcolor;
  tr.append(title);

  //   day
  let day = document.createElement("td");
  day.className = "p-4";
  day.textContent = dayTask.value;
  tr.append(day);

  //   time
  let time = document.createElement("td");
  time.className = "p-4";
  time.textContent = timeTask.value;
  tr.append(time);

  //   tag
  let tag = document.createElement("td");
  tag.className = "p-4";

  let tags = document.createElement("span");
  tags.className = "px-3 py-1 rounded-full bg-purple-100 text-purple-600";
  tags.innerText = tagTask.value;
  tag.appendChild(tags);
  tr.append(tag);

  //   status
  let status = document.createElement("td");
  status.className = "p-4";

  let statusspan = document.createElement("span");
  statusspan.innerText = statusTask[0].t;
  statusspan.className = statusTask[0].stylecss;

  status.appendChild(statusspan);
  tr.append(status);
  status.addEventListener("click", ChangeStatus);

  //   updatebtn
  let updbtn = document.createElement("td");
  updbtn.className = "p-4 text-center";
  updbtn.setAttribute("id", "updbtn");
  updbtn.setAttribute("data-id", tbody.children.length + 1);
  updbtn.innerText = "✏️";
  tr.append(updbtn);

  //   delete
  let deletebtn = document.createElement("td");
  deletebtn.className = "p-4 text-center";
  deletebtn.setAttribute("id", "delbtn");
  deletebtn.innerText = "🗑️";
  tr.append(deletebtn);
  // deletebtn.addEventListener("click", function (event) {
  //   tr.remove();
  //   Counter();
  // });

  tbody.appendChild(tr);

  form.reset();
  taskTitle.style.backgroundColor = "white";
});

function ChangeStatus(event) {
  let parent = event.target.parentElement;

  event.target.remove();

  let statusspan = document.createElement("span");

  statusspan.innerText = statusTask[2].t;
  statusspan.className = statusTask[2].stylecss;

  statusspan.addEventListener("click", function (e) {
    let parent = e.target.parentElement;

    e.target.remove();

    let statusspann = document.createElement("span");

    statusspann.innerText = statusTask[1].t;
    statusspann.className = statusTask[1].stylecss;

    statusspann.addEventListener("click", ChangeStatus);

    parent.appendChild(statusspann);
  });

  parent.appendChild(statusspan);
}

document.addEventListener("click", function (e) {
  if (e.target.matches("#delbtn")) {
    tr.remove();
    Counter();
  }
  if (e.target.matches("#updbtn")) {
    console.log(e.target.getAttribute("data-id"));
  }
});

function update() {}
