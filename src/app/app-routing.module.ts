import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './page/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details', loadChildren: './page/details/details.module#DetailsPageModule' },
  { path: 'tabs', component: TabsPage, children:[
      {path: 'details', loadChildren: './page/details/details.module#DetailsPageModule'},
      { path: 'notifications', loadChildren: './page/notifications/notifications.module#NotificationsPageModule' },
      { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule'}
  ]}
];
 
 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
