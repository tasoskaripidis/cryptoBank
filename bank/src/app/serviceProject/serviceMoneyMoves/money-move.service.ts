import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface payCard {
  name: string;
  number: number | null;
  date: string;
  cvv: number | null;
}

export interface theCoin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoneyMoveService {
  constructor(private http: HttpClient) {}
  urlApi: string = 'https://api.coingecko.com/api/v3/search?query=bitcoin';
  takemoney: number | null = null;
  private receiveSubject = new BehaviorSubject<number>(0);
  receive$ = this.receiveSubject.asObservable();
  //  history add money
  private historyData = new BehaviorSubject<number[]>([]);
  data$ = this.historyData.asObservable();

  // history remove money
  private historyDataRemove = new BehaviorSubject<number[]>([]);
  dataRemove$ = this.historyDataRemove.asObservable();

  // history buy cryptos
  private buyCoins = new BehaviorSubject<string[]>([]);
  buyingCoins$ = this.buyCoins.asObservable();
  // history sell cryptos
  private sellCoins = new BehaviorSubject<string[]>([]);
  sellingCoins$ = this.sellCoins.asObservable();

  theCard: payCard = {
    name: 'tasos',
    number: 123456789,
    date: '2025-03-10',
    cvv: 123,
  };

  private getcoinlist = new BehaviorSubject<string[]>([]);
  malakis$ = this.getcoinlist.asObservable();

  takelistcoin(coin: string) {
    const malakis = [...this.getcoinlist.value, coin];
    this.getcoinlist.next(malakis);
  }

  date = Date.now();

  getCard(): payCard {
    return this.theCard;
  }

  sendData(amount: number) {
    this.receiveSubject.next(this.receiveSubject.value + amount);
  }

  historydata(amount: number) {
    const historyTransactions = [...this.historyData.value, amount];
    this.historyData.next(historyTransactions);
  }
  historydataRemove(amount: number) {
    const historyTransactions = [...this.historyDataRemove.value, amount];
    this.historyDataRemove.next(historyTransactions);
  }

  buyCoinsHistory(coin: string) {
    const coins = [...this.buyCoins.value, coin];
    this.buyCoins.next(coins);
  }
  sellCoinsHistory(coin: string) {
    const sellCoin = [...this.sellCoins.value, coin];
    this.sellCoins.next(sellCoin);
  }

  withdrawMoney(amount: number) {
    const currentvalue = this.receiveSubject.value;
    if (amount > currentvalue) {
      alert('no money for withdraw');
    } else {
      this.receiveSubject.next(this.receiveSubject.value - amount);
    }
  }

  getApi() {
    return this.http.get<{ coins: theCoin[] }>(this.urlApi).pipe(
      map((el) => {
        return el.coins;
      })
    );
  }
}
