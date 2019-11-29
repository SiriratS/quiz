import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { questions } from '../mock/question.mock';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionNoIndex: number = 0;
  score: number = 0;
  quizForm: FormGroup;
  @Output() submitQuizHandler: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      answer: [null, Validators.required]
    });
  }

  get isAnswered() {
    return !!this.answer.value;
  }

  get isLastQuestion() {
    return (this.questionNoIndex + 1) === questions.results.length;
  }

  get answer() {
    return this.quizForm.get('answer');
  }

  get question() {
    return questions.results[this.questionNoIndex];
  }

  submit() {
    this.submitQuizHandler.emit({
      score: this.score,
      totalScore: questions.results.length
    });
  }

  next() {
    if (this.answer.value === this.question.correct_answer) {
      this.score++;
    }

    this.questionNoIndex++;
    this.answer.setValue(null);
  }

}
