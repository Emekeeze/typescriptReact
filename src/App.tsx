import Header from './Components/Header';
import imageGoal from "./assets/goals.jpg"
import CourseGoalList from './Components/CourseGoalList';
import NewGoal from './Components/NewGoal';
import { useState } from 'react';

 export type CourseGoal ={
  title:string;
  description: string;
  id:number
}
export default function App() {
  const[goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal:string, summary:string): void {
    setGoals(prevGoal =>{
      const newGoal:CourseGoal= {
        id: Math.random(),
        title:goal,
        description:summary,
      }
      return [...prevGoal, newGoal]
    })

  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoals =>prevGoals.filter(goal => goal.id !==id))
    }

  return (
    <main>
      <Header image={imageGoal} alt='a list of what to come'>
        <h1>Your course Goal</h1>
      </Header>
      <NewGoal  handleSubmit={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
      
    </main>
  );
}
