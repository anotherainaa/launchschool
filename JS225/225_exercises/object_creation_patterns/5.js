/*


Item
 - SKU Code - first 3 letters of item and first 2 letters of category
 - item name - consists of min 5 chars, one word, spaces valid but not counted as chars
 - category - consists of min 5 chars, one word, no spaces
 - quantity - must not be blank

ItemManager - reponsible for:
  - creating items
  - updating info about items
  - deleting items
  - querying info about items

Methods:
  - create - creates a new item
  - update - accept an SKU code, update information on item
  - delete - accept an SKU code, delete item from list
  - items - a list of all items
  - inStock - lists all items with quantity > 0
  - itemsInCategory = lists all the items for a given category

ReportManager
  - generate reports for a specific item or ALL items

Methods:
  - init - accepts ItemManager object as argument and assign it to items property
  - createReporter = accepts an SKU code
    - returned object has one method - itemInfo
    - logs to the console all properties of an object
  - reportInStock
    - logs to the console item names of all items that are in stock
*/

const ItemCreator = (() => {
  function generateSkuCode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
            category.replace(/\s/g, '').slice(0, 2).toUpperCase());
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();


const ItemManager = {
  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  items: [],

  getItem(skuCode) {
    return this.items.find(item => item.skuCode === skuCode);
  },

  update(skuCode, itemInformation) {
    let item = this.getItem(skuCode);
    Object.assign(item, itemInformation);
  },

  delete(skuCode) {
    let index = this.items.indexOf(this.getItem(skuCode));
    this.items.splice(index, 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(({quantity}) => quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
}

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
    return this;
  },

  reportInStock() {
    console.log(this.items.inStock().map(({itemName}) => itemName).join(','))
  },
  
  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
        
      },
    };
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.delete('SOCSP');
// ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

// const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10