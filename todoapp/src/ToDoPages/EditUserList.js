import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

function EditUserList() {
  const Navigate = useNavigate();
  const { id } = useParams();
  //   console.log("id :", id);
  const [getData, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    async function fetchSpecificAPIData() {
      const getPostResult = await axios.get(
        `http://localhost:7000/UsersDetail/${id}`
      ); // use get method
      //   console.log("getPostResult : ", getPostResult.data);
      setData(getPostResult.data); // set in state
    }
    fetchSpecificAPIData();
  }, [id]);

  function onChangeTextFunc(e) {
    // setData(e.target.value)
    setData({
      // [e.target.name] : e.target.value
      // lets use with previous data
      ...getData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  async function onFormSubmitUpdate(e) {
    console.log("onFormSubmit");
    try {
      e.preventDefault();
      const getUpdateResult = await axios.put(
        `http://localhost:7000/UsersDetail/${id}`,
        getData
      ); // make put method to update
      console.log("getUpdateResult : ", getUpdateResult.data);
      Navigate("/getapi");
      // after save data, you can write your condition for show message with useState hook (set true / false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form>
        <div className="h">
          <h3>Edit Details</h3>
        </div>
        <div className="userListInput1">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={getData.name}
            onChange={(e) => onChangeTextFunc(e)}
          />
          <br />
          <input
            type="text"
            name="email"
            value={getData.email}
            placeholder="Enter Email"
            onChange={(e) => onChangeTextFunc(e)}
          />
          <br />
          <input
            type="text"
            name="phone"
            value={getData.phone}
            placeholder="Enter Email"
            onChange={(e) => onChangeTextFunc(e)}
          />
        </div>
        <button id="userListBtn1" onClick={(e) => onFormSubmitUpdate(e)}>
          Update Data
        </button>
      </form>
    </>
  );
}

export default EditUserList;
