import { Component, OnInit } from '@angular/core';
import {Body,ServiceService} from '../service.service';
@Component({
  selector: 'app-body-mobile',
  templateUrl: './body-mobile.component.html',
  styleUrls: ['./body-mobile.component.css']
})
export class BodyMobileComponent implements OnInit {
  faqs:Body[];
  constructor( private service:ServiceService) { }

  ngOnInit(): void {
     this.faqs=this.service.getBody();
  }

}
