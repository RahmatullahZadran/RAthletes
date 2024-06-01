import { Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { ChestComponent } from './chest/chest.component';
import { AbsComponent } from './abs/abs.component';
import { BackComponent } from './back/back.component';
import { BicepsComponent } from './biceps/biceps.component';
import { LegsComponent } from './legs/legs.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { TricepsComponent } from './triceps/triceps.component';




export const routes: Routes = [
   { path: '',
     component: ShowComponent },
    { path: 'chest',
     component: ChestComponent },
    { path: 'abs',
     component: AbsComponent },
    { path: 'back',
     component: BackComponent },
    { path: 'biceps',
     component: BicepsComponent },
    { path: 'legs',
     component: LegsComponent },
    { path: 'shoulder',
     component: ShoulderComponent }
    ,{ path: 'triceps',
     component: TricepsComponent }
];