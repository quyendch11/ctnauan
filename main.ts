import { Recipe } from "./ctnauan";
let gri :any = ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)'];
let recipe = new Recipe('Sườn xào chua ngọt',2,gri);
recipe.getIngredient()
console.log(recipe)