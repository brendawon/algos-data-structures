function inventoryList() {
  //store items in array
  let items = [];
  return {
    //push item into array
    add: function (name) {
      items.push(name);
    },
    //filter out name from item array
    remove: function (name) {
      items = items.filter((item) => item !== name);
    },
    getList: function () {
      //return array
      return items;
    },
  };
}
