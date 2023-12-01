import { Component, OnInit } from '@angular/core';
import { FilterRecipe } from 'src/app/shared/models/filterRecipes';
import { Recipe } from 'src/app/shared/models/result';
import { FilterRecipesService } from 'src/app/shared/services/filter-recipes.service';

import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  isDataLoading: boolean = false;
  isDataLoadingFailed: boolean = false;

  loadRecipes() {
    this.isDataLoading = true;
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data.results;
        this.isDataLoading = false;
        this.isDataLoadingFailed = false;
        console.log(data.results);
      },
      error: (err) => {
        this.isDataLoading = false;
        this.isDataLoadingFailed = true;
        alert(err.message)
      }
    })
  }


  filterRecipes($event: string) {
    let filterName = $event;
    let filter: FilterRecipe = {
      recipeName: filterName
    }
    
    this.recipes = this.filterService.filterRecipes(filter);
  }

  ngOnInit(): void {
    this.loadRecipes();
  }

  constructor(private recipeService: RecipeService, private filterService: FilterRecipesService) {}
}
