import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../actions/index";
import FilterCard from "../components/Filtercard";
import LaunchCard from "../components/LaunchCard";

export const FILTER_TYPE = Object.freeze({
  LAUNCH_YEAR: "launch_year",
  SUCCESS_LAUNCH: "launch_success",
  SUCCESS_LAND: "land_success",
});

const FILTERS = {
  launch_year: null,
  launch_success: null,
  land_success: null,
};

const HomePage = (props) => {
  const [activeFilter, setActiveFilter] = useState(FILTERS);
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const queryParams = query.toString();
    const activeFilter = {};
    for (let param of query.entries()) {
      activeFilter[param[0]] = param[1];
    }
    setActiveFilter(activeFilter);
    getLaunchData(queryParams);
  }, []);

  const handleFilterUpdate = (val, filterType) => {
    let currentUrlParams = new URLSearchParams();

    let activeFilterClone = { ...activeFilter };

    if (
      activeFilterClone[filterType] &&
      activeFilterClone[filterType] === val
    ) {
      delete activeFilterClone[filterType];
      setActiveFilter(activeFilterClone);
    } else {
      activeFilterClone = { ...activeFilterClone, [filterType]: val };
      setActiveFilter(activeFilterClone);
    }

    Object.keys(activeFilterClone).forEach((key) => {
      currentUrlParams.set(key, activeFilterClone[key]);
    });

    const queryParams =
      window.location.pathname + "?" + currentUrlParams.toString();

    props.history.push(queryParams);
    getLaunchData(queryParams);
  };

  const getLaunchData = (queryParams) => {
    dispatch(fetchLaunches(queryParams));
  };

  const renderLaunches = () => {
    if (!launches || launches.length <= 0)
      return <h1 className="noLaunchData">No Data Available.</h1>;

    return launches.map((launch, index) => (
      <LaunchCard key={index} launch={launch} />
    ));
  };

  const head = () => (
    <Helmet>
      <title>Space X Launch Program</title>
      <meta property="og:title" content="Space X Launch Program" />
      <meta
        property="og:description"
        content="Display Space X Launch Program"
      />
      <meta property="og:type" content="website" />
      <meta name="copyright" content="Nikhil Kumar" />
      <meta name="author" content="Nikhil Kumar" />
      <meta name="description" content="Display Space X Launch Program" />
    </Helmet>
  );

  return (
    <div>
      {head()}
      {/* <div className="loader--outer">
        <div className="loader"></div>
      </div> */}
      <div className="outer--container">
        <h1>Space X Launch Program</h1>
        <div className="inner--container">
          <div className="filterCol">
            <FilterCard
              activeFilter={activeFilter}
              updateFilter={handleFilterUpdate}
            />
          </div>

          <div className="resultCol">{renderLaunches()}</div>
        </div>
        <div className="footer">
          <h5>Developed by: Nikhil Kumar</h5>
        </div>
      </div>
    </div>
  );
};

export function loadData(store, queryParams) {
  return store.dispatch(fetchLaunches(queryParams));
}

export default {
  loadData,
  component: HomePage,
};
