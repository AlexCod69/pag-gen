import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemVideoComponent } from './pages/item-video/item-video.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'itemVideo', component: ItemVideoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({

    imports: [
        RouterModule.forRoot( app_routes, { useHash: true} )
      ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }