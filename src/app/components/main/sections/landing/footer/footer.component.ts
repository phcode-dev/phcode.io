import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'px-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fullYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
