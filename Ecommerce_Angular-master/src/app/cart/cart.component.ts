import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../products/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number;

  cartProducts: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cartProducts = items;
    });
  }
  deleteProduct(productId: number): void {
    this.cartService.deleteFromCart(productId);
  }


  removeItem(item: any){
  }
  emptycart(){
  }
}
