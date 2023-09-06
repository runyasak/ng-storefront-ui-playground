import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SfButtonComponent,
  SfIconDeleteComponent,
  SfAccordionItemComponent,
  SfIconChevronLeftComponent,
  SfLinkComponent,
  SfLoaderCircularComponent,
  SfIconArrowForwardComponent,
} from 'ng-storefront-ui';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'customize-comps',
  standalone: true,
  imports: [
    CommonModule,
    CtaComponent,
    SfButtonComponent,
    SfIconDeleteComponent,
    SfAccordionItemComponent,
    SfIconChevronLeftComponent,
    SfLinkComponent,
    SfLoaderCircularComponent,
    SfIconArrowForwardComponent,
  ],
  templateUrl: './customize-comps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizeCompsComponent {
  loading = signal(false);

  isOpen = false;

  accordionItem = {
    id: 'acc-1',
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  };

  handleClick() {
    this.loading.update((value) => !value);

    setTimeout(() => {
      this.loading.update((value) => !value);
    }, 5000);
  }
}
