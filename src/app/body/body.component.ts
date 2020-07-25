import { Component, OnInit } from '@angular/core';
import {Body,ServiceService} from '../service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  faqs:Body[];
  lefts:Body[];
  rights:Body[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.faqs = this.service.getBody();
    this.lefts=[];
    this.rights=[];
    for(let i=0;i<this.faqs.length;i++)
    {
      console.log(this.faqs[i])
      if(i%2==0)
        this.lefts.push(this.faqs[i]);
      else
        this.rights.push(this.faqs[i])

    }
    

  }

}
