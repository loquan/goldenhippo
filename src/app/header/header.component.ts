import { Component, OnInit } from '@angular/core';
import {Header,ServiceService} from '../service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  head:Header;
  constructor(private service: ServiceService) {

     

   }

  ngOnInit(): void {

    this.head=this.service.getHeader();
    
    
  }

}
