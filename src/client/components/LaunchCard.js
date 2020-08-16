import React, { useImperativeHandle } from "react";
import Button from "./Button";

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
        className="launchImg"
      />
      <h6 className="launchCard--title">
        {launch.mission_name} #{launch.flight_number}
      </h6>

      <div>
        <h6 className="launchCard--missionId">Mission Ids:</h6>
        {launch.mission_id && launch.mission_id.length > 0 ? (
          <ul>
            {launch.mission_id.map((ids) => (
              <li>{ids}</li>
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
  );
};

export default LaunchCard;
