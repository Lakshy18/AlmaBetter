import React, { useState } from "react";
import { useSelector } from "react-redux";

const ViewCard = () => {
  const flashCardNum = useSelector((state) => state.Reducer.showNum);
  const state = useSelector((state) => state.Reducer.inputData);

  
  const viewTermsdata = state.map((data, index) => data.termsData);
  const lll = viewTermsdata[flashCardNum].map((data, index) => data);
  
  const initial = lll[0].enterDefination
  const [showDescription, setShowDescription] = useState(initial);
  
//   const handelClick = (index) => {
//     return(
//         setShowDescription(lll[index].enterDefination)
//     )
//   }

  return (
    <>
      <div>
        {state.map((data, index) => {
          return index === flashCardNum ? (
            <div key={index}>
              <h1>{data.groupData.createGroup}</h1>
              <div>{data.groupData.adddescription}</div>
            </div>
          ) : null;
        })}
      </div>
      <div>
        {lll.map((data, index) => {
          return (
            <div key={index}>
              <div><span onClick={((index)=>setShowDescription(data.enterDefination))}>{`${index + 1}. ${data.enterTerm}`}</span></div>
              
            </div>
          );
        })}
        <div>{showDescription}</div>
      </div>
    </>
  );
};
export default ViewCard;
