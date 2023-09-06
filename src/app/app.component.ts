import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SfButtonComponent } from 'ng-storefront-ui';
import { ImportCompsComponent } from './components/import-comps/import-comps.component';
import { CustomizeCompsComponent } from './components/customize-comps/customize-comps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SfButtonComponent,
    ImportCompsComponent,
    CustomizeCompsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-storefront-ui-playground';
}
