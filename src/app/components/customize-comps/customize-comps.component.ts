import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SfButtonComponent,
  SfIconDeleteComponent,
  SfAccordionItemComponent,
  SfIconChevronLeftComponent,
  SfLinkComponent,
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
    // [Todo]: implement later
    // SfLoaderCircularComponent,
    // SfIconArrowForwardComponent,
  ],
  templateUrl: './customize-comps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizeCompsComponent {
  // [Todo]: implement later
  // const loading = ref<boolean>(false);
  // const handleClick = () => {
  //   loading.value = true;
  //   setTimeout(() => {
  //     loading.value = false;
  //   }, 5000);
  // };

  isOpen = false;

  accordionItem = {
    id: 'acc-1',
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  };
}
