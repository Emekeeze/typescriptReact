import {type ReactNode } from "react";


interface courseGoalProps  {
    title: String;
    children: ReactNode;
    onDelete: (id: number) => void;
    id:number;

}

export default function CourseGoal({title, children, onDelete, id}: courseGoalProps) {
  return (
    <article>
    <div>
        <h1>{title}</h1>
        {children}
    </div>
    <button onClick={() =>onDelete(id)}>Delete</button>
    </article>
  )
}
