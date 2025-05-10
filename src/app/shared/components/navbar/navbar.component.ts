import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  // **************  Toggle function *******************

isNavbarCollapsed = true;
toggleNavbar() {
this.isNavbarCollapsed = !this.isNavbarCollapsed;
}




// --------------------------------------------------

  constructor() { }

  ngOnInit(): void {
  }

}
