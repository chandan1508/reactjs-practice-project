import { CiMail } from "react-icons/ci";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { FaRegMessage } from "react-icons/fa6";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="15px">
        <SupportCard
          leftComponent={<ContactCard />}
          icon={CiMail}
          title="Contact Us"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nihil
          porro sit!"
        />

        <SupportCard
          leftComponent={
            <InfoCard
              imgUrl="/grid_bg.svg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              tagText="contact"
              inverted={true}
            />
          }
          icon={FaRegMessage}
          title="Live chat"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nihil
          porro sit!"
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
