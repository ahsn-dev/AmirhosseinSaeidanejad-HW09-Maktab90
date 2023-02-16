let container = document.getElementById("container");

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
  },
  Flowering: {
    appleTree: {},
    magnolia: {},
  },
};

function createTree(container, data) {
  let ul = document.createElement("ul");
  for (let key in data) {
    let li = document.createElement("li");
    li.textContent = key;
    ul.appendChild(li);

    let nestedData = data[key];
    if (Object.keys(nestedData).length > 0) {
      let nestedUl = document.createElement("ul");
      for (let nestedKey in nestedData) {
        let nestedLi = document.createElement("li");
        nestedLi.textContent = nestedKey;
        nestedUl.appendChild(nestedLi);
      }
      li.appendChild(nestedUl);
    }
  }
  container.appendChild(ul);
}

createTree(container, data);

// recursive way
// function createTree(container, data) {
//   let ul = document.createElement("ul");
//   for (let key in data) {
//     let li = document.createElement("li");
//     li.textContent = key;
//     ul.appendChild(li);
//     if (Object.keys(data[key]).length > 0) {
//       createTree(li, data[key]);
//     }
//   }
//   container.appendChild(ul);
// }
