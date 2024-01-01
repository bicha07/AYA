import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../products/product.model';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

    public product : any = [];
    public grandTotal !: number;
  
    cartProducts: Product[] = [];
    showConfirmation = false;

    constructor(private cartService: CartService) { }
  
    ngOnInit(): void {
      this.cartService.getCartItems().subscribe((items: Product[]) => {
        this.cartProducts = items;
      });
    }
    deleteProduct(productId: number): void {
      this.cartService.deleteFromCart(productId);
    }
    confirmDeletion() {
      // Affichez un message d'alerte
      alert('Votre demande a été bien prise en charge');
      // Vous pouvez également utiliser un service ou une variable pour afficher le message dans votre template
    }
  
    removeItem(item: any){
    }
    emptycart(){
    }
  }
  