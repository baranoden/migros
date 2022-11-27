/* eslint-disable */
import { useEffect } from "react";
import QRCode from "react-qr-code";
import "./Mkqrcode.scss";
import { getDatabase, set, child, get, ref, onValue } from "firebase/database";
import { db } from "../../../../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Mkqrcode = () => {
  const navigate = useNavigate();
  const value = () => `${process.env.REACT_APP_LOCAL_IP}/mkolay/mkvalidation`;
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        data.user.status === true ? navigate("/mkolay/history") : null;
      }
    });
  }, []);

  return (
    <div className="mkqrcode">
      <div className="mkqrcode-texts">
        <p>Hoş Geldiniz.</p>
        <p>
          Mkolay Kantin’e giriş yapabilmek için <b>QR kodu</b> turnikeye okutman
          gerekiyor.
        </p>
      </div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 200,
          width: "100%",
        }}
        className="mkqrcode-action"
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value() as any}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default Mkqrcode;
