import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule} from '@angular/material/input';


const MaterialComponenets = [
  MatExpansionModule,
  MatInputModule,
  BrowserAnimationsModule,



];


@NgModule({

  imports: [MaterialComponenets

  ], exports: [MaterialComponenets
  ]
})
export class MaterialModule { }
