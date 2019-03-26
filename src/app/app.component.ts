import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes: Recipe[] = [
    new Recipe('Sundae', ['vanilla ice cream', 'chocolate fudge', 'banana', 'nuts', 'cherry'], ['3 scoops vanilla ice cream', 'split banana in half', 'place halves on each side of vanilla ice cream', 'drizzle fudge on top', 'sprinkle nuts', 'place cherry on top']),

    new Recipe('Banana Bread', ['3 overly riped (brown) bananas', 'chocolate chips', '1 1/2 flour', '1 tsp vanilla extract', '1 large egg, beaten', '1 tsp baking soda', '3/4 c sugar', 'pinch of salt', '1/3 c melted butter'], ['Preheat oven to 350 deg F', 'mash bananas', 'mix in baking soda, salt, sugar, eggs, and vanilla extract', 'coat chocolate chips with flour', 'mix bananas and chocolate together', 'coat a baking pan with non-stick spray', 'bake for 50 mins to 1 hour.']),

    new Recipe('Fried Chicken', ['2 whole free range chicken', 'vegetable oil', '6 cups all purpose flour', '5 tablespoons salt', ' 4 tablespoons ground black pepper', '2 tablespoons garlic powder', '1 tablespoon onion powder', '2 teaspoons cayenne pepper', '2 cups buttermilk'], ['Cut whole chickens into 4 breats, 4 thighs, 4 legs, & 4 wings', 'Preheat oil to 325 degrees F', 'In large bowl, combine flour, salt, black pepper, garlic powder, onion powder and cayenne pepper', 'Pour buttermilk into another bowl large enough for the chicken to be immersed', 'Prepare dredging station - Place chicken in a bowl. Next to bowl of chicken have buttermilk and then dry mix', 'lightly dust them with your flour mixture then dip them in the buttermilk until fully coated.', 'Place coated chicken into flour mixture'])
  ]

  selectedRecipe = null;

  showRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  hideRecipe() {
    this.selectedRecipe = null;
  }


}
