const states = window.__states__;

window.onload = function () {
  createGameCards(states);
};

const domObject = {};

function createGameCards(states) {
  const fragmentContainer = document.createDocumentFragment();
  states.forEach((state) => {
    const $state = document.createElement("li");
    $state.dataset.flipped = "false";

    const keyValue = state.toLowerCase();
    domObject[keyValue] = {
      node: $state,
      name: state,
    };

    fragmentContainer.appendChild($state);
  });

  const $container = document.querySelector(".js-container");
  $container.appendChild(fragmentContainer);
}

const $input = document.querySelector(".js-input");
$input.addEventListener("keyup", function (e) {
  const searchTerm = this.value;

  const state = findState(searchTerm);

  updatePage(state);
});

function findState(searchTerm = "") {
  const normalizedSearchTerm = searchTerm.toLowerCase();
  return domObject[normalizedSearchTerm];
}

function updatePage(stateObj) {
  if (!stateObj) return;

  const { node, name } = stateObj;

  node.dataset.flipped = true;
  node.innerText = name;

  $input.value = "";
}
