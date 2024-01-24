import { Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { InicioComponent } from './inicio/inicio.component';
import { IssuesFormComponent } from './issues-form/issues-form.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'issues',component:IssuesComponent,
        children:[
            {path:'add',component:IssuesFormComponent},
            {path:':id',component:IssuesFormComponent}
        ]
    }
];
