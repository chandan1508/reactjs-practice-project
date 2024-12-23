import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import { FaL } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridAutoColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions/>
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard imgUrl="/dot_bg.svg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique porro magni eius esse. Neque."
            tagText="Loan"
            inverted={false}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard imgUrl="/grid_bg.svg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            tagText="contact"
            inverted={true}
          />
        </GridItem>

      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;


