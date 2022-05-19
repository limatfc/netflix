import DashboardHero from "../../components/client/DashboardHero";
import useGetCollection from "../../hooks/useGetCollection";
import useAccountProvider from "../../store/useAccountProvider";
import Loading from "../Loading";
import Error from "../Error";

export default function ClientDashboard() {
  const { titlesHandler } = useAccountProvider();
  const { status } = useGetCollection(titlesHandler, "titles");

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div>
      <DashboardHero />
    </div>
  );
}
