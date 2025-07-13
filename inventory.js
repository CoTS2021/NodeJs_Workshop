
const readline = require('readline-sync')
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
  {
    name : "laptop",
    category:"eletronic",
    price:100000
  },
  {
    name : "Iphone",
    category:"eletronic",
    price :100000
  }
];

// https://github.com/saugat1070

const viewInventory = ()=>{
    inventory.map((item)=>{
        console.log(item)
    })
}

const addInventory = ()=>{
    let name = readline.question("Enter name of product:");
    let category = readline.question("Enter category of product:");
    let price = readline.question("Enter price of product:");
    inventory.push({name,category,price});
    console.log(`Thank you for adding ${name}`);
}


while(true){
    console.log("Welcome to Hamro Dokan");
    console.log("1.View All dokan ko saman");
    console.log("2. add dokan ko saman");
    console.log("3.remove bigreko saman");
    console.log("4. filter saman by Category");
    console.log("5.Exit")
    const choose = readline.question("enter your choice:");
    switch(choose){
        case "1" : {
            viewInventory();
            break;
        }

        case "2":{
            addInventory();
            break;
        }

        case "5":{
            console.log("Thank you for shopping");
            process.exit(0);
        }
        default:{
            console.log("please enter valid chooice")
        }
    }

}