import DashboardHero from "../../components/client/DashboardHero";
import useGetCollection from "../../hooks/useGetCollection";
import useAccountProvider from "../../store/useAccountProvider";
import Loading from "../Loading";
import Error from "../Error";
import classes from "../../styles/client/ClientDashboard.module.css";
import TitleCategories from "../../components/client/TitleCategories";

export default function ClientDashboard() {
  const { titlesHandler } = useAccountProvider();
  const { status } = useGetCollection(titlesHandler, "titles");

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  return (
    <div className={classes.clientDashboard}>
      <DashboardHero />
      <TitleCategories />
    </div>
  );
}
