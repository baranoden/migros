/* eslint-disable */
import moment from "moment";
import "moment/locale/tr";
import { useEffect, useState } from "react";
import { db } from "../../../../../utils/firebase";
import { useDispatch } from "react-redux";
import { getDatabase, set, child, get, ref, onValue } from "firebase/database";
import { useAppSelector } from "../../../../../redux/store";
import "./Mkhistory.scss";
import { IoChevronForward } from "react-icons/io5";
import { historyTypes } from "./store/type";

const Mkaboutus = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.historySlice.products);
  const [history, setHistory] = useState<any>();
  function randomDate(start: any, end: any) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  const date = randomDate(new Date(2022, 0, 1), new Date()).toString();

  const processedData = products?.map((item: any) => ({
    location: "Migros",
    title: item.title,
    price: item.price,
    img: item.images[0],
    endDate: randomDate(new Date(2022, 10, 24), new Date()).toString(),
  }));
  const now = moment(new Date());
  useEffect(() => {
    dispatch({ type: historyTypes.GET_PRODUCTS });

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setHistory(data.product.processedData);
      }
    });
  }, []);
  useEffect(() => {
    if (products !== undefined) {
      set(ref(db, "/product"), {
        processedData,
      });
    }
  }, [products]);

  return (
    <div className="mkhistory">
      <div className="mkhistory-container">
        {history?.map((item: any, index: number) => {
          const momi = moment(item?.endDate);
          const quantity = momi.diff(now, "hours");

          return quantity <= -24 ? null : (
            <div className="mkhistory-item" key={index}>
              <div>
                <p>{item?.location}</p>
                <p>{quantity <= -24 ? null : `${Math.abs(quantity)} Saat`}</p>
              </div>
              <div>
                <p>{item?.price} TL</p>
                <IoChevronForward size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mkaboutus;
