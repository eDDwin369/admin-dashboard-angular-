import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
  path:'contacts', component:ContactsComponent
},
{
  path:'employee', component:EmployeeComponent

  
},
{
  path:'gallery', component:GalleryComponent

},
{
  path:'leads', component:LeadsComponent

}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
