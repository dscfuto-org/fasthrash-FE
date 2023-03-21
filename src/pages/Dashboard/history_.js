import { Avatar } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
import { useParams } from "react-router-dom";
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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
export default function Recent() {
  const params = useParams();
  let buttonClass = {
    pending: "#fc270bbd",
    accepted: "#ffc400",
    collected: "#79d861",
  };
  const { items, businessName,user } = useSelector((state) => state.alert);
  const data = items.filter((item) => {
    return item.status !== "pending" && item.collectorId === params.profile;
  });
  console.log(businessName,user);
  return (
    <>
      {" "}
      <TableContainer>
        <Table variant="striped" colorScheme="grey">
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
            {data?.map((item, index) => {
              return (
                <Tr key={item._id}>
                  <Td>{index}</Td>
                  <Td className="text-bold">
                    <div className="flex">
                      <Avatar src={item.images[0]} mr="5px" size="sm" />
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
                  <Td isNumeric className="text-bold text-center">
                    {item.quantity}kg
                  </Td>
                  <Td className="">{item.address}</Td>
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
    </>
  );
}
