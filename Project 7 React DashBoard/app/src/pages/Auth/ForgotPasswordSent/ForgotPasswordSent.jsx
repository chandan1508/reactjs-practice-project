import {
  Icon,
  VStack,
  Text,
  Button,
  Box,
  Center,
  Container,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import Card from "../../../components/Card";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {
  const params = useParams();

  const { email } = useParams();

  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={FaCheck} boxSize="48px" color="green" />
            <Text fontWeight="medium" textStyle="h4" color="p.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Lorem ipsum dolor sit, amet consectetur{" "}
              <Box as="b" color="black">
                {email}
              </Box>{" "}
              adipisicing elit. Consequatur, facilis. Ipsum, tenetur.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
