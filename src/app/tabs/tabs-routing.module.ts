import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'registration',
      loadChildren: () => import('../registration/registration.module').then( m => m.RegistrationPageModule)
    },
    {
      path: 'verify-email',
      loadChildren: () => import('../verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
    },
    {
      path: 'add-member',
      loadChildren: () => import('../add-member/add-member.module').then( m => m.AddMemberPageModule)
    },
    {
      path: 'tab1/:id',
      loadChildren: () => import('../member-detail/member-detail.module').then( m => m.MemberDetailPageModule)
    },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        // redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
