import "./styles.css";

const onclickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  const completedButton = document.createElement("button");
  completedButton.innerText = "完了";
  completedButton.addEventListener("click", () => {});

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incompleted-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completedButton);
  div.appendChild(deleteButton);

  document.getElementById("incompleted-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
