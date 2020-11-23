import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;

  budget = [
    { "name": 'Example', "cost": 10 }
  ];

  model: any = {};
  model2: any = {};
  msg: string = '';
  hiddenUpdate: boolean = true;

  constructor() {
    this.title = 'My Budget';
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.budget.push(this.model);
    this.msg = 'Item Added';
    this.model = {};
  }

  myValue;
  editItem(i): void {
    this.model2.name = this.budget[i].name;
    this.model2.cost = this.budget[i].cost;
    this.myValue = i;
    this.hiddenUpdate = false;
  };

  updateItem() {
    let i = this.myValue;

    for (let j = 0; j < this.budget.length; j++) {
      if (j == i) {
        this.budget[i] = this.model2;
        this.model2 = {};
      }
    }
  };

  deleteItem(i) {
    var answer = confirm('Are you sure to deleted it?');
    if (answer) {
      this.budget.splice(i, 1);
      this.msg = 'Item deleted';
    }
  };

  closeAlert() {
    this.msg = '';
  }

  total(): void {
    let final = 0;

    this.budget.forEach(function (element) {
      final = final + element.cost;
    });
    alert('Your total is: ' + final);
  }
}