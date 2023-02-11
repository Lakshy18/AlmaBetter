import { useDispatch, useSelector } from "react-redux";
import { showCardData } from "../../redux/action/action";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyFlashcard = () => {
  const state = useSelector((state) => state.Reducer.inputData);
  const dispatch = useDispatch();

  const [cardNum, setCardNum] = useState(6);
  const showAllCard = () => {
    setCardNum(state.length);
  };

  return (
    <>
      <div className="pb-7">
        <div className="grid md:grid-cols-3 gap-5 justify-center">
          {state.map((card, index) => {
            return index < cardNum ? (
              <div key={index}>
                <div className="p-2 max-w-sm bg-white rounded border border-gray-200 shadow-md">
                  <div className="rounded shadow-lg bg-white max-w-sm">
                    <img
                      className="rounded-t-lg"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                    <div className="p-3">
                      <h5 className="text-black text-xl font-medium mb-2 flex justify-center">
                        {card.groupData.createGroup}
                      </h5>
                      <p className="text-gray-600 flex justify-center mb-3">
                        {card.groupData.adddescription.length >= 27
                          ? `${card.groupData.adddescription.substring(
                              0,
                              27
                            )} ...`
                          : card.groupData.adddescription}
                      </p>
                      <div className="font-medium mb-3 flex justify-center">{`${card.termsData.length}cards`}</div>
                      <div>
                        <Link
                          to={`/flashcard${index}`}
                          onClick={() => dispatch(showCardData(index))}
                          className="flex justify-center"
                        >
                          View Card arrow
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
        <div
          className="text-right pb-11 px-5"
          style={cardNum < 7 ? { display: "block" } : { display: "none" }}
        >
          {state.length === 0 ? (
            <div>
              <div className="font-semibold ">
                <span>OOPs</span> No flashcard found. Please create a new
                flashcard
              </div>
            </div>
          ) : (
            <div>
              <button onClick={showAllCard} className="text-red-500 font-bold">
                See All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyFlashcard;
