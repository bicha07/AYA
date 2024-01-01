import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../Services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits: Product[] = [
    // Exemple de produits
    { id: 1, name: 'Produit 1',description:'Écran 15.6" Full HD, 120HZ - Processeur: AMD Ryzen™ 5 5500U (2.1 GHz up to 4.0 GHz Turbo max, 8 Mo de mémoire cache, Hexa-Core)', price: 50, imageUrl: '../../assets/product01.png', inStock: true },
    { id: 2, name: 'Produit 2',description:'Écran 15.6" Full HD, 120HZ - Processeur: AMD Ryzen™ 5 5500U (2.1 GHz up to 4.0 GHz Turbo max, 8 Mo de mémoire cache, Hexa-Core)', price: 100, imageUrl: '../../assets/product08.png',  inStock:true },
    { id: 3, name: 'Produit 3',description:'Écran 15.6" Full HD, 120HZ - Processeur: AMD Ryzen™ 5 5500U (2.1 GHz up to 4.0 GHz Turbo max, 8 Mo de mémoire cache, Hexa-Core)', price: 100,  imageUrl: ' ../../assets/product09.png' ,  inStock: false },


  ];
  constructor(private cartService: CartService,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    // Initialisation si nécessaire.
  }
  @ViewChild('addCartModal') addCartModal: any; // Assurez-vous que cela correspond à l'ID de votre ng-template

  selectedProductToAdd: Product | null = null;


    ajouterAuPanier(produit: Product): void {
      this.selectedProductToAdd = produit; // Stocker le produit sélectionné
      this.modalService.open(this.addCartModal); // Ouvrir le modal ici
    }
    
  
  closeModal(): void {
    this.modalService.dismissAll();
  }
// Dans product.component.ts

confirmAddToCart(): void {
  if (this.selectedProductToAdd) {
    this.cartService.addToCart(this.selectedProductToAdd); // Ajoute le produit au panier
    this.closeModal(); // Ferme le modal
    this.router.navigate(['/wishlist']); // Navigue vers la page du panier
  }
}

}
