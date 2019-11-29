import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-score',
  templateUrl: './summary-score.component.html',
  styleUrls: ['./summary-score.component.scss']
})
export class SummaryScoreComponent {
  @Input() score: number;
  @Input() totalScore: number;
}
