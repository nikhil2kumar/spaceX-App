import React, { useEffect } from "react";
import Button from "./Button";
import { FILTER_TYPE } from "../pages/HomePage";

const LAUNCH_YEAR = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const FilterCard = ({ updateFilter, activeFilter }) => {
  const renderFilterSection = (title, filterType, filterArray, onClick) => (
    <div>
      <label className="filterCard--title">{title}</label>
      <div className="filterCard--filterRow">
        {filterArray.map((filter, index) => (
          <Button
            key={index}
            text={filter}
            active={filter === filterType}
            onClick={() => {
              onClick(filter);
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="filterCard">
      <h3 className="filterCard--header">Filters</h3>
      {renderFilterSection(
        "Launch Year",
        activeFilter[FILTER_TYPE.LAUNCH_YEAR],
        LAUNCH_YEAR,
        (val) => updateFilter(val, FILTER_TYPE.LAUNCH_YEAR)
      )}
      {renderFilterSection(
        "Successful Launch",
        activeFilter[FILTER_TYPE.SUCCESS_LAUNCH],
        ["true", "false"],
        (val) => updateFilter(val, FILTER_TYPE.SUCCESS_LAUNCH)
      )}
      {renderFilterSection(
        "Successful Landing",
        activeFilter[FILTER_TYPE.SUCCESS_LAND],
        ["true", "false"],
        (val) => updateFilter(val, FILTER_TYPE.SUCCESS_LAND)
      )}
    </div>
  );
};

export default FilterCard;
