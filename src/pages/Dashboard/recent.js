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
  Image,
  Box,
  TableCaption,
  TableContainer,
  Modal,
  Text,
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
import { useState } from "react";
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
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [Wastepic, setWastepic] = useState("");
  return (
    <>
      {" "}
      {data.length === 0 && (
        <Box textAlign="center">
          <Text fontSize="2xl">No Alerts To Accept Yet </Text>
        </Box>
      )}
      {data.length > 0 && (
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
                      <Tooltip label="View waste">
                        <div
                          className="flex"
                          onClick={() => {
                            setOverlay(<OverlayOne />);
                            onOpen();
                            setWastepic(item.images[0]);
                          }}
                        >
                          <Avatar src={item.images[0]} mr="5px" size="sm" />
                          Alex Chima
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
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Waste To Dispose</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box boxSize="">
              <Image src={Wastepic} alt="waste Picture" />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
