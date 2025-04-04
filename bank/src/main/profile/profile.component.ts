import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgFor } from '@angular/common';
import { MoneyMoveService } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterModule, FormsModule, CurrencyPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  receive: number = 0;

  constructor(private moneyMove: MoneyMoveService) {}
  // deposit money
  ngOnInit(): void {
    this.moneyMove.receive$.subscribe((money) => {
      this.receive = money;
    });
  }

  coinList: string[] = [];
  coinlistSet: Set<string> = new Set();
  numbCoins: Record<string, number> = {};
  // output method..sending coins to profile
  receiveCoin(coin: any) {
    if (!coin || !coin.investing) {
      return;
    }
    if (this.receive < 10) {
      alert('not enouth money to invest in cryptos');
    } else {
      coin.investing.subscribe((el: string) => {
        this.coinList.push(el);
        this.coinlistSet = new Set([...this.coinList]);
        if (!(el in this.numbCoins)) {
          this.numbCoins[el] = 0;
          console.log(this.coinlistSet);
        }
        this.numbCoins[el]++;
        this.receive -= 10;

        if (this.receive < 10) {
          alert('you can t buy more coins');
        }
      });
    }
  }

  sellBtn(coin: string) {
    console.log(this.coinlistSet);
    this.moneyMove.sellCoinsHistory(coin);
    if (this.numbCoins[coin] > 1) {
      this.numbCoins[coin]--;
      this.receive += 10;
    } else {
      this.coinlistSet.delete(coin);
      this.receive += 10;
    }
  }
}
