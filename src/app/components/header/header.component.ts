import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menu: HTMLElement | null = null;
  headerList: HTMLElement | null = null;

  ngOnInit(): void {
    this.menu = document.querySelector('#menu-icon') as HTMLElement | null;
    this.headerList = document.querySelector('.header-list') as HTMLElement | null;

    if (this.menu && this.headerList) {
      this.menu.onclick = () => {
        this.menu?.classList.toggle('fa-x');
        this.headerList?.classList.toggle('open');
      };
    } else {
      console.error("No se encontró el elemento #menu-icon o .header-list");
    }
  }


}
