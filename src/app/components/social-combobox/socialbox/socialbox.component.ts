import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socialbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './socialbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialboxComponent { }
