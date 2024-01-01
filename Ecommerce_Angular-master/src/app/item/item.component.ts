import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data : any = {}
  @Output() item = new EventEmitter()
  product! : any[];
  cartProduct:any[] = [];



  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSelect(id : any) {
    this.router.navigate(['/product', id]);
  }
  add(){
    this.item.emit(this.data)

  }

  alerWithSuccess(event : any){
    // JSON.stringify(); //Send data
    // JSON.parse(); // Recive Data
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exit = this.cartProduct.find(item => item.id == event.id)
      if(exit){
        Swal.fire(
          'Good job!',
          'You product is in your cart!',
          'success'
        )
      }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))
      }
    }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))

      }
    
  }

  wishelist(event : any){
    // JSON.stringify(); //Send data
    // JSON.parse(); // Recive Data
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exit = this.cartProduct.find(item => item.id == event.id)
      if(exit){
        Swal.fire(
          'Good job!',
          'You product is in your wishlist !',
          'success'
        )
      }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))
      }
    }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))

      }
    
  }

  

}
