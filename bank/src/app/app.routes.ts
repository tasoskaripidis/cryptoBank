import { Routes } from '@angular/router';
import { LoginComponent } from '../entrance/login/login.component';
import { SignInComponent } from '../entrance/sign-in/sign-in.component';
import { LayOutComponent } from '../main/lay-out/lay-out.component';
import { ProfileComponent } from '../main/profile/profile.component';
import { HistoryComponent } from '../main/history/history.component';
import { DepositComponent } from '../main/deposit/deposit.component';
import { WithdrawComponent } from '../main/withdraw/withdraw.component';
import { InvestComponent } from '../main/invest/invest.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'lay-out',
    component: LayOutComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
        children: [
          { path: 'deposit', component: DepositComponent },
          {
            path: 'withdraw',
            component: WithdrawComponent,
          },
          {
            path: 'invest',
            component: InvestComponent,
          },
        ],
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
];
