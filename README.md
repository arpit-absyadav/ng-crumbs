# Angular Dynamic Breadcrumb

## Installation

```shell
npm install ng-crumbs --save
```

#### 1. Import the `BreadcrumbModule`
Import `BreadcrumbModule` in the NgModule of your application.

```typescript
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {BreadcrumbModule} from 'ng-crumbs';

@NgModule({
    imports: [
        BrowserModule,
        BreadcrumbModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

#### 2. Set breadcumbs in `app.routes`
```javascript
export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', ..., data: { breadcrumb: 'Home'}},
    {path: 'about', ..., data: { breadcrumb: 'About'}},
    {path: 'github', ..., data: { breadcrumb: 'GitHub'},
        children: [
            {path: '', ...},
            {path: ':org', ..., data: { breadcrumb: 'Repo List'},
                children: [
                    {path: '', ...},
                    {path: ':repo', ..., data: { breadcrumb: 'Repo'}}
                ]
        }]
    }
];
```

#### 3. Update the markup
- Import the `style.css` into your web page
- Add `<breadcrumb></breadcrumb>` tag in template of your application component.

<!-- ## Demo [(live)](https://emilol.github.io/ng-crumbs) -->

## Customization

### Template Customization

You can BYO template using the breadcrumb's ng-content transclude.

#### bootstrap breadcrumb:

```html
<breadcrumb #parent>
  <ol class="breadcrumb">
    <ng-template ngFor let-route [ngForOf]="parent.breadcrumbs">
      <li *ngIf="!route.terminal" class="breadcrumb-item">
        <a href="" [routerLink]="[route.url]">{{ route.displayName }}</a>
      </li>
      <li *ngIf="route.terminal" class="breadcrumb-item active" aria-current="page">{{ route.displayName }}</li>
    </ng-template>
  </ol>
</breadcrumb>
```

# License
 [MIT](/LICENSE)