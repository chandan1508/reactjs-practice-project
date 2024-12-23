import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { LuArrowUpRight } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:15 PM", "9:15 PM", "10:15 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack spacing={-1} fontWeight="medium" color="green.300">
                <Icon as={LuArrowUpRight} />
                <Text textSize="sm" fontWeight="medium">
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinus} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" >
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {
              ["1H", "1D", "1W", "1M"].map((tab) =>(
                <Tab _selected={{bg: "white"}} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
              ))
            }
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="5px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
