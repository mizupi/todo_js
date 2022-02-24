import "./styles.css";

const onclickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  li.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  const completedButton = document.createElement("button");
  completedButton.innerText = "完了";
  completedButton.addEventListener("click", () => {
    deleteFromIncompletedList(completedButton.closest("li"));

    const addTarget = completedButton.closest("li");

    const text = addTarget.querySelector("p").innerText;

    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    document.getElementById("completed-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompletedList(deleteButton.closest("li"));
  });

  li.appendChild(p);
  li.appendChild(completedButton);
  li.appendChild(deleteButton);

  document.getElementById("incompleted-list").appendChild(li);
};

const deleteFromIncompletedList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
