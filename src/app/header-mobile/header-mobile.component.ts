import { Component, OnInit } from '@angular/core';
import { Header,ServiceService} from '../service.service';
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  head:Header;
  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {
    this.head=this.service.getHeaderMobile();
  }

}
