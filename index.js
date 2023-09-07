window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function displayPoem(p) {
    console.log({p})
    if (!p) return;
    const content = document.getElementById("content");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    title.innerHTML = p.title;
    author.innerHTML = p.author;
    p.poem.split("\n").forEach((line) => {
      line.split(" ").forEach((word) => {
        const text = document.createElement("span");
        text.innerHTML += (word + `&nbsp;`);
        if (Math.random() < 0.75) {
          text.style.background = "black";
          text.style.color = "black";
          text.style.visibility = "hidden";
        }
        content.appendChild(text);
      }) 
    })
  }

  // data from poetry foundation dataset found on kaggle -- https://www.kaggle.com/datasets/tgdivy/poetry-foundation-poems
  fetch("ghosts.json").then((r) => r.json()).then((result) => {
    displayPoem(result[getRandomInt(0, result.length)]);
  });
});