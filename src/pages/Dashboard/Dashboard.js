import {
  Box,
  Flex,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToState } from "../../store/alerts";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const loaderData = useLoaderData();
  const { data, dashboardData } = loaderData;

  const dispatch = useDispatch();
  const { completed, pending } = useSelector((state) => state.alerts);

  useEffect(() => {
    dispatch(addToState(data.alerts));
  }, [data]);
  return (
    <Box backgroundColor="blackAlpha" width="100%" height="100%" p="20px">
      <Flex justify="space-between" alignItems="center">
        <Box>
          <Heading>{dashboardData.businessName}</Heading>
        </Box>
        <Box>
          <Text>1234 created Alerts</Text>
        </Box>
      </Flex>
      <Stat borderRadius="8px" p="4" border="1px solid #eeee">
        <StatLabel>Total Alerts Pending</StatLabel>
        <StatNumber>{pending}</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
      <TableContainer margin="20px">
        <Table variant="striped" colorScheme="yellow">
          <TableCaption placement="top"> Created Alerts </TableCaption>
          <Thead>
            <Tr>
              <Th>Creator</Th>
              <Th>Request</Th>
              <Th isNumeric>Pending</Th>
              <Th isNumeric>Completed</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Creator 1</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Creator 2</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Creator 3</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Creator 4</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
