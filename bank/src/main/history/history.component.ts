import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoneyMoveService } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  sendMoneyArray: number[] = [];
  removeMoneyArray: number[] = [];
  buyCoin: string[] = [];
  sellCoin: string[] = [];

  date = new Date();

  constructor(private moneyService: MoneyMoveService) {}

  ngOnInit(): void {
    this.moneyService.data$.subscribe((value) => {
      this.sendMoneyArray = value;
    });

    this.moneyService.dataRemove$.subscribe((value) => {
      this.removeMoneyArray = value;
    });

    this.moneyService.buyingCoins$.subscribe((value) => {
      this.buyCoin = value;
    });
    this.moneyService.sellingCoins$.subscribe((value) => {
      this.sellCoin = value;
    });
  }
}
