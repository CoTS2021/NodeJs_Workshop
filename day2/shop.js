const rl = require("readline-sync");

let inventory = [
  {
    name: "apple",
    category: "Fruit",
    price: 20,
  },
  {
    name: "shirt",
    category: "clothing",
    price: 500,
  },
  {
    name: "Book",
    category: "Stationery",
    price: 150,
  },
];

//function to display all products
function viewInventory() {
  console.log("Current Inventory");
  inventory.map(({ name, category, price }, i = 0) => {
    console.log(`${name}(${category}-Rs.${price})`);
  });
}

// function to add a new Product
function addProduct() {
  name = rl.question("Enter name of product");
  category = rl.question("Enter category of product:");
  price = rl.question("Enter price:");
  inventory.push({ name, category, price });
  console.log(`${name} is added to inventory`);
}

//function to remove a product by Name
const removeProduct = () => {
  name = rl.question("Enter name of product:");
  inventory = inventory.filter((item) => item.name !== name);
};

const filterProductByCategory = ()=>{
    const category = rl.question("Enter category:");
    const filtered = inventory.filter((item)=>{
        return item.category == category
    })
    filtered.forEach(({name,category,price})=>{
        console.log(`${name} - ${category} - Rs.${price}`)
    })
}

while (true) {
    console.log("\nMenu:");
    console.log("1. View Inventory");
    console.log("2. Add Product");
    console.log("3. Remove Product");
    console.log("4. Filter By Category")
    console.log("5. Exit");
    const choice = rl.question("Choose an option: ");

    switch (choice) {
        case "1":
            viewInventory();
            break;
        case "2":
            addProduct();
            break;
        case "3":
            removeProduct();
            break;
        case "4":
            filterProductByCategory();
            break;
        case "5":
            console.log("Exiting...");
            process.exit(0);
        default:
            console.log("Invalid option. Please try again.");
    }
}