import { Avatar } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
import setToken from "../../Auth/getToken";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Image,
  Box,
  TableCaption,
  TableContainer,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  Spinner,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useColors } from "../../App";
export default function Recent() {
  let buttonClass = {
    pending: "#fc270bbd",
    accepted: "#ffc400",
    collected: "#79d861",
  };
  const { items, businessName } = useSelector((state) => state.alert);
  const data = items.filter((item) => {
    return item.status === "pending";
  });
  const token = setToken();
  const [newData, SetnewData] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Wastepic, setWastepic] = useState({});
  const fetchAndUpdateData = useCallback(async () => {
    if (data.length === 0) {
      SetnewData([]);
      return;
    }
    const promises = data.map(async (name) => {
      const getName = await fetch(
        `https://fastrash-1337.ew.r.appspot.com/api/auth/profile/${name.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const {
        data: { user },
      } = await getName.json();
      return {
        ...name,
        Fullname: `${user.firstName} ${user.lastName}`,
      };
    });
    const newdata = await Promise.all(promises);
    SetnewData(newdata);
  }, [items, data, token]);

  useEffect(() => {
    fetchAndUpdateData();
  }, [items]);

  return (
    <>
      {" "}
      {data.length === 0 && (
        <Box textAlign="center">
          <Text fontSize="2xl">No Alerts To Accept Yet </Text>
        </Box>
      )}
      {newData.length <= 0 && data.length > 0 && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size="lg" />
        </Box>
      )}
      {newData.length > 0 && (
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
              {newData?.reverse()?.map((item, index) => {
                return (
                  <Tr key={item._id}>
                    <Td>{index + 1}</Td>
                    <Td cursor='pointer' className="text-bold">
                      <Tooltip label="View waste">
                        <div
                          className="flex"
                          onClick={() => {
                            onOpen();
                            setWastepic({
                              image: item.images[0],
                              address: item.address,
                              description:item.description,
                              amount: item.quantity,
                              delivery: item.deliveryTime,
                              price: item.costPerKg,
                            });
                          }}
                        >
                          <Avatar borderRadius='5px' src={item.images[0]} mr="5px" size="sm" />
                          <Text my='auto'>{item.Fullname}</Text>
                        </div>
                      </Tooltip>
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
                    <Td className="">
                      {" "}
                      {item.address.split(",").slice(0, 1)[0]}
                    </Td>
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
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader>Waste To Dispose</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image maxH={{ base: '350px', md: '400px' }} width='100%' height='100%' src={Wastepic.image} alt="waste Picture" />
            </Box>
            <Text mt='10px' fontWeight={700} color={useColors.appGreen}>Address: <span style={{ color: '#000' }}>{Wastepic.address}</span></Text>
            <Text mt='10px' fontWeight={700} color={useColors.appGreen}>Alert Description: <span style={{ color: '#000' }}>{Wastepic.description}</span></Text>
            <Text mt='10px' fontWeight={700} color={useColors.appGreen}>Amount in Kg: <span style={{ color: '#000' }}>{Wastepic.amount}kg</span></Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
