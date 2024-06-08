import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { chartData } from "../configs/chartData.config";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const CustomSlider = styled(Slider)({
  color: "#22d3ee",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
    color: "#22d3ee",
  },
  "& .MuiSlider-thumb": {
    color: "#22d3ee",
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

const Calculator = () => {
  const [data, setData] = useState(chartData);
  const [vals, setVals] = useState({
    initialInvestment: 50000,
    propertyValueGrowth: 30,
    annualRentalYield: 10,
  });
  const handleChange = (params) => (e) => {
    setVals({ ...vals, [params]: e.target.value });
    // setData([
    //   {
    //     name: "2024",
    //     propertyValueGrowth:
    //       vals.initialInvestment * (vals.propertyValueGrowth / 100),
    //     annualRentalYield:
    //       vals.initialInvestment * (vals.annualRentalYield / 100) * 5,
    //     initialInvestment: vals.initialInvestment,
    //   },
    //   {
    //     name: "2025",
    //     propertyValueGrowth:
    //       vals.initialInvestment * (vals.propertyValueGrowth / 100) + 2 * 10000,
    //     annualRentalYield:
    //       vals.initialInvestment * (vals.annualRentalYield / 100) * 5 +
    //       2 * 10000,
    //     initialInvestment: vals.initialInvestment,
    //   },
    //   {
    //     name: "2026",
    //     propertyValueGrowth:
    //       vals.initialInvestment * (vals.propertyValueGrowth / 100) + 3 * 10000,
    //     annualRentalYield:
    //       vals.initialInvestment * (vals.annualRentalYield / 100) * 5 +
    //       3 * 10000,
    //     initialInvestment: vals.initialInvestment,
    //   },
    //   {
    //     name: "2027",
    //     propertyValueGrowth:
    //       vals.initialInvestment * (vals.propertyValueGrowth / 100) + 3 * 10000,
    //     annualRentalYield:
    //       vals.initialInvestment * (vals.annualRentalYield / 100) * 5 +
    //       3 * 10000,
    //     initialInvestment: vals.initialInvestment,
    //   },
    //   {
    //     name: "2028",
    //     propertyValueGrowth:
    //       vals.initialInvestment * (vals.propertyValueGrowth / 100) + 4 * 10000,
    //     annualRentalYield:
    //       vals.initialInvestment * (vals.annualRentalYield / 100) * 5 +
    //       4 * 10000,
    //     initialInvestment: vals.initialInvestment,
    //   },
    // ]);
  };

  return (
    <main className="my-[65px] lg:my-[85px]">
      <h1 className="text-center mb-5 text-3xl text-slate-600 font-serif">
        Investment calculator
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 mx-auto lg:w-[95%] xl:w-10/12">
        <section className="flex flex-col justify-around px-5 lg:px-10 py-5 mx-5 lg:mx-0 border border-slate-300 rounded-lg">
          <p className="font-serif text-slate-700 text-xl">
            How much do you want to invest?
          </p>
          <div>
            <div>
              <p className="flex justify-between text-slate-500">
                <span>Initial investment</span>
                <span>
                  <span className="text-sm">INR</span>{" "}
                  {new Intl.NumberFormat("en").format(vals.initialInvestment)}
                </span>
              </p>
              <CustomSlider
                value={vals.initialInvestment}
                onChange={handleChange("initialInvestment")}
                aria-label="initialInvestment"
                defaultValue={50000}
                step={500}
                min={500}
                max={200000}
              />
            </div>
            <div>
              <p className="flex justify-between text-slate-500">
                <span>Property value growth (5 year)</span>
                <span>{vals.propertyValueGrowth}%</span>
              </p>
              <CustomSlider
                value={vals.propertyValueGrowth}
                onChange={handleChange("propertyValueGrowth")}
                aria-label="propertyValueGrowth"
                defaultValue={30}
                step={1}
                min={1}
                max={100}
              />
            </div>
            <div>
              <p className="flex justify-between text-slate-500">
                <span>Expected annual rental yield</span>
                <span>{vals.annualRentalYield}%</span>
              </p>
              <CustomSlider
                value={vals.annualRentalYield}
                onChange={handleChange("annualRentalYield")}
                aria-label="annualRentalYield"
                defaultValue={10}
                step={1}
                min={1}
                max={15}
              />
            </div>
          </div>
          <p className="text-slate-500 text-xs">
            All projected values are before any property costs and platform
            fees, and based on a 5-year holding period. We expect the asset
            value to grow 30% over the next 5 years.
          </p>
        </section>

        <section className="flex flex-col items-center text-center space-y-5">
          <div className="text-slate-500 font-serif text-xl">
            <p>Projected investment return of</p>
            <p>
              <span className="font-sans text-slate-700">
                <span className="text-lg">INR</span>{" "}
                {new Intl.NumberFormat("en").format(
                  vals.initialInvestment +
                    vals.initialInvestment * (vals.propertyValueGrowth / 100) +
                    vals.initialInvestment * (vals.annualRentalYield / 100) * 5
                )}
              </span>{" "}
              in <span className="font-sans text-slate-700">5 years</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row border border-slate-200 rounded-lg px-5 pb-2.5 pt-4 space-x-0 lg:space-x-10 space-y-2.5 lg:space-y-0 w-11/12 lg:w-auto">
            <div className="flex space-x-2">
              <p className="w-3 h-3 bg-slate-900 rounded-full"></p>
              <p className="flex flex-row justify-between lg:justify-start w-full lg:w-auto lg:flex-col items-start text-sm -mt-[5.5px]">
                <span className="text-slate-500">Investment</span>
                <span>
                  <span className="text-xs">INR</span>{" "}
                  {new Intl.NumberFormat("en").format(vals.initialInvestment)}
                </span>
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="w-3 h-3 bg-yellow-300 rounded-full"></p>
              <p className="flex flex-row justify-between lg:justify-start w-full lg:w-auto lg:flex-col items-start text-sm -mt-[5.5px]">
                <span className="text-slate-500">Total rental income</span>
                <span>
                  <span className="text-xs">INR</span>{" "}
                  {new Intl.NumberFormat("en").format(
                    vals.initialInvestment * (vals.annualRentalYield / 100) * 5
                  )}
                </span>
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="w-3 h-3 bg-cyan-400 rounded-full"></p>
              <p className="flex flex-row justify-between lg:justify-start w-full lg:w-auto lg:flex-col items-start text-sm -mt-[5.5px]">
                <span className="text-slate-500">Value appreciation</span>
                <span>
                  <span className="text-xs">INR</span>{" "}
                  {new Intl.NumberFormat("en").format(
                    vals.initialInvestment * (vals.propertyValueGrowth / 100)
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="text-xs">
            <BarChart
              width={350}
              height={250}
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="xData" />
              <YAxis
                type="number"
                domain={[50000, 200000]}
                ticks={[50000, 100000, 150000, 200000, 250000]}
              />
              <Bar dataKey="initialInvestment" stackId="a" fill="#0f172a" />
              <Bar dataKey="annualRentalYield" stackId="a" fill="#fde047" />
              <Bar dataKey="propertyValueGrowth" stackId="a" fill="#22d3ee" />
            </BarChart>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Calculator;
