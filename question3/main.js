function createList() {
  const list = document.createElement("ul");
  let item;
  while (
    (item = prompt(
      "Enter the content for the list item (or press Esc to finish):"
    ))
  ) {
    if (!item) {
      break;
    } else {
      const listItem = document.createElement("li");
      listItem.innerText = item;
      list.appendChild(listItem);
    }
  }

  document.body.appendChild(list);
}

createList();
