import React, { memo } from "react";

const LaunchCard = ({ launch }) => {
  const renderRow = (key, value) => (
    <div className="launchCard--row">
      <h6>{key}: </h6>
      <label className="launchCard--row_value"> {value}</label>
    </div>
  );

  const NoData = () => <label className="noDataLabel">No Data Available</label>;

  const getLandSuccess = () => {
    const core = launch.rocket.first_stage.cores.find(
      (core) => typeof core.land_success === "boolean"
    );

    if (!core) return "No Data Available";
    if (core.land_success) return "Yes";
    else return "No";
  };

  return (
    <div className="launchCard">
      <img
        src={"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}
        alt="Launch Image"
        className="launchImg"
      />
      <h6 className="launchCard--title">
        {launch.mission_name} #{launch.flight_number}
      </h6>
      <div className="launchCard--section">
        <div>
          <h6 className="launchCard--missionId">Mission Ids:</h6>
          {launch.mission_id && launch.mission_id.length > 0 ? (
            <ul>
              {launch.mission_id.map((ids) => (
                <li key={ids}>{ids}</li>
              ))}
            </ul>
          ) : (
            <NoData />
          )}
        </div>
        {renderRow("Launch Year", launch.launch_year)}
        {renderRow(
          "Successful Launch",
          launch.launch_success === true
            ? "Yes"
            : launch.launch_success === false
            ? "No"
            : "No Data Available"
        )}
        {renderRow("Successful Landing", getLandSuccess())}
      </div>
    </div>
  );
};

export default memo(LaunchCard);
