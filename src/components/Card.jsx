import { Link } from "react-router-dom";
import "../style/card&gallery.scss";

export default function Card({ id, title, cover, style }) {
  return (
    <div className="card" style={style}>
      <Link to={`/Logements/${id}`}>
        <img src={cover} alt={title} style={{ objectFit: "cover" }} />
        <h3 className="card_title">{title}</h3>
      </Link>
    </div>
  );
}
