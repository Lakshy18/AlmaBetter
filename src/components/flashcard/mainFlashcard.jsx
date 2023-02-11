import React from "react";
import { Formik } from "formik";
import { Form, FieldArray, Field } from "formik";

import { formData } from "../../redux/action/action";

import { useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const MainFlashcard = () => {
  const dispatch = useDispatch();

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
          dispatch(formData(groupData, termsData));
        }}
      >
        {(formik) => (
          <Form>
            <FieldArray
              name="terms"
              render={(arrayHelpers) => {
                return (
                  <div>
                    <div className="mt-5 px-10 py-7 bg-white rounded-md shadow-lg sm:px-14">
                      <div key={"createGrp"} className="flex flex-col mb-4">
                        <label
                          htmlFor="createGroup"
                          className="pb-3 font-medium"
                        >
                          Create Group*
                        </label>
                        <Field
                          type="text"
                          id="createGroup"
                          name="createGroup"
                          required
                          onChange={formik.handleChange}
                          className="py-2 px-5 outline outline-2 rounded border-r-8 w-96"
                          // md hataya
                        />
                      </div>
                      <div key={"createDes"} className="flex flex-col">
                        <label
                          htmlFor="adddescription"
                          className="pb-3 font-medium"
                        >
                          Add Description*
                        </label>
                        <textarea
                          type="text"
                          id="adddescription"
                          name="adddescription"
                          required
                          onChange={formik.handleChange}
                          className="py-2 px-5 outline outline-2 rounded border-r-8 h-37"
                        />
                      </div>
                    </div>
                    <div className="mt-5 px-10 py-7 bg-white rounded-md shadow-lg sm:px14">
                      {formik.values.terms.map((data, index) => (
                        <div
                          key={index}
                          className="mb-4 flex flex-col sm:justify-start sm:flex-row "
                        >
                          <div className="relative flex flex-col mb-3 sm:mb-0 w-full sm:w-2/6 mr-4 ">
                            {/* <span id="num" className="bg-red-600">
                              {index + 1}
                            </span> */}

                            <label
                              htmlFor={`terms.${index}.enterTerm`}
                              className="pb-3 font-medium "
                            >
                              Enter Term*
                            </label>
                            <Field
                              type="text"
                              name={`terms.${index}.enterTerm`}
                              id={`terms.${index}.enterTerm`}
                              required
                              onChange={formik.handleChange}
                              className="px-5 py-2 outline outline-2 rounded border-r-8"
                            />
                          </div>
                          <div className="relative flex flex-col mb-3 sm:mb-0 w-full sm:w-2/6 mr-4 ">
                            <label
                              htmlFor={`terms.${index}.enterDefination`}
                              className="pb-3 font-medium"
                            >
                              Enter Defination*
                            </label>
                            <Field
                              type="text"
                              name={`terms.${index}.enterDefination`}
                              id={`terms.${index}.enterDefination`}
                              required
                              onChange={formik.handleChange}
                              className="px-5 py-2 outline outline-2 rounded border-r-8"
                            />
                          </div>

                          <div className="flex justify-end items-end sm:mt-0 mt-2">
                            <button className="px-5 text-2xl py-2 text-blue-700 rounded-md mr-2">
                              <AiOutlineEdit />
                            </button>
                            <button
                              className="px-5 py-2 rounded text-2xl text-red-700"
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <AiOutlineDelete />
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
                  </div>
                );
              }}
            ></FieldArray>
            <div className="py-20 flex justify-center items-center ">
              <button
                type="submit"
                className="bg-red-700 text-yellow-50 px-14 py-2 rounded-md"
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainFlashcard;
