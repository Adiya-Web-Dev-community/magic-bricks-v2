import { useParams } from "react-router-dom";
import Car from "../components/non-real-estate-landing-pages/car/Car";
import ViewCar from "../components/non-real-estate-landing-pages/car/ViewCar";
import Art from "../components/non-real-estate-landing-pages/art/Art";
import ViewArt from "../components/non-real-estate-landing-pages/art/ViewArt";
import Jewellery from "../components/non-real-estate-landing-pages/jewellery/Jewellery";
import ViewJewellery from "../components/non-real-estate-landing-pages/jewellery/ViewJewellery";
import Yacht from "../components/non-real-estate-landing-pages/yacht/Yacht";
import ViewYacht from "../components/non-real-estate-landing-pages/yacht/ViewYacht";

const OtherFractions = () => {
  const { category, id } = useParams();
  return (
    <>
      {category === "car" ? (
        id ? (
          <ViewCar id={id} />
        ) : (
          <Car category={category} />
        )
      ) : null}
      {category === "art" ? (
        id ? (
          <ViewArt id={id} />
        ) : (
          <Art category={category} />
        )
      ) : null}
      {category === "jewellery" ? (
        id ? (
          <ViewJewellery id={id} />
        ) : (
          <Jewellery category={category} />
        )
      ) : null}
      {category === "yacht" ? (
        id ? (
          <ViewYacht id={id} />
        ) : (
          <Yacht category={category} />
        )
      ) : null}
    </>
  );
};

export default OtherFractions;
