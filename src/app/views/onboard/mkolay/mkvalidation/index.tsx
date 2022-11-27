/* eslint-disable */
import React, { useEffect } from "react";
import {
  getDatabase,
  set,
  child,
  get,
  ref,
  onValue,
  update,
} from "firebase/database";
import { db } from "../../../../../utils/firebase";

const Mkvalidation = () => {
  useEffect(() => {
    update(ref(db, "/user"), {
      status: true,
    });

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        data.user.status === true ? window.close() : null;
      }
    });
  }, []);

  return <div></div>;
};

export default Mkvalidation;
