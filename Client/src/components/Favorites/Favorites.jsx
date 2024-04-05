import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <Filters />
      <div>
        {favorites.map((m) => (
          <Card key={m.id} name={m.name} img={m.img} year={m.year} id={m.id} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
