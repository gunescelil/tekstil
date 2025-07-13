import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderService, Order } from './order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './order.component.html',
})
export class OrderComponent {
  orders: Order[] = [];
  newOrder: Order = { name: '', quantity: 1 };

  constructor(private orderService: OrderService) {
    this.refreshOrders();
  }

  refreshOrders() {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  addOrder() {
    if (!this.newOrder.name || this.newOrder.quantity < 1) return;
    this.orderService.addOrder(this.newOrder).subscribe(() => {
      this.newOrder = { name: '', quantity: 1 };
      this.refreshOrders();
    });
  }
}
