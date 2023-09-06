import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-4">
      <ng-content select="[first]" />
      <ng-content select="[second]" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {}
