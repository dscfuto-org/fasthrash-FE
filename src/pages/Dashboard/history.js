import { Avatar, Box } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function History({ businessName, items }) {
  let buttonClass = {
    pending: "#fc270bbd",
    accepted: "#ffc400",
    collected: "#79d861",
  };
  return (
    <>
      {" "}
      {items.length > 0 &&
        <TableContainer>
          <Table variant='striped' colorScheme='grey'>
            <TableCaption>Transactions for {businessName} </TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Alert Created By</Th>
                <Th>Alert Status</Th>
                <Th>Quantity in Kg</Th>
                <Th>Location</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items?.map((item, index) => {
                return (
                  <Tr key={item._id}>
                    <Td>{index + 1}</Td>
                    <Td className="text-bold">
                      <div className="flex">
                        <Avatar src={item.image} mr="5px" size="sm" />
                        Alex Chima
                      </div>
                    </Td>
                    <Td className="center">
                      <Buttons
                        color={buttonClass[item.status]}
                        id={item._id}
                        name={item.status}
                      />
                    </Td>
                    <Td isNumeric className="text-bold text-center">{item.quantity}kg</Td>
                    {/* <Td className="center">{item.location}</Td> */}
                  </Tr>
                );
              })}

            </Tbody>
            <Tfoot>
              <Tr>
                <Th>#</Th>
                <Th>Alert Created By</Th>
                <Th>Alert Status</Th>
                <Th>Quantity in Kg</Th>
                <Th>Location</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      }
      {items.length === 0 &&
        <Box textAlign='center' fontWeight={600} fontSize={{ base: '18px', md: '22px' }} py={5}>
          We found no transactions recorded yet.
        </Box>
      }
    </>
  );
}
