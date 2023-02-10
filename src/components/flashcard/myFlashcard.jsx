import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyFlashcard = () => {
  const state = useSelector((state) => state.Reducer.inputData);

  return (
    <>
      <div className="pb-7">
        <div className="grid md:grid-cols-3 gap-5 justify-center"></div>
        {state.map((card, index) => {
          return (
            <div key={index}>
              <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="#!">
                    <img
                      className="rounded-t-lg"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {card.groupData.createGroup}
                    </h5>
                    <div>{`${card.termsData.length}cards`}</div>
                    <p className="text-gray-700 text-base mb-4">
                      {card.groupData.adddescription}
                    </p>
                    <div>
                      <Link to={`/flashcard${index}`}>View Card arrow</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyFlashcard;
