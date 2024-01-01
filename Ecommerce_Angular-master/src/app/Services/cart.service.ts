import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject maintient l'état courant et émet la nouvelle valeur à ses abonnés
  // chaque fois que la méthode next() est appelée.
  private cartItems = new BehaviorSubject<Product[]>([]);

  constructor() { }

  // Ajouter un produit au panier
  addToCart(product: Product) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = [...currentItems, product];
    this.cartItems.next(updatedItems); // Mise à jour des abonnés avec la nouvelle liste
  }

  // Obtenir les éléments du panier comme un Observable pour la souscription
  getCartItems(): Observable<Product[]> {
    return this.cartItems.asObservable();
  }
  showConfirmation = false;

  confirmDeletion() {
    this.showConfirmation = true;
    setTimeout(() => this.showConfirmation = false, 3000); // Le message disparaît après 3 secondes
  }
  // Méthode pour obtenir le dernier état du panier sans s'abonner
  obtenirItemsDuPanier(): Product[] {
    return this.cartItems.getValue();
  }
  deleteFromCart(productId: number): void {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems); // Mise à jour de l'état du panier
  }
  // Méthode pour vider le panier
  viderLePanier() {
    this.cartItems.next([]); // Réinitialisation du panier
  }

  // ... Ajoutez d'autres méthodes de gestion du panier si nécessaire ...
}
