let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getData();
});

function getData() {
  fetch("http://localhost:3000/toys")
    .then((data) => data.json())
    .then((data) => displayToys(data));
}
function displayToys(toys) {
  const toysContainer = document.querySelector("#toy-collection");
  toys.forEach((toy) => {
    const div = document.createElement("div");
    div.className = "card";
    const h2 = document.createElement("h2");
    h2.innerText = toy.name;
    div.appendChild(h2);
    const img = document.createElement("img");
    img.className = "toy-avatar";
    img.src = toy.image;
    div.appendChild(img);
    const p = document.createElement("p");
    p.innerText = `${toy.likes} likes`;
    div.appendChild(p);
    const button = document.createElement("button");
    button.className = "like-btn";
    button.id = toy.id;
    button.innerText = "Like ❤️";
    div.appendChild(button);
    toysContainer.appendChild(div);
  });
}

function setPost() {
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Jessie",
      image:
        "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
      likes: 0,
    }),
  })
    .then((data) => data.json)
    .then((response) => console.log(JSON.stringify(response)));
}

