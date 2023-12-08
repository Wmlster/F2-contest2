let recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

function Display_Menu(food) {
  recipe_container.innerHTML = "";

  food.forEach((element) => {
    /* Creating card */
    let card = document.createElement("div");
    card.id = "card";

    /* Creating image */
    let img_div = document.createElement("div");
    img_div.id = "image";

    let img = document.createElement("img");
    img.src = element.imageSrc;
    img.alt = element.name;

    let p1 = document.createElement("p");
    p1.className = "p1";
    p1.innerText = element.type;

    img_div.append(img, p1);

    let Info = document.createElement("div");
    Info.id = "info";

    let one = document.createElement("div");
    one.id = "one";
    let h2 = document.createElement("h2");
    h2.innerText = element.name;
    let h31 = document.createElement("h3");
    h31.innerText = element.time;
    one.append(h2, h31);

    let two = document.createElement("div");
    two.id = "two";

    let nr = document.createElement("div");
    nr.id = "nr";
    let spn1 = document.createElement("span");
    spn1.className = "material-icons star";
    spn1.innerText = "kid_star";
    let h32 = document.createElement("h3");
    h32.innerText = element.rating;
    nr.append(spn1, h32);

    let icons = document.createElement("div");
    icons.className = "heart_comment_div";
    let like = document.createElement("button");
    like.setAttribute("onclick", "change_color()");
    like.className = "material-icons heart";
    like.innerText = "favorite";
    let spn2 = document.createElement("span");
    spn2.className = "material-icons comment";
    spn2.innerText = "mode_comment";
    icons.append(like, spn2);

    two.append(nr, icons);

    Info.append(one, two);

    console.log(Info);

    card.append(img_div, Info);

    recipe_container.append(card);
  });
}

/*Initial Display*/

let recipe_container = document.getElementById("menu");
Display_Menu(recipes);

/*search inputs */

let search = document.querySelector("#searchrecipe>input");
console.log(search);

search.addEventListener("input", (result) => {
  recipe_container.innerHTML = "";

  let txt = search.value.toLocaleLowerCase();

  let Search_Items = recipes.filter((element) => {
    return element.name.toLowerCase().includes(txt);
  });

  Display_Menu(Search_Items);
});

/* change color */

function change_color() {
  let hearti = event.target;
  hearti.classList.toggle("change_heart_color");
}

/*Display 4 and above*/

let rd1 = document.getElementById("above4");
rd1.addEventListener("click", fl1);

let above = recipes.filter((element) => {
  if (element.rating >= 4) {
    return element;
  }
});

function fl1() {
  Display_Menu(above);
}

/*Display Below 4 */

let rd2 = document.getElementById("below4");
rd2.addEventListener("click", fl2);

let below = recipes.filter((element) => {
  if (element.rating < 4) {
    return element;
  }
});

function fl2() {
  Display_Menu(below);
}

/*Display all recipes*/

let All_Recipes = document.getElementById("btn1");
All_Recipes.addEventListener("click", All_Recipes_function);

function All_Recipes_function() {
  Display_Menu(recipes);
}

/*Display veg recipes*/

let veg_recipes = recipes.filter((element) => {
  if (element.type == "veg") {
    return element;
  }
});

let veggie = document.getElementById("btn2");
veggie.addEventListener("click", veg_function);

function veg_function() {
  Display_Menu(veg_recipes);
}

/*Display Non-Veg recipes*/

let Non_veggie = document.getElementById("btn3");
Non_veggie.addEventListener("click", Non_veg_function);

function Non_veg_function() {
  Display_Menu(Non_veg_recipes);
}

let Non_veg_recipes = recipes.filter((element) => {
  if (element.type == "non-veg") {
    return element;
  }
});
