import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiAnimeSample1Component } from './gui-anime-sample-1/gui-anime-sample-1.component';
import { GuiAnimeSample2Component } from './gui-anime-sample-2/gui-anime-sample-2.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/sample1',
        pathMatch: 'full'
    },
    {
        path: 'sample1',
        component: GuiAnimeSample1Component
    },
    {
        path: 'sample2',
        component: GuiAnimeSample2Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);