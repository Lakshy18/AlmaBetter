import React from "react";
import { Formik } from "formik";
import { Form, FieldArray, Field } from "formik";

import { formData } from "../../redux/action/action";

import { useDispatch, useSelector } from "react-redux";

const MainFlashcard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData.terms);

  

  return (
    <>
      <Formik
        initialValues={{
          createGroup: "",
          adddescription: "",
          terms: [
            {
              enterTerm: "",
              enterDefination: "",
            },
          ],
        }}
        onSubmit={(values) => {
          // console.log(values.createGroup);
          // console.log(`${values.terms.length}cards`);
          // console.log(values.adddescription);
          // console.log(
          //   values.terms.map((data, index) => data)
          // );
          const groupData = {
            createGroup: values.createGroup,
            adddescription: values.adddescription,
          };
          const termsData = values.terms.map((data, index) => data);
          dispatch(formData(groupData,termsData));
        }}
      >
        {(formik) => (
          <Form>
            <FieldArray
              name="terms"
              render={(arrayHelpers) => {
                return (
                  <div>
                    <div>
                      <div key={"createGrp"}>
                        <label htmlFor="createGroup">Create Group*</label>
                        <Field
                          type="text"
                          id="createGroup"
                          name="createGroup"
                          required
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div key={"createDes"}>
                        <label htmlFor="adddescription">Add Description*</label>
                        <Field
                          type="text"
                          id="adddescription"
                          name="adddescription"
                          required
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    {formik.values.terms.map((data, index) => (
                      <div key={index}>
                        {index + 1}
                        <label htmlFor={`terms.${index}.enterTerm`}>
                          Enter Term*
                        </label>
                        <Field
                          type="text"
                          name={`terms.${index}.enterTerm`}
                          id={`terms.${index}.enterTerm`}
                          required
                          onChange={formik.handleChange}
                        />

                        <label htmlFor={`terms.${index}.enterDefination`}>
                          Enter Defination*
                        </label>
                        <Field
                          type="text"
                          name={`terms.${index}.enterDefination`}
                          id={`terms.${index}.enterDefination`}
                          required
                          onChange={formik.handleChange}
                        />
                        <div>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            X
                          </button>
                        </div>
                        <br />
                      </div>
                    ))}
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            enterTerm: "",
                            enterDefination: "",
                          })
                        }
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                );
              }}
            ></FieldArray>
            <div>
              <button type="submit">Create</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainFlashcard;
