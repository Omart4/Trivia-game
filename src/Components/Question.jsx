import React from "react"
import Answer from "./AnswerClass";
import '../Styles/Question.css'
import { json } from "react-router-dom";


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
const answer_arr = (data) => {
    const incorrect = []
    for (let i in data.incorrect_answers){
        incorrect.push(new Answer(data.incorrect_answers[i],false))
    }
    
    return shuffle([...incorrect,new Answer(data.correct_answer,true)])
}

const Question = ({quest}) => {
    let answers_array = answer_arr(quest)
    console.log(answers_array)
  return (
    <div className="question">
      <p className="main-txt">
        {quest.question}
      </p>
      <div className="answers">
        {answers_array.map((a)=><p>{JSON.stringify(a)}</p>)}
      </div>
    </div>
  )
};

export default Question;
