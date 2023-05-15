const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

document.querySelector('.all-to-right').addEventListener('click', alltoright)
document.querySelector('.checked-to-right').addEventListener('click', checkedtoright)
document.querySelector('.checked-to-left').addEventListener('click', checkedtoleft)
document.querySelector('.all-to-left').addEventListener('click', alltoleft)

// InitialValues
let leftList = [
  { id: "item1", checked: false, title: "PHP" },
  { id: "item2", checked: false, title: "Python" },
  { id: "item3", checked: false, title: "Ruby" },
  { id: "item4", checked: false, title: "C++" },
];
let rightList = [
  { id: "item5", checked: false, title: "HTML" },
  { id: "item6", checked: false, title: "Css" },
  { id: "item7", checked: false, title: "JavaScript" },
  { id: "item8", checked: false, title: "Java" },
];

renderDom(leftList, rightList);

// Render Dom
function renderDom(leftListToRender, rightListToRender) {
  leftListToRender.forEach((item) => {
    leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
  });

  rightListToRender.forEach((item) => {
    rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
  });

  registerEvents();
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function registerEvents() {
}

function alltoright() {
  rightList.unshift(...leftList)
  leftList.length = 0
  clearDom()
  renderDom(leftList, rightList)
  handlDisable()
}

function alltoleft() {

  leftList.unshift(...rightList)
  rightList.length = 0
  clearDom()
  renderDom(leftList, rightList)
  handlDisable()
}

function handlDisable() {
  switch (leftList.length) {
    case 0:
      document.querySelector('.all-to-right').classList.add('disabled')
      document.querySelector('.checked-to-right').classList.add('disabled')
      break;
    default:
      document.querySelector('.all-to-right').classList.remove('disabled')
      document.querySelector('.checked-to-right').classList.remove('disabled')
      break;

  }

  switch (rightList.length) {
    case 0:
      document.querySelector('.all-to-left').classList.add('disabled')
      document.querySelector('.checked-to-left').classList.add('disabled')
      break;
    default:
      document.querySelector('.all-to-left').classList.remove('disabled')
      document.querySelector('.checked-to-left').classList.remove('disabled')
      break;

  }

}


function checkedtoleft() {
  const parentdiv = document.querySelector('.side.right-side');
  swap_items(parentdiv, rightList, leftList)
  clearDom()
  handlDisable()
  renderDom(leftList, rightList)
}

function checkedtoright() {
  const parentdiv = document.querySelector('.side.left-side');
  swap_items(parentdiv, leftList, rightList)
  clearDom()
  handlDisable()
  renderDom(leftList, rightList)
}

function swap_items(parent_div, remove_array, add_array) {
  const checkedboxes = parent_div.querySelectorAll('.box input:checked')
  rightList
  const ids_list = []

  checkedboxes.forEach(element =>
    ids_list.push(element.id)
  )
  console.log(ids_list)
  const templist = []
  ids_list.forEach(id => {
    const index = remove_array.findIndex(item => item.id === id)
    const theitem = remove_array.splice(index, 1)[0]
    templist.push(theitem)
  })
  console.log(templist)
  add_array.unshift(...templist)

}

