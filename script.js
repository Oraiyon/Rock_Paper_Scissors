const paraOne= document.createElement("p");
paraOne.textContent="Hey i'm red!";
paraOne.style.color= "red";
container.appendChild(paraOne);

const headThree= document.createElement("h3");
headThree.textContent="Hey i'm a blue h3!";
headThree.style.color= "blue";
container.appendChild(headThree);

const div= document.createElement("div");
div.setAttribute("style", "background-color: pink; border: 1px solid black;");
container.appendChild(div);

const headOne= document.createElement("h1");
headOne.textContent= "I'm in a div";
div.appendChild(headOne);

const paraTwo= document.createElement("p");
paraTwo.textContent= "ME TOO!";
div.appendChild(paraTwo);
