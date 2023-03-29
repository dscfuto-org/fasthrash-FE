import { Avatar } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
import { useParams } from "react-router-dom";
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
  Spinner,
  Box,
  Text,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
export default function Recent() {
  const params = useParams();
  let buttonClass = {
    pending: "#fc270bbd",
    accepted: "#ffc400",
    collected: "#79d861",
  };
  const { items, businessName } = useSelector((state) => state.alert);
  const data = items.filter((item) => {
    return item.status !== "pending" && item.collectorId === params.profile;
  });
  let token = setToken();
  console.log(items);
  const [newData, SetnewData] = useState([]);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setOverlay] = useState(<OverlayOne />);
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
    const newData = await Promise.all(promises);
    SetnewData(newData);
  }, [data, token]);
  useEffect(() => {
    fetchAndUpdateData();
  }, [fetchAndUpdateData]);

  return (
    <>
      {" "}
      {newData.length <= 0 && data.length > 0 && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size="md" />
        </Box>
      )}
      {data.length <= 0 && (
        <Text textAlign="center" fontSize="2xl">
          No History Yet
        </Text>
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
              {newData?.map((item, index) => {
                return (
                  <Tr key={item._id}>
                    <Td>{index + 1}</Td>
                    <Td className="text-bold">
                      <Tooltip label="View waste Description And Picture">
                        <div
                          className="flex"
                          onClick={() => {
                            setOverlay(<OverlayOne />);
                            onOpen();
                            setWastepic({
                              image: item.images[0],
                              Text: item.address,
                              amount: item.quantity,
                            });
                          }}
                        >
                          <Avatar src={item.images[0]} mr="5px" size="sm" />
                          {item.Fullname}
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
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Waste To Dispose</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box boxSize="">
              <Image src={Wastepic.image} alt="waste Picture" />
            </Box>
            <Text>Address:{Wastepic.Text}</Text>
            <Text as="b">Amount in Kg:{Wastepic.amount}kg</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
