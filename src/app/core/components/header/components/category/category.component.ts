import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {

  constructor(public router: Router) { }

  public goToCategoriesPage(): void {
    this.router.navigate(['categories']);
  }

}
