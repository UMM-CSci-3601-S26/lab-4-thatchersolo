// Angular Imports
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCard, MatCardTitle, MatCardContent } from "@angular/material/card";

// RxJS Imports
import { catchError, of } from 'rxjs';

// Family Imports
import { FamilyService } from '../family/family.service';
import { DashboardStats } from '../family/family';

@Component({
  selector: 'app-family-dash',
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './family-dash.component.html',
  styleUrl: './family-dash.component.scss',
})
export class FamilyDashComponent  {
  private familyService = inject(FamilyService);

  dashboardStats = toSignal <DashboardStats | undefined>(
    this.familyService.getDashboardStats().pipe(
      catchError(() => of(undefined))
    )
  );
}
