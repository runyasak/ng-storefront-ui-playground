import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfAccordionItemComponent, SfIconChevronLeftComponent } from 'ng-storefront-ui';

@Component({
  selector: 'import-comps',
  standalone: true,
  imports: [CommonModule, SfAccordionItemComponent, SfIconChevronLeftComponent],
  templateUrl: './import-comps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportCompsComponent {
  isOpen = false;

  accordionItem = {
    id: 'acc-1',
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  };
}
