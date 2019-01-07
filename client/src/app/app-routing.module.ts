import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {AnalyticsPageComponent} from "./analytics-page/analytics-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component";
import {OrderCategoriesComponent} from "./order-page/order-categories/order-categories.component";
import {OrderPositionsComponent} from "./order-page/order-positions/order-positions.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path:'', redirectTo:'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path:'overview', component: OverviewPageComponent, data: { title: 'Обзор'}},
      {path:'analytics', component: AnalyticsPageComponent, data: { title: 'Аналитика'}},
      {path:'history', component: HistoryPageComponent, data: { title: 'История'}},
      {path:'order', component: OrderPageComponent, children: [
          {path:'', component: OrderCategoriesComponent, data: { title: 'Добавить заказ'}},
          {path:':id', component: OrderPositionsComponent, data: { title: ''}},
        ]},
      {path:'categories', component: CategoriesPageComponent, data: { title: 'Категории'}},
      {path:'categories/new', component: CategoriesFormComponent, data: { title: 'Добавить категорию'}},
      {path:'categories/:id', component: CategoriesFormComponent, data: { title: 'Редактировать категорию'}},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
