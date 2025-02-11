import { Component } from '@angular/core';
import { GlobalModule } from '../../global/global/global.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [GlobalModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
