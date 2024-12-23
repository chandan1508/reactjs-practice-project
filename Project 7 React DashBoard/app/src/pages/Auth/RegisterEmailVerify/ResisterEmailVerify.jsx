import {
  Icon,
  VStack,
  Text,
  Button,
  Box,
  Center,
  Container,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import Card from "../../../components/Card";
import { useLocation, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useEffect } from "react";

const ResisterEmailVerify = () => {
  const {email} = useParams();
  const toast = useToast();
 

  console.log(location);

  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>;
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

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
              <Icon as={FaEnvelope} boxSize="48px" color="p.purple" />
              <Text fontWeight="medium" textStyle="h4" color="p.black">
                Email Vertification
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Lorem ipsum dolor sit, amet consectetur{" "}
                <Box as="b" color="black">
                  {email}
                </Box>{" "}
                adipisicing elit. Consequatur, facilis. Ipsum, tenetur.
              </Text>
              <Button
                w="full"
                variant="outline"
                onClick={() => {
                  mutate({ email });
                }}
                isLoading={isLoading}
              >
                Re-Send Email
              </Button>
            </VStack>
          </Card>
       
      </Center>
    </Container>
  );
};

export default ResisterEmailVerify;
