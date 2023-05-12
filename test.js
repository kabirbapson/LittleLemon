const data = [
  {
    category: "Appetizers",
    id: 1,
    price: null,
    title: "Spinach Artichoke Dip",
    uuid: "1",
  },
  {
    category: "Appetizers",
    id: 2,
    price: null,
    title: "Hummus",
    uuid: "2",
  },
  {
    category: "Appetizers",
    id: 3,
    price: null,
    title: "Fried Calamari Rings",
    uuid: "3",
  },
  {
    category: "Appetizers",
    id: 4,
    price: null,
    title: "Fried Mushroom",
    uuid: "4",
  },
  {
    category: "Salads",
    id: 5,
    price: null,
    title: "Greek",
    uuid: "5",
  },
  {
    category: "Salads",
    id: 6,
    price: null,
    title: "Caesar",
    uuid: "6",
  },
  {
    category: "Salads",
    id: 7,
    price: null,
    title: "Tuna Salad",
    uuid: "7",
  },
  {
    category: "Salads",
    id: 8,
    price: null,
    title: "Grilled Chicken Salad",
    uuid: "8",
  },
  {
    category: "Beverages",
    id: 9,
    price: null,
    title: "Water",
    uuid: "9",
    
  },
  {
    category: "Beverages",
    id: 10,
    price: null,
    title: "Coke",
    uuid: "10",
    },
  
  {
    category: "Beverages",
    id: 11,
    price: null,
    title: "Beer",
    uuid: "11",
  },
  {
    category: "Beverages",
    id: 12,
    price: null,
    title: "Iced Tea",
    uuid: "12",
  },
];

function transformData(arr) {
  // create a new array where we will be storing the data
  let formatedData = [];

  while (arr.length !== 0) {
    // get the first title in array to filter the data
    let title = arr[0].category;
    // get all the data with the same category as our title
    let data = arr.filter((item) => item.category === title);
    // get the data data that does not have the same name as our title and make it our new array
    arr = arr.filter((item) => item.category !== title);
    // update the formated data
    formatedData.push({ title, data });
  }
  // return the formated data if available
  return formatedData;
}
