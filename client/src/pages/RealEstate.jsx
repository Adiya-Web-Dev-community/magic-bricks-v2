import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../helper/axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { propertiesConfig } from "../configs/properties.config";
console.log(propertiesConfig);
import { propertiesCategoryConfig } from "../configs/propertiesCategory.config";
import FilterBox from "../components/FilterBox";

const RealEstate = () => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dummyProperties = eval(`propertiesConfig['${category}']`);
  const [properties, setProperties] = useState([]);
  let oneCategory = propertiesCategoryConfig.find(
    (i) => i.categoryRoute === category
  );
  oneCategory
    ? null
    : (oneCategory = propertiesCategoryConfig[0].subCategories.find(
        (i) => i.categoryRoute === category
      ));

  // Search Box
  const [inputCity, setInputCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const getProperties = async () => {
    await axios
      .post("/get-propertycategory-data", { propertyCategory: category })
      .then((res) => {
        setIsLoading(true);
        console.log(res);
        setProperties(
          res?.data?.DocsList?.length ? res.data.DocsList : dummyProperties
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setProperties(dummyProperties);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProperties();
    setIsLoading(true);
  }, [category]);

  return (
    <>
      <section className="relative h-[30vh] w-full text-white flex items-center justify-center bg-slate-900">
        <div className="w-[700px] text-center space-y-2">
          <h1 className="text-3xl font-serif text-slate-400">
            {oneCategory.category}
          </h1>
          <p className="text-slate-500 px-5 md:px-0 text-sm leading-normal font-quicksand">
            {oneCategory.description}
          </p>
        </div>
        <section className="absolute -bottom-[26px] m-auto bg-white px-5 py-2.5 rounded-full shadow">
          <FilterBox
            inputCity={inputCity}
            setInputCity={setInputCity}
            setSearchCity={setSearchCity}
          />
        </section>
      </section>
      <section className="bg-slate-100 flex justify-center py-[calc(40px+26px)]">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {Array(3)
              .fill(0)
              .map((_, j) => (
                <Loading key={j} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {properties
              .filter((i) =>
                i.city.toLowerCase().includes(inputCity.toLowerCase())
              )
              .map((i, j) => (
                <Card key={j} data={i} category={category} />
              ))}
          </div>
        )}
      </section>
    </>
  );
};

export default RealEstate;
