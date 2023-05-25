import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendNote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    updateNote(state, action) {
      const { id, newObject } = action.payload;
      const idx = state.findIndex((a) => a.id === id);
      if (idx !== -1) {
        state[idx] = newObject;
      }
    },
  },
});

export const { appendNote, setAnecdotes, updateNote } = anecdoteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll();
    dispatch(setAnecdotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdoteService.createNew(content);
    dispatch(appendNote(newNote));
  };
};

export const addVote = (id) => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll();
    const anecdoteToChange = notes.find((a) => a.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    };
    const newNote = await anecdoteService.updateNote(id, changedAnecdote);
    dispatch(updateNote({ id: id, newObject: newNote }));
  };
};

export default anecdoteSlice.reducer;
