import { useEffect } from "react";
import "./Mkonboard.scss";
import Location from "../../../../../assets/img/9.svg";
import AboutUs from "../../../../../assets/img/10.svg";
import History from "../../../../../assets/img/11.svg";
import { useNavigate } from "react-router-dom";
import { getDatabase, set, child, get, ref, onValue } from "firebase/database";
import { toast } from "react-hot-toast";
import { db } from "../../../../../utils/firebase";
import { useDispatch } from "react-redux";

const Mkonboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleProtectedRoute = (a: string) => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        data.user.status === true
          ? navigate(`/mkolay/${a}`)
          : toast.error("QR CODE");
      } else {
        toast.error("QR CODE");
      }
    });
  };
  useEffect(() => {
    set(ref(db, "/user"), {
      status: false,
    });
  }, []);

  return (
    <div className="mkonboard">
      <div className="mkonboard-texts">
        <p>Mkolay’a hoş geldin.</p>
        <p>Mkolay’ı kullanabilmen için bulunduğun mağazayı belirlemeliyiz.</p>
        <p style={{ marginTop: "1rem" }}>
          <b>Aşağıdaki tercihlerinden</b> birini seçerek devam edebilirsin.
        </p>
      </div>
      <div className="mkonboard-routes">
        <button>KONUM SERVİSLERİ</button>
        <button onClick={() => navigate("/mkolay/qrcode")}>QR KOD</button>
      </div>
      <div className="mkonboard-boxes">
        <button onClick={() => handleProtectedRoute("aboutus")}>
          <img src={AboutUs} />
        </button>
        <button>
          <img src={Location} />
        </button>
        <button onClick={() => handleProtectedRoute("history")}>
          <img src={History} />
        </button>
      </div>
    </div>
  );
};

export default Mkonboard;
