import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
   quizData = [
    {
        question: "question1",
        a: "res1",
        b: "res2",
        c: "res3",
        d: "res4",
        correct: "res3",
    },
    {
      question: "question2",
      a: "res1",
      b: "res2",
      c: "res3",
      d: "res4",
      correct: "res4",
  }
  
  ]
    //data=this.quizData.map(x=>x.question)
  
  

  constructor() { }

  ngOnInit(): void {
    this.CreateTimer()
    
}
CreateTimer(){
  setInterval(() => {
    // console.log(this.data);
   //  alert('h')
  // document.write(`<span> hello</span>`)
   }, 5000);
  }
}
