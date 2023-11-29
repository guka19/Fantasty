import { Injectable } from '@angular/core';
import { FilterRecipes } from '../models/filterRecipes';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class FilterRecipesService {

  filterRecipes(filter: FilterRecipes): Recipe[] {
    let recipes: Recipe[] = [];
    this.recipeService.getRecipes().subscribe(data => {
        recipes = data.results;
    })
  }

  constructor(private recipeService: RecipeService) { }
}
