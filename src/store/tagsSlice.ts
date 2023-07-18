// tagsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagTypes } from '../typing/types/contact';



interface TagsState {
  tags: TagTypes[];
}

const initialState: TagsState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<TagTypes>) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<TagTypes>) => {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload.id);
    },
    setTags: (state, action: PayloadAction<TagTypes[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { addTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
