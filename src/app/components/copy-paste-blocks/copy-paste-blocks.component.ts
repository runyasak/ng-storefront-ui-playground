import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SfLinkComponent,
  SfButtonComponent,
  SfIconSellComponent,
  SfIconAddComponent,
  SfIconRemoveComponent,
  SfIconDeleteComponent,
} from 'ng-storefront-ui';

@Component({
  selector: 'copy-paste-blocks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SfLinkComponent,
    SfButtonComponent,
    SfIconSellComponent,
    SfIconAddComponent,
    SfIconRemoveComponent,
    SfIconDeleteComponent,
  ],
  templateUrl: './copy-paste-blocks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyPasteBlocksComponent {
  min = signal(1);

  max = signal(10);

  count = signal(this.min());

  decrease() {
    this.count.update((value) => value - 1);
  }

  increase() {
    this.count.update((value) => value + 1);
  }
}
