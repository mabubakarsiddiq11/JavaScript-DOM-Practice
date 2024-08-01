const root = document.getElementById("root");

// h1 Create
let h1 = document.createElement("h1");
root.appendChild(h1);

// H1 Text
let h1Text = document.createTextNode("Document Object Model!");
h1.appendChild(h1Text);

// H1 Styling
h1.style.color = "red";
h1.style.textAlign = "center";
h1.style.fontSize = "45px";

const oneDiv = () => {
    // div Create
let div = document.createElement("div");
root.appendChild(div);

// Div Styling
div.style.width = "100%";
div.style.margin = "30px 0";
div.style.display = "flex";
div.style.justifyContent = "space-evenly";
div.style.alignItems = "center";

// Paragraph Tag Create
let p = document.createElement("p");
div.appendChild(p);
p.style.width = "40%";

let paragraph = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium recusandae numquam corrupti quibusdam iure omnis aperiam asperiores, architecto molestias adipisci cupiditate fuga vero deleniti. Eaque architecto adipisci ex, aut sit sint soluta ipsam excepturi voluptas? Ullam, laboriosam exercitationem, suscipit omnis quas quod aliquid dolor sint harum consequuntur voluptatum incidunt."
);
p.appendChild(paragraph);

// Image Tag Create
let img = document.createElement("img");
div.appendChild(img);
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrE9eTcPgQUwqBNN1GcrKLDaqVypIhWzlq1w&s";

}

oneDiv()

const twoDiv = () => {
  // div Create
let div = document.createElement("div");
root.appendChild(div);

// Div Styling
div.style.width = "100%";
div.style.margin = "30px 0";
div.style.display = "flex";
div.style.justifyContent = "space-evenly";
div.style.alignItems = "center";
div.style.flexDirection = "row-reverse"
div.style.marginTop= "30px"

// Paragraph Tag Create
let p = document.createElement("p");
div.appendChild(p);
p.style.width = "40%";

let paragraph = document.createTextNode(
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium recusandae numquam corrupti quibusdam iure omnis aperiam asperiores, architecto molestias adipisci cupiditate fuga vero deleniti. Eaque architecto adipisci ex, aut sit sint soluta ipsam excepturi voluptas? Ullam, laboriosam exercitationem, suscipit omnis quas quod aliquid dolor sint harum consequuntur voluptatum incidunt."
);
p.appendChild(paragraph);

// Image Tag Create
let img = document.createElement("img");
div.appendChild(img);
img.src =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ArfBXmKLohIECxnbSCljZBWxKRwjAwXPrQ&s";

}

twoDiv()
oneDiv()
twoDiv()

