import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedPageComponent } from './pages/getting-started-page/getting-started-page.component';

const routes: Routes = [
  { path: 'getting-started', component: GettingStartedPageComponent },
  { path: '', component: GettingStartedPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
