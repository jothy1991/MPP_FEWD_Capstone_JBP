
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {
      id: 1,
      name: 'Bib',
      description:
        'Baby Bib helps with keeps baby cloth clean during meal time',
      price: 10.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png',
      rating: 4,
      stock: 30,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 2,
      name: 'Blanket',
      description: 'Baby blanket helps keep the baby warm',
      price: 20.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyblanket.png',
      rating: 5,
      stock: 15,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 3,
      name: 'Baby Bottle',
      description: 'Baby bottle with 10 oz capacity',
      price: 8.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyBottle.png',
      rating: 5,
      stock: 55,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 4,
      name: 'Baby Girl Dress',
      description: 'Baby Girl Dress with beautiful colors',
      price: 13.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babydress.png',
      rating: 5,
      stock: 55,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 5,
      name: 'Baby Monitor',
      description: 'Baby monitor while baby is sleeping away from mom or dad',
      price: 30.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babymonitor.png',
      rating: 5,
      stock: 40,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 6,
      name: 'Baby Socks',
      description: 'keeps baby warm, fits 0 to 12 months old',
      price: 2.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babysocks.png',
      rating: 3,
      stock: 18,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 7,
      name: 'Baby Stroller',
      description: 'Baby Stroller with  multiple seat levels',
      price: 69.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babystroller.png',
      rating: 4,
      stock: 100,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 8,
      name: 'Baby Suit',
      description: 'Baby Suite fits 3-6 months old baby boy',
      price: 9.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babysuit.png',
      rating: 4,
      stock: 70,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 9,
      name: 'Baby Walker',
      description: 'Helps babies as they start learning how to walk',
      price: 45.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babywalker.png',
      rating: 5,
      stock: 10,
      category: 'Household and Beauty',
      subcategory: 'Baby care'
    },
    {
      id: 10,
      name: 'Bandage',
      description: 'Flexible Fabric, 100-Count Boxes',
      price: 5.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/bandage.png',
      rating: 4,
      stock: 58,
      category: 'Household and Beauty',
      subcategory: 'Drug Store'
    },
    {
      id: 11,
      name: 'Severe Cold and Flu',
      description: 'Severe Cold and Flu Medicine (4 fl. oz. Bottle)',
      price: 6.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/coldandflusyrup.png',
      rating: 5,
      stock: 17,
      category: 'Household and Beauty',
      subcategory: 'Drug Store'
    },
    {
      id: 12,
      name: 'Extra Strength Pain Relief Caplets',
      description:
        'Excedrin Extra Strength Pain Relief Caplets 200 count For Headache Relief',
      price: 8.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/painrelief.png',
      rating: 5,
      stock: 90,
      category: 'Household and Beauty',
      subcateogry: 'Drug Store'
    },
    {
      id: 13,
      name: '100 Piece First Aid Kit',
      description:
        '100 Piece First Aid Kit, Exceeds OSHA ANSI Standards for 10 People - Office, Home, Car, School, Emergency, Survival, Hunting, and Sports',
      price: 14.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/firstaidkit.png',
      rating: 5,
      stock: 10,
      category: 'Household and Beauty',
      subcateogry: 'Drug Store'
    },
    {
      id: 14,
      name: 'Cold Relief Caplets',
      description: 'Tylenol Cold Multi-Symptom Relief Caplets, 24 Count',
      price: 6.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/coldpills.png',
      rating: 2,
      stock: 17,
      category: 'Household and Beauty',
      subcateogry: 'Drug Store'
    },
    {
      id: 15,
      name: 'Air Freshener',
      description: 'Air Freshener, Powder Fresh, 8 oz',
      price: 1.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/airfreshner.png',
      rating: 5,
      stock: 12,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 16,
      name: 'All Purpose Cleaner',
      description: '40-oz. Summer Citrus Cleaner',
      price: 2.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/cleaningLiquid.png',
      rating: 4,
      stock: 45,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 17,
      name: 'Disinfecting Wipes',
      description:
        'Disinfecting Wipes Value Pack, Fresh Scent and Citrus Blend, 225 Count',
      price: 8.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/disinfectantspray.png',
      rating: 5,
      stock: 5,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 18,
      name: 'Reusable Latex Gloves',
      description: 'Reusable Latex Gloves, Medium, 2 Pairs/2 Colors',
      price: 4.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/workgloves.png',
      rating: 2,
      stock: 0,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 19,
      name: 'Glass Cleaner',
      description: 'Perfect Glass Cleaner, 32-Ounce',
      price: 7.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/glasscleaner.png',
      rating: 4,
      stock: 10,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 20,
      name: 'Toilete Paper',
      description: '6 2-Pack, Regular Roll Toilete Paper',
      price: 7.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/toiletpaper.png',
      rating: 2,
      stock: 0,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 21,
      name: 'Beauty Soap Bar',
      description: 'Beauty Bar, White 4 oz, 14 bar',
      price: 17.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/soap.png',
      rating: 2,
      stock: 40,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 22,
      name: 'Laundry Detergent',
      description: 'TLaundry Detergent 72-load Tub',
      price: 17.55,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/house-royaltyfree/detergent.png',
      rating: 4,
      stock: 40,
      category: 'Household and Beauty',
      subcategory: 'Household Supplies'
    },
    {
      id: 23,
      name: 'Apple Juice',
      description: 'Pack of 12, apple juice',
      price: 5.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/applejuice.png',
      rating: 4,
      stock: 250,
      category: 'Pantry Items',
      subcategory: 'Beverages'
    },
    {
      id: 24,
      name: 'Banana-Orange Juice',
      description: '16.0 ounce bottle.',
      price: 1.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/bananaorangejuice.png',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Beverages'
    },
    {
      id: 25,
      name: 'Cranberry Juice',
      description: '32 ounce bottle.',
      price: 4.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/cranberryjuice.png',
      rating: 4,
      stock: 250,
      category: 'Pantry Items',
      subcategory: 'Beverages'
    },
    {
      id: 26,
      name: 'Strawberry Lemonade',
      description: 'Strawberry Lemonade, 59 oz.',
      price: 2.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/strawberrylemonade.png',
      rating: 4,
      stock: 150,
      category: 'Pantry Items',
      subcategory: 'Beverages'
    },
    {
      id: 27,
      name: 'Super Food Green Smoothie',
      description: '15 oz bottle.',
      price: 2.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/greensmoothiejuice.png',
      rating: 4,
      stock: 150,
      category: 'Pantry Items',
      subcategory: 'Beverages'
    },
    {
      id: 28,
      name: 'Assorted pickles',
      description: 'Delicious Pickle',
      price: 1.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/canfood-royaltyfree/pickels.png',
      rating: 4,
      stock: 250,
      category: 'Pantry Items',
      subcategory: 'Canned Goods'
    },
    {
      id: 29,
      name: 'Tomatoe Sauce',
      description: 'Sauce made with tomato',
      price: 1.59,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/canfood-royaltyfree/tomatoesauce.png',
      rating: 4,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Canned Goods'
    },
    {
      id: 30,
      name: 'All Purpose Flour',
      description: '5 lb bag',
      price: 3.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/allpurposeflour.png',
      rating: 4,
      stock: 350,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 31,
      name: 'Rice Flour',
      description: '5 lb bag',
      price: 6.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/riceflour.png',
      rating: 4,
      stock: 350,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 32,
      name: 'Sugar',
      description: 'White cane sugar, 32 oz.',
      price: 2.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/sugar.png',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      name: 'Coconut Oil',
      description: 'Organic, 54 oz bottle.',
      price: 8.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/oil.png',
      rating: 4,
      stock: 100,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 34,
      name: 'Olive Oil',
      description: 'Extra virgin olive oil, 17 oz bottle.',
      price: 4.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/oliveoil.png',
      rating: 4,
      stock: 200,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 35,
      name: 'Salt',
      description: 'Iodized salt, 26 oz.',
      price: 0.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/salt.png',
      rating: 5,
      stock: 400,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 36,
      name: 'Vinegar',
      description: 'White vinegar, plastic, 64 oz.',
      price: 2.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/vinegar.png',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Cooking and Baking Needs'
    },
    {
      id: 37,
      name: 'Spaghetti',
      description: 'Thin spaghetti, 16 oz.',
      price: 1.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/spaghetti.jpg',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Pasta and Noodles'
    },
    {
      id: 38,
      name: 'Lasagne',
      description: 'Lasagne, 16 oz.',
      price: 4.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/lasagne.jpg',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Pasta and Noodles'
    },
    {
      id: 39,
      name: 'Whole Grain Penne',
      description: '16 oz.',
      price: 1.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/wholegrainpenne.png',
      rating: 4,
      stock: 300,
      category: 'Pantry Items',
      subcategory: 'Pasta and Noodles'
    },
    {
      id: 40,
      name: 'Chocolate Cookies',
      description: 'Golden Chocolate Cookies, 1.76 oz, 12 count.',
      price: 5.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/chocolatecookies.png',
      rating: 5,
      stock: 200,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 41,
      name: 'Chocolate Protein Bars',
      description: '6 count value pack.',
      price: 5.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/chocolatebar.png',
      rating: 5,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 42,
      name: 'Mixed Nuts',
      description: 'Salted Mixed Nuts, 18 oz.',
      price: 8.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/mixednuts.png',
      rating: 5,
      stock: 200,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 43,
      name: 'Jelly Beans',
      description: 'Assorted Flavors Jelly Beans, 32 oz.',
      price: 4.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/JellyBeans.png',
      rating: 5,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 44,
      name: 'Ginger Cookies',
      description: 'Ginger Cookies pack, 24 count.',
      price: 4.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/gingercookie.png',
      rating: 5,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 45,
      name: 'Nutty Cookies',
      description: '1 lb container.',
      price: 9.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/nuttycookies.png',
      rating: 3,
      stock: 200,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 46,
      name: 'Popcorn',
      description: 'Homestyle, 3 count',
      price: 1.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/popcorn.png',
      rating: 5,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 47,
      name: 'Oat and Raisins Cookies',
      description: '16 oz bag.',
      price: 7.79,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/oatmealraisincookies.png',
      rating: 5,
      stock: 500,
      category: 'Pantry Items',
      subcategory: 'Snacks'
    },
    {
      id: 48,
      name: 'Baguette',
      description: 'Classic Baguettes, 8ct',
      price: 3.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/baguette.png',
      rating: 5,
      stock: 90,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 49,
      name: 'Bluerberry Pie',
      description: '12 inch blueberry pie',
      price: 5.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/blueberrypie.png',
      rating: 3,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 50,
      name: 'Brownies',
      description: 'Brownies pieces, 12 ct',
      price: 2.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/brownie.png',
      rating: 5,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 51,
      name: 'Cherry Pie',
      description: '12 inch cherry pie',
      price: 4.88,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/cherrypie.png',
      rating: 4,
      stock: 36,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 52,
      name: 'Cupcakes',
      description: 'Vanilla cupcakes with vanilla frosting, 6 ct',
      price: 2.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/cupcakes.png',
      rating: 4,
      stock: 12,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 53,
      name: 'Country Potato Bread',
      description: 'Oroweat, Country Potato Bread, 24 oz',
      price: 3.25,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breadandbakeryimages/oroweat%20potatoe%20toast%20bread.jpg',
      rating: 5,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 54,
      name: 'Dinner Rolls',
      description: 'Dinner Rolls, 12 ct',
      price: 5.3,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/dinnerrolls.png',
      rating: 1,
      stock: 3,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 55,
      name: 'Chocolate Eclairs',
      description: 'Chocolate Eclair with cream filling, 6 ct',
      price: 3.55,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/eclair.png',
      rating: 2,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 56,
      name: 'Potato Loaf',
      description: 'Potato Loaf, 11.36 oz',
      price: 3.3,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/potatoloaf.png',
      rating: 4,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 57,
      name: 'Whole Wheat Toast',
      description: '100% Whole Wheat Thins, 12 oz',
      price: 2.35,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/wholewheattoast.png',
      rating: 3,
      stock: 14,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 58,
      name: 'White Toast',
      description: 'Sliced White Toast',
      price: 2.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/slicedwhitetoast.png',
      rating: 4,
      stock: 350,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 59,
      name: 'Traditional Bread',
      description: 'Tradition all purpose bread',
      price: 2.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/traditionalbread.png',
      rating: 4,
      stock: 350,
      category: 'Perishables',
      subcategory: 'Bread and Bakerye'
    },
    {
      id: 60,
      name: 'Feta Cheese',
      description: 'Feta Crumbles, Mediterranean Herbs, 6 oz ',
      price: 7.54,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cheese-royaltyfree/fetacheese.png',
      rating: 5,
      stock: 20,
      category: 'Perishables',
      subcategory: 'Cheese'
    },
    {
      id: 61,
      name: 'Emental Cheese',
      description: 'Emental Wedge, 8 oz',
      price: 8.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cheese-royaltyfree/ementalcheese.png',
      rating: 5,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Cheese'
    },
    {
      id: 62,
      name: 'Swiss Cheese',
      description: 'Organic Swiss Cheese, 8 oz ',
      price: 5.89,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/cheese-royaltyfree/swisscheese.png',
      rating: 2,
      stock: 3,
      category: 'Perishables',
      subcategory: 'Cheese'
    },
    {
      id: 63,
      name: 'Butter',
      description: 'Sweet Cream Butter, Unsalted, 1 lb ',
      price: 4.47,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/dairy-royaltyfree/butter.jpg',
      rating: 4,
      stock: 320,
      category: 'Perishables',
      subcategory: 'Dairy and Eggs'
    },
    {
      id: 64,
      name: 'Organic Fat Free Milk',
      description: 'Organic Fat Free Milk, Pasteurized, Gallon, 128 oz ',
      price: 7.0,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/dairy-royaltyfree/skimmilk.png',
      rating: 2,
      stock: 0,
      category: 'Perishables',
      subcategory: 'Dairy and Eggs'
    },
    {
      id: 65,
      name: 'Organic Whole Milk',
      description: 'Organic Whole Milk, Pasteurized, Gallon, 128 oz ',
      price: 6.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/dairy-royaltyfree/wholemilk.png',
      rating: 4,
      stock: 60,
      category: 'Perishables',
      subcategory: 'Dairy and Eggs'
    },
    {
      id: 66,
      name: 'Eggs',
      description: 'Large white eggs, 12 ct',
      price: 3.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/dairy-royaltyfree/eggs.png',
      rating: 1,
      stock: 3,
      category: 'Perishables',
      subcategory: 'Dairy and Eggs'
    },
    {
      id: 67,
      name: 'Chicken Pot Pie',
      description: 'Pot Pies, Chicken, 16 oz (Frozen) ',
      price: 2.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/potpie.png',
      rating: 5,
      stock: 50,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 68,
      name: 'Beef StirFri Dinner',
      description: 'Fully Cooked Beef StirFri Dinner, 20 oz (Frozen)',
      price: 9.99,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/beefstirfridinner.png',
      rating: 3,
      stock: 20,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 69,
      name: 'Gluten Free Cheese Pizza',
      description: 'Gluten Free Pizza, Three Cheese, 10 oz (Frozen)',
      price: 6.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/cheesepizza.png',
      rating: 1,
      stock: 2,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 70,
      name: 'Pepperoni Cheese Pizza',
      description: 'Pepperoni Pizza, 10 oz (Frozen)',
      price: 9.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/pepperonipizza.png',
      rating: 1,
      stock: 2,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 71,
      name: 'Fries',
      description: 'Organic Fries, 16 oz (Frozen) ',
      price: 3.94,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/fries.png',
      rating: 3,
      stock: 0,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 72,
      name: 'Cheese Burger Sliders',
      description:
        'Frozen Cheese Burger Slider sandwiches, 6 sandwiches, 21.90 oz',
      price: 5.74,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/frozenfood-royaltyfree/cheeseburgerslider.png',
      rating: 4,
      stock: 30,
      category: 'Perishables',
      subcategory: 'Frozen Foods'
    },
    {
      id: 73,
      name: 'Apricot',
      description:
        'Fresh apricots offer a plentiful supply of vitamin C.  Priced per each.',
      price: 0.29,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/apricot.jpg',
      rating: 4,
      stock: 250,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 74,
      name: 'Avocado',
      description:
        'Each serving of creamy, delicious avocado offers nearly 20 vitamins, minerals and phytonutrients  Priced per each.',
      price: 0.19,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg',
      rating: 5,
      stock: 250,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 75,
      name: 'Banana',
      description: 'Product of Indonesia.  Priced per each.',
      price: 1.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/banana.jpg',
      rating: 5,
      stock: 100,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 76,
      name: 'Cantaloupe',
      description: 'Product of China.  Priced per each, medium.',
      price: 3.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/cantaloupe.jpg',
      rating: 3,
      stock: 150,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 77,
      name: 'Fuji Apples',
      description: 'Organic and sourced locally.  Priced per each.',
      price: 0.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/fuji apples.jpg',
      rating: 4,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 78,
      name: 'Gala Apples',
      description: 'Organic and sourced locally.  Priced per each.',
      price: 0.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/gala apples.jpg',
      rating: 4,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 79,
      name: 'Granny Smith Apples',
      description: 'Organic and sourced locally.  Priced per each.',
      price: 0.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/granny smith apples.jpg',
      rating: 4,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 80,
      name: 'Mandarin Oranges',
      description: 'Grown in the USA. 3lb.',
      price: 5.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/mandarin oranges.jpg',
      rating: 5,
      stock: 100,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 81,
      name: 'Mango',
      description: 'Red mango.  Priced per each.',
      price: 1.5,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/mango.jpg',
      rating: 4,
      stock: 150,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 82,
      name: 'Melon',
      description: 'Honeydew melon.  Priced per each.',
      price: 2.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/melon.jpg',
      rating: 4,
      stock: 100,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 83,
      name: 'Navel Oranges',
      description: 'Grown in the USA  Priced per each.',
      price: 0.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/navel oranges.jpg',
      rating: 4,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 84,
      name: 'Nectarine',
      description: 'Sourced from China.  Priced per each.',
      price: 0.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/nectarines.jpg',
      rating: 5,
      stock: 200,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 85,
      name: 'Pear',
      description: "Organic D'Anjou pears, large.  Priced per each.",
      price: 1.19,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/pear.jpg',
      rating: 4,
      stock: 150,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 86,
      name: 'Pineapple',
      description: 'Gold pineapple.  Priced per each.',
      price: 3.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/pineapple.jpg',
      rating: 4,
      stock: 150,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 86,
      name: 'Plum',
      description: 'Organic and sweet.  Priced per each.',
      price: 0.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/plum.jpg',
      rating: 4,
      stock: 100,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 87,
      name: 'Pomegranate',
      description: 'California grown.  Priced per each.',
      price: 0.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/pomegranate.jpg',
      rating: 4,
      stock: 200,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 88,
      name: 'Raspberries',
      description: 'Organic and sourced locally.  Priced per 2lb clamshell.',
      price: 1.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/raspberries.jpg',
      rating: 4,
      stock: 100,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 89,
      name: 'Red Grapes',
      description: 'Red, seedless.  Priced per 2lb bag.',
      price: 7.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/red grapes.jpg',
      rating: 4,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 90,
      name: 'Strawberries',
      description: 'Organic and locally grown.  Priced per 3lb clamshell.',
      price: 7.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/fruitsimages/strawberries.jpg',
      rating: 5,
      stock: 300,
      category: 'Produce',
      subcategory: 'Fruits'
    },
    {
      id: 91,
      name: 'Asparagus',
      description: 'Organic, 1 bunch.',
      price: 6.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/asparagus.jpg',
      rating: 5,
      stock: 300,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 92,
      name: 'Baby Carrots',
      description: 'Organic, 1 lb bag.',
      price: 1.59,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/baby carrots.jpg',
      rating: 5,
      stock: 200,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 93,
      name: 'Broccoli Crowns',
      description: 'Organic, 1 crown.',
      price: 1.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/broccoli crowns.jpg',
      rating: 5,
      stock: 300,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 94,
      name: 'Brussels Sprouts',
      description: 'Locally sourced. 1lb bag.',
      price: 1.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/Brussels sprouts.jpg',
      rating: 5,
      stock: 150,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 95,
      name: 'Cabbage',
      description: 'Green, 1 head.',
      price: 1.98,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/cabbage.jpg',
      rating: 5,
      stock: 150,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 96,
      name: 'Carrots',
      description: 'Orange carrots. 2lb bag.',
      price: 1.89,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/carrots.jpg',
      rating: 4,
      stock: 150,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 97,
      name: 'Cauliflower',
      description: 'One head',
      price: 2.49,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/cauliflower.jpg',
      rating: 4,
      stock: 50,
      category: 'Produce',
      subcategory: 'Vegetables'
    },
    {
      id: 98,
      name: 'Celery',
      description: 'One medium.',
      price: 1.29,
      imagelink:
        'https://webmppcapstone.blob.core.windows.net/vegetableimages/celery.jpg',
      rating: 5,
      stock: 150,
      category: 'Produce',
      subcategory: 'Vegetables'
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  return state;
};

export default cartReducer;
