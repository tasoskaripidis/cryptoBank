import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MoneyMoveService } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';
import { NgFor } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { theCoin } from '../../app/serviceProject/serviceMoneyMoves/money-move.service';

@Component({
  selector: 'app-invest',
  imports: [FormsModule, RouterOutlet, NgFor],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css',
})
export class InvestComponent implements OnInit {
  constructor(private moneyMove: MoneyMoveService) {}
  searchCoin: string = '';

  // get api
  investArray: theCoin[] = [];
  ngOnInit(): void {
    this.moneyMove.getApi().subscribe({
      next: (data) => {
        this.investArray = data;
      },
    });
  }
  //  send coin to profile
  @Output() investing = new EventEmitter<string>();

  investBtn(coin: string) {
    console.log(coin);
    this.investing.emit(coin);
    this.moneyMove.buyCoinsHistory(coin);
  }

  // input search
  get inputValue() {
    return this.investArray.filter((coin) =>
      coin.name.toLowerCase().includes(this.searchCoin.toLowerCase())
    );
  }
}
