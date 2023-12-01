import { Injectable } from '@angular/core';
import { FilterRecipe } from '../models/filterRecipes';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class FilterRecipesService {

  recipes: Recipe[] = [];

  filterRecipes(filter: FilterRecipe): Recipe[] {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data.results;
    })

    return this.recipes.filter(recipe => {
      if (filter.recipeName && !filter.recipeName.includes(recipe.name)) {
        return false;
      }
    })
  }

  constructor(private recipeService: RecipeService) { }
}
