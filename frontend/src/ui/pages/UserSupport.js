import React from "react"
import Flex from "../components/layout/Flex"
import bg from "../assets/images/usersupport-bg.png"
import demo from "../assets/images/demo.svg"
import privacy from "../assets/images/privacy.svg"
import terms from "../assets/images/terms.svg"
import faq from "../assets/images/faq.svg"
import icon from "../assets/icons/search.svg"
import "../../styles/usersupportpage.css"
import Grid, { GridItem } from "../components/layout/Grid"

const Card = (props) => {
  return (
    <Flex
      stack
      style={{
        padding: "24px 44px",
        background: "white",
        height: "350px",
        borderRadius: "4px",
      }}
      ai="center"
      spacing={16}
    >
      <img src={props.img} alt="" />
      <p className="regular medium" style={{ textAlign: "center" }}>
        {props.title}
      </p>
      <p style={{ textAlign: "center" }} className="regular small">
        {props.description}
      </p>
    </Flex>
  )
}

const UserSupport = () => {
  return (
    <Flex stack>
      <Flex
        style={{
          height: "40vh",
          background: `linear-gradient(0deg, rgba(20, 26, 233, 0.15), rgba(20, 26, 233, 0.15)), url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        jc="center"
      >
        <Flex stack spacing={24} className="search-container" ai="center">
          <p
            style={{ fontSize: "42px", color: "white", textAlign: "center" }}
            className="semibold"
          >
            How Can We Help You?
          </p>
          <Flex style={{ background: "white", borderRadius: "7px" }}>
            <Flex>
              <Flex className="form-group has-search">
                <span className="form-control-feedback">
                  <img src={icon} alt="" />
                </span>
                <input
                  type="text"
                  className="form-control input-style"
                  placeholder="Find something here"
                />
              </Flex>
            </Flex>
            <button
              style={{
                padding: "16px 20px",
                borderRadius: "5px",
                border: "none",
                background: "#141AE9",
              }}
            >
              <p style={{ color: "white", fontSize: "18px" }}>Search</p>
            </button>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="enquiries" stack style={{ background: "#FBFBFB" }}>
        <Grid span={12}>
          <GridItem span={4} md={12}>
            <Card
              img={demo}
              title={"Demo"}
              description={
                "Watch a Tutorial video explaining how engineer 360 works"
              }
            />
          </GridItem>
          <GridItem span={4} md={12}>
            <Card
              img={privacy}
              title={"Privacy Policies"}
              description={"Privacy,Legal Information, Service agreements"}
            />
          </GridItem>
          <GridItem span={4} md={12}>
            <Card
              img={terms}
              title={"Terms of Services"}
              description={
                "Get information relating to using  Engineer 360 as a Company Administrator, User or third party"
              }
            />
          </GridItem>
          <GridItem span={2} />
          <GridItem span={4} md={12}>
            <Card
              img={faq}
              title={"FAQ’s"}
              description={
                "Subscription plans, Survey templates, Setting up my profile and much more."
              }
            />
          </GridItem>
          <GridItem span={4} md={12}>
            <Card
              img={faq}
              title={"FAQ’s"}
              description={
                "Subscription plans, Survey templates, Setting up my profile and much more."
              }
            />
          </GridItem>
          <GridItem span={2} />
        </Grid>
      </Flex>
    </Flex>
  )
}

export default UserSupport
