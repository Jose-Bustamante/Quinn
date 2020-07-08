import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputDate } from "./components/InputDate";
import { loadLaunchAsync } from "./actions/launchActions";
import { selectLaunches } from "./selectors/launchSelectors";
import Map from "./components/MapComponent";

const App: React.FC = () => {
  let date = new Date();
  const formattedDateToday = date.toISOString().slice(0, 10);
  date.setMonth(date.getMonth() + 3);
  const formattedDateThreeMonths = date.toISOString().slice(0, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLaunchAsync.request());
  }, [dispatch]);

  const launches = useSelector(selectLaunches());

  return (
    <div className="App">
      <InputDate
        id="startdate"
        name="startdate"
        defaultValue={formattedDateToday}
      />
      <InputDate
        id="enddate"
        name="enddate"
        defaultValue={formattedDateThreeMonths}
      />
      <Map launches={launches} />
    </div>
  );
};

export default App;
