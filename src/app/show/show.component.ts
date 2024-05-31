import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  standalone: true,  
  imports: [CommonModule],
})
export class ShowComponent implements OnInit {
  showComponent: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showComponent = this.isHomePage();
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
