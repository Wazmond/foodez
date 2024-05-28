import styled from "styled-components";
import DailyFoodGoal from "./DashboardPage/DailyFoodGoal";
import DailyFitnessGoal from "./DashboardPage/DailyFitnessGoal";
import WeeklyFitnessGoal from "./DashboardPage/WeeklyFitnessGoal";

const DashboardPage = styled.div`
    background-color: white;
    border-radius: 7px;
    height: 100%;
    width: 100%;
    font-family: roboto-regular;

    padding: 25px;
`;

var user;

export default function Dashboard() {
    return(
        <DashboardPage>
            <h1>Welcome {user}</h1>

            <DailyFoodGoal /> {/* done */}
            <DailyFitnessGoal />
            <WeeklyFitnessGoal />
        </DashboardPage>
    );
};