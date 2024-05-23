"use strict";

window.onload = load_category;

let menu = {
  drinks : [
     "Water", "Tea", "Sweet Tea", 
     "Coke", "Dr. Pepper", "Sprite"
   ],
  entrees : [
     "Hamburger w/ Fries", 
     "Grilled Cheese w/ Tater Tots",
     "Grilled Chicken w/ Veggies", 
     "Chicken Fried Steak w/ Mashed Potatoes",
     "Fried Shrimp w/ Coleslaw", 
     "Veggie Plate"
  ],
  desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
  ]
};



function load_category() {
  const category = document.getElementById("category");

  let category_keys = Object.keys(menu);

  for (let i = 0; i < category_keys.length; i++) {

    //Create the option element and set the 
    //text and value
    let theOption = new Option(category_keys[i].toUpperCase(), `${i}`);
    category.appendChild(theOption);

  }

  category.onchange = onCategoryChange;
}


function onCategoryChange() {

  const category = document.getElementById("category");
  const item = document.getElementById("item");

  

  let selected_category = category.value;
  let all_items_array = Object.values(menu);

  item.innerHTML = '<option value="">Select an item</option>';
  // item.innerHTML = `<option value=\"\">Select an item</option>`;

  if(selected_category == ""){
    return;
  }

  let items_scategory = all_items_array[Number(selected_category)];
  
  for (let i = 0; i < items_scategory.length; i++) {

    //Create the option element and set the 
    //text and value
    let theOption = new Option(items_scategory[i].toUpperCase(), `${i}`);
    item.appendChild(theOption);

  }

}
