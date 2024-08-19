import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardDataType = {
  title: string;
  description: string;
  isLoading: boolean;
  error: string;
  allCards: CardType[];
  cardDetails?: CardType;
};

type CardType = {
  _id: string;
  title: string;
  description: string;
};

const initialState: CardDataType = {
  title: "",
  description: "",
  isLoading: false,
  error: "",
  allCards: [],
  cardDetails: undefined,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    postDataRequest: (state) => {
      state.isLoading = true;
    },
    postDataSuccess: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      state.isLoading = false;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    postDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getDataRequest: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action: PayloadAction<CardType[]>) => {
      state.isLoading = false;
      state.allCards = action.payload;
    },
    getDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getCardDetailsRequest: (state) => {
      state.isLoading = true;
    },
    getCardDetailsSuccess: (state, action: PayloadAction<CardType>) => {
      state.isLoading = false;
      state.cardDetails = action.payload;
    },
    getCardDetailsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  postDataRequest,
  postDataSuccess,
  postDataFailure,
  getDataRequest,
  getDataSuccess,
  getDataFailure,
  getCardDetailsRequest,
  getCardDetailsSuccess,
  getCardDetailsFailure,
} = cardSlice.actions;

export default cardSlice.reducer;
