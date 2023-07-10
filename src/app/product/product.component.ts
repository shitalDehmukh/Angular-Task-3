
import { Component,ViewEncapsulation } from '@angular/core';

interface AccordionSection {
  header: string;
  details: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent {
   sections: AccordionSection[] = [];
   sectionHeader: string | any;
   sectionDetails: string | any;

 addSection(): void {
  const newSection: AccordionSection = {
    header: this.sectionHeader,
    details:this.sectionDetails
  };
  this.sections.push(newSection);

  this.sectionHeader = '';
  this.sectionDetails = '';
 }

}
