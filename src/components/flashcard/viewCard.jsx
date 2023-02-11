import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsPrinter, BsShare, BsDownload } from "react-icons/bs";

const ViewCard = () => {
  const flashCardNum = useSelector((state) => state.Reducer.showNum);

  const state = useSelector((state) => state.Reducer.inputData);

  const viewTermsdata = state.map((data, index) => data.termsData);
  const lll = viewTermsdata[flashCardNum].map((data, index) => data);

  const initial = lll[0].enterDefination;
  const [showDescription, setShowDescription] = useState(initial);
  const [cardHandler, setCardHandler] = useState();
  

  const shareHandlerOpen = () => {};

  return (
    <>
      <div className="mb-12">
        {state.map((data, index) => {
          return index === flashCardNum ? (
            <div key={index}>
              <div className="grid grid-cols-12">
                <Link to="/myflashcard" className="mt-3 mb-3 text-white">
                  <BsArrowLeft />
                </Link>
                <div className="mt-3 mb-3 text-xl text-white">
                  {data.groupData.createGroup}
                </div>
              </div>
              <div className="mb-3 pl-20 text-white">
                {data.groupData.adddescription}
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start my-11 lg:flex-row lg:justify-between sm:items-center sm:justify-center sm:flex-col mb-14">
        <div className="w-full bg-white rounded-lg px-1 shadow-lg lg:w-1/5 sm:w-full ">
          <p className="text-sm px-5 py-2 text-black">flashcard</p>
          <hr className="bg-gray-200" style={{ height: "1px" }} />
          {lll.map((data, index) => {
            return (
              <div key={index}>
                <div  className="mt-3 hover" style={{cursor:"pointer"}}>
                  <span
                    onClick={(index) =>
                      setShowDescription(data.enterDefination)
                    }
                   
                  >{`${index + 1}. ${data.enterTerm}`}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-2/4 sm:w-full">
          <div className="w-full flex flex-col justify-between px-5 py-9 sm:flex-col lg:flex-row bg-white rounded-lg shadow-lg">
            <div className="w-full text-justify sm:mt-6 lg:mt-0 sm:w-full lg:w-5/5">
              <p>{showDescription}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/5 sm:w-full">
          <div className="mb-2 shadow-lg">
            <button
              onClick={shareHandlerOpen}
              className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700"
            >
              <BsShare className="mr-5" />
              <span>Share</span>
            </button>
          </div>
          <div className="mb-2 shadow-lg">
            <button className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700">
              <BsDownload className="mr-5" />
              <span>Download</span>
            </button>
          </div>
          <div className="mb-2 shadow-lg">
            <button className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700">
              <BsPrinter className="mr-5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewCard;
