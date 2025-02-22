import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'ecom-footer',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    console.log('FooterComponent initialized');
  }
}
