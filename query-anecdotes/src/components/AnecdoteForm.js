import { useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../requests";
import { useNotificationDispatch } from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();
  const newNoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries("anecdotes");
      const anecdotes = queryClient.getQueryData("anecdotes");
      queryClient.setQueryData("anecdotes", anecdotes.concat(newAnecdote));
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      const notif = "too short anecdote, must have length 5 or more";
      dispatch({ item: notif });
      return null;
    }

    event.target.anecdote.value = "";
    newNoteMutation.mutate({ content, votes: 0 });
    const notif = `anecdote "${content}" created!`;
    dispatch({ item: notif });
    console.log("new anecdote");
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
