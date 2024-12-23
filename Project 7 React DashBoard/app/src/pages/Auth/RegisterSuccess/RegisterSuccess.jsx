import {
  Box,
  Button,
  Center,
  Icon,
  VStack,
  Text,
  Container,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { verifyEmailAddressSignup } from "../../../api/query/userQuery";

const RegisterSuccess = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate, isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });

      navigate("/signup");
    },
  });

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container>
      <Center minH="100vh">
        {isSuccess && (
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
                Successfully Registered
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, facilis. Ipsum, tenetur.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
