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
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
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
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access your account.
            </Text>
            <Box w="full">
                <Link to="/signin">
                <Button w="full">Signin</Button>
                </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
