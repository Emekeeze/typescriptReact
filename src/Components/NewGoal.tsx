import  { FormEvent, useState } from 'react';
type NewGoalProps = {
    handleSubmit: (goal: string, summary: string) => void;
  };
  
export default function NewGoal({ handleSubmit }: NewGoalProps) {
  const [goal, setGoal] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(goal, summary);
    setGoal('');
    setSummary('');
  };

  const handleGoalChange = (event: FormEvent<HTMLInputElement>) => {
    setGoal(event.currentTarget.value);
  };

  const handleSummaryChange = (event: FormEvent<HTMLInputElement>) => {
    setSummary(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input
          id='goal'
          type='text'
          value={goal}
          onChange={handleGoalChange}
        />
      </p>
      <p>
        <label htmlFor='summary'>Your summary</label>
        <input
          id='summary'
          type='text'
          value={summary}
          onChange={handleSummaryChange}
        />
      </p>
      <button type='submit'>Submit</button>
    </form>
  );
}
