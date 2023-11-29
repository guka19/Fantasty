import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/result';

import { FormBuilder } from '@angular/forms';

import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipeForm = this.fb.group({
    recipeName: [""]
  })

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

  ngOnInit(): void {
    this.loadRecipes();
  }

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}
}
