import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

export default function AnecdoteList() {
  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
  };

  const sortedAnecdotes = [...anecdotes];
  sortedAnecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
