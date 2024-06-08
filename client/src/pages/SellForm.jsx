import { useParams } from "react-router-dom";
import VillaForm from "../components/product-forms/villa-form/VillaForm";

import ApartmentForm from "../components/product-forms/apartment-form/ApartmentForm";
import LandForm from "../components/product-forms/land-form/LandForm";
import Artform from "../components/product-forms/art-form/ArtForm";
import Carform from "../components/product-forms/car-form/CarForm";
import FarmhouseForm from "../components/product-forms/farmhouse/Farmhouse";
import Jewelryform from "../components/product-forms/jewelry-form/JewelryForm";
import ResortForm from "../components/product-forms/resort-form/ResortForm";
import ShopForm from "../components/product-forms/shop-form/ShopForm";
import WarehouseForm from "../components/product-forms/warehouse/Warehouse";
import OfficeFrom from "../components/product-forms/office/OfficeForm";
import Yachtform from "../components/product-forms/yacht-form/YachtForm";
import UnderConstructionForm from "../components/product-forms/under-construction-project/UnderConstructionForm";
import HeritageProjectForm from "../components/product-forms/heritage-project/HeritageProjectForm";
import PropertyWithViewForm from "../components/product-forms/property-with-view/PropertyWithViewForm";
import OffPlanProjectForm from "../components/product-forms/off-plan-project/OffPlanProjectForm";

const SellForm = () => {
  const { category } = useParams();
  return (
    <>
      {category == "villa" ? <VillaForm category={category} /> : null}
      {category == "apartment" ? <ApartmentForm category={category} /> : null}
      {category == "art" ? <Artform category={category} /> : null}
      {category == "car" ? <Carform category={category} /> : null}
      {category == "farmhouse" ? <FarmhouseForm category={category} /> : null}
      {category == "jewellery" ? <Jewelryform category={category} /> : null}
      {category == "resort" ? <ResortForm category={category} /> : null}
      {category == "shop" ? <ShopForm category={category} /> : null}
      {category == "warehouse" ? <WarehouseForm category={category} /> : null}
      {category == "office" ? <OfficeFrom category={category} /> : null}
      {category == "yacht" ? <Yachtform category={category} /> : null}
      {category == "land-parcel" ? (
        <LandForm category={category.split("-").join(" ")} />
      ) : null}

      {category == "under-construction-project" ? (
        <UnderConstructionForm category={category.split("-").join(" ")} />
      ) : null}
      {category == "heritage-projects" ? (
        <HeritageProjectForm category={category.split("-").join(" ")} />
      ) : null}
      {category == "property-with-view" ? (
        <PropertyWithViewForm category={category.split("-").join(" ")} />
      ) : null}
      {category == "off-plan-project" ? (
        <OffPlanProjectForm category={category.split("-").join(" ")} />
      ) : null}
    </>
  );
};

export default SellForm;
