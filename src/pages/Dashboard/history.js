import { Avatar } from "@chakra-ui/react";
import Buttons from "../../Components/Buttons/AcceptButton";
export default function History({ items }) {
  let buttonClass = {
    pending: "#fc270bbd",
    accepted: "#ffc400",
    collected: "#79d861",
  };
  return (
    <>
      {" "}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Alert Created By</th>
            <th>Alert Status</th>
            <th>Quantity in Kg</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td className="text-bold">
                  <div className="flex">
                    <Avatar src={item.image} mr="5px" size="sm" />
                    Alex Chima
                  </div>
                </td>
                <td className="center">
                  <Buttons
                    color={buttonClass[item.status]}
                    id={item._id}
                    name={item.status}
                  />
                </td>
                <td className="text-bold text-center">{item.quantity}kg</td>
                {/* <td className="center">{item.location}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
