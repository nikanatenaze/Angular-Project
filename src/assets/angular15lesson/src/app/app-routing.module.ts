import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NotFoundError } from 'rxjs';
import { toadminGuard } from './toadmin.guard';
import { otherGuardGuard } from './other-guard.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "gallery", component: GalleryComponent, canDeactivate: [otherGuardGuard]},
  {path: "admin", component: AdminPageComponent, canActivate: [toadminGuard]},
  {path: "**", component: NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
