import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MoneyMoveService } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';
import { payCard } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';

@Component({
  selector: 'app-withdraw',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  constructor(private router: Router, private moneyService: MoneyMoveService) {}

  theCard: payCard = {
    name: '',
    number: null,
    date: '',
    cvv: null,
  };

  sendMoney: number | null = null;
  // takeMoney: number = 0;
  closeBtn() {
    this.router.navigate(['/lay-out//']);
  }
  withdrawBtn() {
    const el = this.moneyService.getCard();

    if (
      el.name != this.theCard.name ||
      el.number != this.theCard.number ||
      el.date != this.theCard.date ||
      el.cvv != this.theCard.cvv
    ) {
      alert('not valid card');
    } else {
      this.moneyService.withdrawMoney(this.sendMoney || 0);
      this.moneyService.historydataRemove(this.sendMoney || 0);
      this.theCard.name = '';
      this.theCard.number = null;
      this.theCard.date = '';
      this.theCard.cvv = null;
    }
  }
}
