import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { SheetmusicComponent } from './sheetmusic/sheetmusic.component';
import { ViolinComponent } from './violin/violin.component';
import { ViolaComponent } from './viola/viola.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'recordings',component: RecordingsComponent},
  {path:'sheetmusic', component: SheetmusicComponent},
  {path:'violin', component: ViolinComponent},
  {path:'viola', component: ViolaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
