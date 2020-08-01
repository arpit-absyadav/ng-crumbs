import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from './breadcrumb';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-abs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
    breadcrumbService.breadcrumbChanged.subscribe((crumbs: Breadcrumb[]) => {
      this.onBreadcrumbChange(crumbs);
    });
  }

  private onBreadcrumbChange(crumbs: Breadcrumb[]) {
    this.breadcrumbs = crumbs;
  }
}
