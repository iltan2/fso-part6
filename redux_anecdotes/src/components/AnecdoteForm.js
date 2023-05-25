import { useDispatch } from "react-redux";
import { createNote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createNote(content));
    dispatch(setNotification("New note created!", 5));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}
