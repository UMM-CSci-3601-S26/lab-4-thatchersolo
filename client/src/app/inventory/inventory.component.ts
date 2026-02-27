import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
//import { RouterLink } from '@angular/router';
//import { catchError, combineLatest, of, switchMap, tap } from 'rxjs';
//import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-inventory',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {

}
