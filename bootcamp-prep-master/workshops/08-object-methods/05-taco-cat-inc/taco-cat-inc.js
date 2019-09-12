let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  currentInventory: function() {
    let grandTotal = 0
    for (let key in this) {
      const category = this[key]
      if (typeof category === 'object'){
        for (let food in category) {
          const data = category[food]
          const total = data.cost * data.quantity
          grandTotal += total
        }
      }
    }
    return grandTotal
  },

  sale: function() {},

  cash: 0
};


