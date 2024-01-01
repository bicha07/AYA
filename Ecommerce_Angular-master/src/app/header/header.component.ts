import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
isFixed = false;

@HostListener('window:scroll', ['$event'])
checkScroll() {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= 0) {
    this.isFixed = true;
  } else {
    this.isFixed = false;
  }
}

}
