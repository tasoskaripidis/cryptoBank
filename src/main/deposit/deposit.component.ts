import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MoneyMoveService } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';
import { payCard } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';

@Component({
  selector: 'app-deposit',
  imports: [FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})
export class DepositComponent {
  constructor(private router: Router, private moneyService: MoneyMoveService) {}

  theCard: payCard = {
    name: '',
    number: null,
    date: '',
    cvv: null,
  };

  sendMoney: number | null = null;

  closeBtn() {
    this.router.navigate(['/lay-out//']);
  }

  addBtn() {
    const el = this.moneyService.getCard();

    if (
      el.name != this.theCard.name ||
      el.number != this.theCard.number ||
      el.date != this.theCard.date ||
      el.cvv != this.theCard.cvv
    ) {
      alert('not valid card');
    } else {
      console.log('great');
      this.moneyService.sendData(this.sendMoney || 0);
      this.moneyService.historydata(this.sendMoney || 0);
      this.theCard.name = '';
      this.theCard.number = null;
      this.theCard.date = '';
      this.theCard.cvv = null;
    }
  }
}
