import datas from "../data/data";
import Card from "../components/Card";
import "../style/card&gallery.scss";

export default function Gallery() {
  return (
    <main className="gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
            style={{
              backgroundImage: `url(${data.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        );
      })}
    </main>
  );
}
