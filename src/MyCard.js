import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Button, ButtonGroup } from "reactstrap";
import { IconContext } from "react-icons";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { MdPlace, MdDateRange } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const MyCard = ({ details, refresh }) => {
  //useing state to store tab data
  const [tabInfo, setTabInfo] = useState();

  //full name tab
  const fullName = () => {
    const title = details.name?.title;
    const first = details.name?.first;
    const last = details.name?.last;
    const nameTag = (
      <CardTitle>
        <h5>My Name is</h5>
        <h2> {title + " " + first + " " + last} </h2>
      </CardTitle>
    );
    setTabInfo(nameTag);
  };

  //using effect to refresh tab data with refresh user
  const check = details.name?.first;
  useEffect(() => {
    setTabInfo(fullName);
  }, [check]);

  //phone tab
  const phone = () => {
    const phone = (
      <CardTitle>
        <h5>Call Me At</h5>
        <h2> {details.phone} </h2>
      </CardTitle>
    );
    setTabInfo(phone);
  };

  //email tab
  const email = () => {
    const email = (
      <CardTitle>
        <h5>My Email is</h5>
        <h4> {details.email} </h4>
      </CardTitle>
    );
    setTabInfo(email);
  };

  //age tab
  const age = () => {
    const age = (
      <CardTitle>
        <h5>My Age is</h5>
        <h2> {details.dob?.age} </h2>
      </CardTitle>
    );
    setTabInfo(age);
  };

  //country tab
  const country = () => {
    const country = (
      <CardTitle>
        <h5>I live in</h5>
        <h2> {details.location?.country} </h2>
      </CardTitle>
    );
    setTabInfo(country);
  };

  //returning card
  return (
    <Card className="cardShade" style={{}}>
      <CardBody>
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-dark"
          src={details.picture?.large}
          alt={details.name?.first}
        />
        <div className="Cheader">{tabInfo}</div>
        <IconContext.Provider value={{ size: "25px" }}>
          <ButtonGroup>
            <Button outline color="dark" onMouseOver={fullName}>
              <RiAccountCircleLine />
            </Button>
            <Button outline color="dark" onMouseOver={phone}>
              <FiPhone />
            </Button>
            <Button outline color="dark" onMouseOver={email}>
              <AiOutlineMail />
            </Button>
            <Button outline color="dark" onMouseOver={age}>
              <MdDateRange />
            </Button>
            <Button outline color="dark" onMouseOver={country}>
              <MdPlace />
            </Button>
          </ButtonGroup>
          <Button color="dark" className="block" onClick={refresh}>
            Refresh
          </Button>
        </IconContext.Provider>
      </CardBody>
    </Card>
  );
};

export default MyCard;
