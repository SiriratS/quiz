import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BizzyQuiz';
  isShowSummaryScore = false;
  score: number;
  totalScore: number;

  submitQuizHandler($event: any) {
    this.isShowSummaryScore = true;
    this.score = $event.score;
    this.totalScore = $event.totalScore;
  }
}
