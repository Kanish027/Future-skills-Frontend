import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { GetCardDetails } from "../actions/Card";

const CardDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { cardDetails } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    if (id) {
      dispatch(GetCardDetails(id));
    }
  }, [dispatch, id]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-6">{cardDetails?.title}</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {cardDetails?.description}
          </h2>
        </div>
      </main>
    </div>
  );
};

export default CardDetails;
