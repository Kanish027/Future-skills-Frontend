import axios from "axios";
import { AppDispatch } from "../app/store";
import {
  getCardDetailsFailure,
  getCardDetailsRequest,
  getCardDetailsSuccess,
  getDataFailure,
  getDataRequest,
  getDataSuccess,
  postDataFailure,
  postDataRequest,
  postDataSuccess,
} from "../features/card/cardSlice";

const PostCardData =
  (title: string, description: string) => async (dispatch: AppDispatch) => {
    dispatch(postDataRequest());
    try {
      const { data } = await axios.post(
        "/api/api/v1/card/new",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(postDataSuccess(data.message));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(
          postDataFailure(error.response.data.message || "An error occurred")
        );
      } else {
        dispatch(postDataFailure("An unexpected error occurred"));
      }
    }
  };

const GetCardData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getDataRequest());

    const { data } = await axios.get("/api/api/v1/cards", {
      withCredentials: true,
    });
    dispatch(getDataSuccess(data.cards));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(
        getDataFailure(error.response.data.message || "An error occurred")
      );
    } else {
      dispatch(getDataFailure("An unexpected error occurred"));
    }
  }
};

const GetCardDetails = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getCardDetailsRequest());

    const { data } = await axios.get(`/api/api/v1/card/${id}`, {
      withCredentials: true,
    });

    // console.log(data.card[0].title);

    dispatch(getCardDetailsSuccess(data.card[0]));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(
        getCardDetailsFailure(
          error.response.data.message || "An error occurred"
        )
      );
    } else {
      dispatch(getCardDetailsFailure("An unexpected error occurred"));
    }
  }
};

export { PostCardData, GetCardData, GetCardDetails };
