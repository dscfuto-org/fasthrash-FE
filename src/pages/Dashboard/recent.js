import { Avatar } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
import setToken from "../../Auth/getToken";
import Moment from 'react-moment';
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
import { FcBusinessContact, FcBusinessman, FcClock, FcDocument, FcDonate, FcEmptyTrash, FcExpired, FcFullTrash, FcHome } from "react-icons/fc";
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
              {[...newData]?.reverse()?.map((item, index) => {
                return (
                  <Tr key={item._id}>
                    <Td>{index + 1}</Td>
                    <Td cursor="pointer" className="text-bold">
                      <Tooltip label="View waste">
                        <div
                          className="flex"
                          onClick={() => {
                            onOpen();
                            setWastepic({
                              creator: item.userName,
                              email: item.userEmail,
                              image: item.images[0],
                              address: item.address,
                              description: item.description,
                              description: item.description,
                              amount: item.quantity,
                              costPerKg: item.costPerKg,
                              createdAt: item.createdAt,
                              updatedAt: item.updatedAt
                            });
                          }}
                        >
                          <Avatar
                            borderRadius="5px"
                            src={item.images[0]}
                            mr="5px"
                            size="sm"
                          />
                          <Text my="auto">{item.Fullname}</Text>
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
      <Modal size='lg' scrollBehavior="inside" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader display='flex' alignItems='center' justifyContent='left'><FcFullTrash style={{ marginRight: 3, fontSize: '22px' }} /> Waste To Dispose</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image maxH={{ base: '350px', md: '400px' }} borderRadius='5px' width='100%' height='100%' src={Wastepic.image} alt="waste Picture" />
            </Box>

            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcBusinessman style={{ marginRight: 3, fontSize: '22px' }} /> Created By:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.creator}</span>
            </Text>

            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcBusinessContact style={{ marginRight: 3, fontSize: '22px' }} /> Contact Email:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.email}</span>
            </Text>

            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcHome style={{ marginRight: 3, fontSize: '22px' }} /> Address:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.address}</span>
            </Text>
            <Box display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcDocument style={{ marginRight: 3, fontSize: '22px' }} /> Alert Description:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.description}</span>
            </Box>
            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcEmptyTrash style={{ marginRight: 3, fontSize: '22px' }} /> Amount in Kg:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.amount}kg</span>
            </Text>
            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcFullTrash style={{ marginRight: 3, fontSize: '22px' }} /> Cost per Kg:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.costPerKg} Naira</span>
            </Text>
            <Text display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcDonate style={{ marginRight: 3, fontSize: '22px' }} /> Total Cost:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>{Wastepic.amount * Wastepic.costPerKg} Naira</span>
            </Text>

            <Box display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcExpired style={{ marginRight: 3, fontSize: '22px' }} /> Date Created:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>
                <Moment format='ddd'>{Wastepic.createdAt}</Moment> <Moment format='LT'>{Wastepic.createdAt}</Moment>,
                <Moment format='DD'>{Wastepic.createdAt}</Moment>/<Moment format='MM'>{Wastepic.createdAt}</Moment>/<Moment format='YY'>{Wastepic.createdAt}</Moment>
              </span>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='left' mt='20px' fontWeight={700} color={useColors.appGreen}>
              <FcClock style={{ marginRight: 3, fontSize: '22px' }} /> Date Accepted:
              <span style={{ color: '#000', fontWeight: 600, marginLeft: '5px' }}>
                <Moment format='ddd'>{Wastepic.updatedAt}</Moment> <Moment format='LT'>{Wastepic.updatedAt}</Moment>,
                <Moment format='DD'>{Wastepic.updatedAt}</Moment>/<Moment format='MM'>{Wastepic.updatedAt}</Moment>/<Moment format='YY'>{Wastepic.updatedAt}</Moment>
              </span>
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
