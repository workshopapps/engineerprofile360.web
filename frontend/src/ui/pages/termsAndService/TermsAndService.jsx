import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import sms from "../../../assets/icons/sms.svg";
import Flex from "../../components/layout/Flex";
import Grid, { GridItem } from "../../components/layout/Grid";

const Page = styled.div`
  padding: 70px 48px;
  background: #fff;

  @media screen and (max-width: 1023px) {
    padding: 16px;
  }
`;

const Heading = styled.p`
  font-weight: 600;
  font-size: 42px;
  line-height: 52px;
  color: #2e2e2e;
`;

const Date = styled.p`
  font-weight: 100;
  font-size: 16px;
  line-height: 22px;
  color: #605e5c;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #323130;

  @media screen and (max-width: 1023px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;

const TableText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2e2e2e;
`;

const SubHead = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #323130;
`;

const Table = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 370px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #faf9f8;
  }
  ::-webkit-scrollbar-thumb {
    background: #edebe9;
    border-radius: 5px;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    height: 370px;
    overflow-y: scroll;
  }
`;

const List = styled.div`
  padding: 10px 19px;
  background: #eff6fc;

  :hover {
    background: #faf9f8;
  }
`;

const Overview = () => {
  return (
    <div>
      <Grid span={12}>
        <GridItem span={9} md={12} sm={12} style={{ paddingTop: "30px" }}>
          <Desc>
            Skript is a tool that provides a subscription service for companies
            that want to know how good <br />
            their engineers are. It is a software where engineers register and
            get various multi-choice <br />
            questions on different topics. The tool builds a profile of each
            engineer in the form of a spider- <br />
            web chart so the company knows where its engineers need to improve.
            <br />
            To provide our Services (as defined below) through our software, or
            website, we need to obtain <br />
            your agreement to our Terms of Service.
            <br /> These Terms of Service govern your use of our software.
            <br /> As used in these Terms of Service; <br />
            "Skript service",
            <br /> "our service"
            <br /> "the service", means the personalized service provided by
            Skript for discovering and assessing
            <br /> Skript content, including all features and functionalities,
            recommendations and reviews, our
            <br /> websites, and user interfaces, as well as all content and
            software associated with our service. <br />
            Skript Evaluator (Skript, ``our``, ``we,`` or ``us ``) provides the
            services described below to <br /> you ("Services") unless you live
            in a country or territory where it is not eligible. <br />
            1. Registration and Account. Your Company/team must create a
            Business account by providing accurate, current, and complete infor
          </Desc>
        </GridItem>
        <GridItem span={3} md={12} sm={9}>
          <Flex style={{ position: "relative", paddingTop: "30px" }}>
            <Flex
              jc="center"
              style={{ position: "absolute", top: "0", left: "70px" }}
            >
              <p
                style={{
                  fontWeight: "0",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#323130",
                  whiteSpace: "nowrap",
                }}
              >
                TABLE OF CONTENT
              </p>
            </Flex>
            <Flex stack spacing={40}>
              <Table>
                <Flex stack style={{ background: "#EFF6FC" }}>
                  <Link to="register" smooth={true}>
                    <List>
                      <TableText>Registration and Account</TableText>
                    </List>
                  </Link>
                  <Link to="subscription" smooth={true}>
                    <List>
                      <TableText>Subscription</TableText>
                    </List>
                  </Link>
                  <Link to="billing" smooth={true}>
                    <List>
                      <TableText>Billing and Cancellation</TableText>
                    </List>
                  </Link>

                  <Link to="password" smooth={true}>
                    <List>
                      <TableText>Passwords and Account Access</TableText>
                    </List>
                  </Link>
                  <Link to="warranty" smooth={true}>
                    <List>
                      <TableText>Warranties and limitations</TableText>
                    </List>
                  </Link>
                  <Link to="safety" smooth={true}>
                    <List>
                      <TableText>Safety and Regulations</TableText>
                    </List>
                  </Link>
                  <Link to="personal" smooth={true}>
                    <List>
                      <TableText>Use of Personal/Company Info</TableText>
                    </List>
                  </Link>
                  <Link to="virus" smooth={true}>
                    <List>
                      <TableText>Viruses/Bugs</TableText>
                    </List>
                  </Link>
                  <Link to="license" smooth={true}>
                    <List>
                      <TableText>License</TableText>
                    </List>
                  </Link>
                  <Link to="trade" smooth={true}>
                    <List>
                      <TableText>Use of Our Trademark</TableText>
                    </List>
                  </Link>
                  <Link to="misc" smooth={true}>
                    <List>
                      <TableText>Misccellaneous</TableText>
                    </List>
                  </Link>
                </Flex>
              </Table>
              <Flex jc="center">
                <a href="/contact">
                  <div
                    style={{
                      border: "2px solid #106EBE",
                      borderRadius: "4px",
                      padding: "10px 20px",
                    }}
                  >
                    <Flex spacing={10}>
                      <img src={sms} alt="" />
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "20px",
                          whiteSpace: "nowrap",
                          color: "#2E2E2E",
                        }}
                      >
                        Questions? Leave a message
                      </p>
                    </Flex>
                  </div>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

const SubTopics = () => {
  return (
    <Flex stack spacing={8}>
      <Grid span={12}>
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="register">Registration and Account</SubHead>
            <Desc>
              Your Company/team must create a Business account by providing
              accurate, current, and complete information, including its valid
              legal business phone number, Company name, and other information
              we require. The company will keep its business account information
              updated. Company’s name must not: (a) be false, misleading,
              deceptive, or defamatory; (b) parody a third party or include
              character symbols, excessive punctuation, or trademark
              designations; or (c) infringe any trademark, violate any right of
              publicity, or otherwise violate anyone’s rights. We reserve the
              right to reclaim account names on behalf of any business or
              individual that holds a legal claim in those name.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="subscription">Subscription</SubHead>
            <Desc>
              1. Your Skript software subscription will continue until
              terminated. To use the Skript service you/your company must have
              Internet access and a ready device, and provide us with one or
              more Payment Methods. “Payment Method” means a current, valid,
              accepted method of payment, as may be updated from time to time,
              and which may include payment through your account with a third
              party. Unless you cancel your membership before your billing date,
              you authorize us to charge the membership fee for the next billing
              cycle to your Payment Method (see "Cancellation" below).
              <br /> 2. We may offer several subscription plans, including
              subscriptions offered by third parties in conjunction with the
              provision of their products and services. We are not responsible
              for the products and services provided by such third parties. Some
              subscription plans may have differing conditions and limitations,
              which will be disclosed at your sign-up or in other communications
              made available to you. You can find specific details regarding
              your Skript subscription by visiting the Skript.com website and
              clicking on the "Account" link available at the top of the pages
              under your profile name.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="billing">Billing and Cancellation</SubHead>
            <Desc>
              1. Billing Cycle. <br />
              The Subscription fee for the Skript service and any other charges
              you may incur in connection with your use of the service, such as
              taxes and possible transaction fees, will be charged to your
              Payment Method on the specific payment date indicated on the
              "Account" page. The length of your billing cycle will depend on
              the type of subscription that you choose when you signed up for
              the service. In some cases, your payment date may change, for
              example, if your Payment Method has not successfully settled, when
              you change your subscription plan or if your paid membership began
              on a day not contained in a given month. Visit the Skript.com
              website and click on the "Billing details" link on the "Account"
              page to see your next payment date. We may authorize your Payment
              Method in anticipation of membership or service-related charges
              through various methods, including authorizing it for up to
              approximately one month of service as soon as you register. If you
              signed up for Enineering360 using your account with a third party
              as a Payment Method, you can find the billing information about
              your Skript subscription by visiting your account with the
              applicable third party. <br />
              2. Payment Methods. <br />
              To use the Skript service you must provide one or more Payment
              Methods. You authorize us to charge any Payment Method associated
              with your account in case your primary Payment Method is declined
              or no longer available to us for payment of your subscription fee.
              You remain responsible for any uncollected amounts. If payment is
              not successfully settled, due to expiration, insufficient funds,
              or otherwise, and you do not cancel your account, we may suspend
              your access to the service until we have successfully charged a
              valid Payment Method. For some Payment Methods, the issuer may
              charge you certain fees, such as foreign transaction fees or other
              fees relating to the processing of your Payment Method. Local tax
              charges may vary depending on the Payment Method used. Check with
              your Payment Method service provider for details. <br />
              3. Updating your Payment Methods. <br />
              You can update your Payment Methods by going to the "Account"
              page. We may also update your Payment Methods using the
              information provided by the payment service providers. Following
              any update, you authorize us to continue to charge the applicable
              Payment Method(s).
              <br /> 4. Cancellation. <br />
              You can cancel your Skript subscription at any time, and you will
              continue to have access to the Skript service through the end of
              your billing period. To the extent permitted by the applicable
              law, payments are non-refundable and we do not provide refunds or
              credits for any partial membership periods or unused Skript
              content. To cancel, go to the "Account" page and follow the
              instructions for cancellation. If you cancel your membership, your
              account will automatically close at the end of your current
              billing period. To see when your account will close, click
              "Billing details" on the "Account" page. If you signed up for
              Skript using your account with a third party as a Payment Method
              and wish to cancel your Skript subscription, you may need to do so
              through such a third party, for example by visiting your account
              with the applicable third party and turning off auto-renew, or
              unsubscribing from the Skript service through that third party.
              <br />
              4.5. Changes to the Price and Subscription Plans. <br />
              We may change our subscription plans and the price of our service
              from time to time; however, any price changes or changes to your
              subscription plans will apply no earlier than 30 days following
              notice to you.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="password">Passwords and Account Access</SubHead>
            <Desc>
              The member who created the Skript account and whose Payment Method
              is charged (the "Account Owner") is responsible for any activity
              that occurs through the Skript account. To maintain control over
              the account and to prevent anyone from accessing the account
              (which would include information on the viewing history for the
              account), the Account Owner should maintain control over the
              Skript-ready devices that are used to access the service and not
              reveal the password or details of the Payment Method associated
              with the account to anyone. You are responsible for updating and
              maintaining the accuracy of the information you provide to us
              relating to your account. We can terminate your account or place
              your account on hold to protect you, Skript or our partners from
              identity theft or other fraudulent activity.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="warranty">
              Warranties and Limitations on Liability
            </SubHead>
            <Desc>
              TThe Skript service is provided "as is" and without warranty or
              condition. In particular, our service may not be uninterrupted or
              error-free. You waive all special, indirect and consequential
              damages against us. These terms will not limit any non-waivable
              warranties or consumer protection rights that you may be entitled
              to under the mandatory laws of your country of residence.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="safety">Safety and Regulations</SubHead>
            <Desc>
              As part of security procedures, some piece of information and
              password would be provided which must be treated as confidential
              and not disclosed to a third party. Failure to comply with any of
              the provisions of the terms of use would result in the user
              identification code or passwording being disabled.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="personal">
              Use of Your personal/Company Information
            </SubHead>
            <Desc>
              We will only use your personal information as set out in our
              Privacy Policy.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="virus">Viruses/Bug</SubHead>
            <Desc>
              We do not guarantee that our site will be secure or free from bugs
              or viruses. You are responsible for configuring your information
              technology, computer programmes and platform to access our site.
              You should use your virus protection software. You must not misuse
              our software by knowingly introducing viruses, trojans, worms,
              logic bombs or other material that is malicious or technologically
              harmful. You must not attempt to gain unauthorized access to our
              software, the server on which our software is stored or any
              server, computer or database connected to our site. You must not
              attack our site via a denial-of-service attack or a distributed
              denial-of-service attack. By breaching this provision, you would
              commit a criminal offence under the Computer Misuse Act 1990. We
              will report any such breach to the relevant law enforcement
              authorities, and we will cooperate with those authorities by
              disclosing your identity to them. In the event of such a breach,
              your right to use our site will cease immediately
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="license">License</SubHead>
            <Desc>
              s the licensed owner of the intellectual property rights on our
              site and the published material. The works are protected by
              copyright laws and treaties around the world. All rights are
              reserved. A copy or page can be downloaded from the site for
              personal use. No modification of the paper and digital copies
              downloaded in any way. No illustrations, photographs, video or any
              audio sequence or graphics. Our status and that of any other
              contributor as the legitimate authors of content must be
              acknowledged; except for where the content is user-generated. No
              part of the content on our software must be used for commercial
              purposes without obtaining a license from the owners. If any
              content is printed, copied, downloaded, shared or reposted in
              breach of the terms of use, a user's right to access the site will
              be ceased immediately and at our option return or destroy copies
              of the materials.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="trade">Use of Our Trademarks</SubHead>
            <Desc>
              Our trademarks are registered, and you are not permitted to use
              them without our approval.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
        <GridItem span={9} md={12} sm={12}>
          <Flex stack spacing={8}>
            <SubHead id="misc">Miscelleneous</SubHead>
            <Desc>
              12.1. Governing Law.
              <br /> These Terms of Service shall be governed by and construed
              by the laws of Nigeria. <br />
              12.2. Unsolicited Materials.
              <br /> Skript does not accept unsolicited materials or ideas for
              Skript content, and it is not responsible for the similarity of
              any of its content or programming in any media to materials or
              ideas transmitted to Skript.
              <br /> 12.3. Customer Support. <br />
              To find more information about our service and its features or if
              you need assistance with your account, please visit the Skript
              Help Center, which is accessible through the Skript.com website.
              In certain instances, Customer Service may best be able to assist
              you by using a remote access support tool through which we have
              full access to your computer. If you do not want us to have this
              access, you should not consent to support through the remote
              access tool, and we will assist you through other means. In the
              event of any conflict between these Terms of Use and information
              provided by Customer Support or other portions of our websites,
              these Terms of Use will be controlled.
              <br /> 12.4. Changes to Terms of Use and Assignment. <br />
              Skript may, from time to time, change these Terms of Use. We will
              notify you at least 30 days before such changes apply to you. We
              may assign or transfer our agreement with you including our
              associated rights and obligations at any time and you agree to
              cooperate with us in connection with such an assignment or
              transfer. <br />
              12.5. Electronic Communications.
              <br /> We will send you information relating to your account (e.g.
              payment authorizations, invoices, changes in password or Payment
              Method, confirmation messages, notices) in electronic form only,
              for example via emails to your email address provided during
              registration.
            </Desc>
          </Flex>
        </GridItem>
        <GridItem span={3} md={0} sm={0} />
      </Grid>
    </Flex>
  );
};

export const TermsAndService = () => {
  return (
    <div>
      <Page>
        <Flex stack spacing={132}>
          <Flex stack spacing={8}>
            <Heading>
              Skript{" "}
              <span
                style={{
                  color: "#004578",
                  fontWeight: "600",
                  fontSize: "42px",
                  lineHeight: "52px",
                }}
              >
                Terms of Service
              </span>
            </Heading>
            <Date>Last updated on November 20, 2022</Date>
          </Flex>
          <Flex stack spacing={24}>
            <Overview />
            <SubTopics />
          </Flex>
        </Flex>
      </Page>
    </div>
  );
};

export default TermsAndService;
