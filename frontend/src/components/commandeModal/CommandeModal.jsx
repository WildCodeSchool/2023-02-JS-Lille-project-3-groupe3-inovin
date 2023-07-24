import React, { useState, useEffect } from "react";
import "./CommandeModal.scss";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import axios from "axios";
import logo from "../../assets/images/logo_inovin.png";

function CommandeModal({ setOpenModal, fullName, user }) {
  const [confirmed, setConfirmed] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    town: "",
    postalcode: "",
  });
  const [ordering, setOrdering] = useState(0);
  const [userId, setUserId] = useState();
  const [buttonClicks, setbuttonClicks] = useState(0);
  const [feedbackComment, setfeedbackComment] = useState("");
  const [rating, setRating] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: user },
      })
      .then((response) => {
        const resultUserId = response.data[0]?.id;
        setUserId(resultUserId);
        setfeedbackComment(response.data[0].feedbackComment);
        setRating(response.data[0].feedbackRating);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const postAddress = () => {
    if (address.street && address.town && address.postalcode) {
      const userData = {
        address: `${address.street} ${address.town} ${address.postalcode}`,
        ordering,
        feedbackRating: rating,
        feedbackComment,
      };

      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/user/${userId}`, userData)
        .then(() => {
          setOrdering(1);
        })
        .catch((error) => {
          console.error("Error posting address:", error);
        });
    }
  };
  const handleClick = () => {
    setbuttonClicks(buttonClicks + 1);
    document.querySelectorAll(".truck-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        const box = button.querySelector(".box");
        const truck = button.querySelector(".truck");

        if (!button.classList.contains("done")) {
          if (!button.classList.contains("animation")) {
            button.classList.add("animation");

            gsap.to(button, {
              "--box-s": 1,
              "--box-o": 1,
              duration: 0.3,
              delay: 0.5,
            });

            gsap.to(box, {
              x: 0,
              duration: 0.4,
              delay: 0.7,
            });

            gsap.to(button, {
              "--hx": -5,
              "--bx": 50,
              duration: 0.18,
              delay: 0.92,
            });

            gsap.to(box, {
              y: 0,
              duration: 0.1,
              delay: 1.15,
            });

            gsap.set(button, {
              "--truck-y": 0,
              "--truck-y-n": -26,
            });

            gsap.to(button, {
              "--truck-y": 1,
              "--truck-y-n": -25,
              duration: 0.2,
              delay: 1.25,
              onComplete() {
                gsap
                  .timeline({
                    onComplete() {
                      button.classList.add("done");
                    },
                  })
                  .to(truck, {
                    x: 0,
                    duration: 0.4,
                  })
                  .to(truck, {
                    x: 40,
                    duration: 1,
                  })
                  .to(truck, {
                    x: 20,
                    duration: 0.6,
                  })
                  .to(truck, {
                    x: 96,
                    duration: 0.4,
                  });
                gsap.to(button, {
                  "--progress": 1,
                  duration: 2.4,
                  ease: "power2.in",
                });
              },
            });
          }
        } else {
          button.classList.remove("animation", "done");
          gsap.set(truck, {
            x: 4,
          });
          gsap.set(button, {
            "--progress": 0,
            "--hx": 0,
            "--bx": 0,
            "--box-s": 0.5,
            "--box-o": 0,
            "--truck-y": 0,
            "--truck-y-n": -26,
          });
          gsap.set(box, {
            x: -24,
            y: -6,
          });
        }
      });
    });
    setConfirmed(true);
    postAddress();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          {!confirmed ? (
            <div>
              <div className="title">
                <h1>
                  Nous avons besoin de votre adresse de livraison, {fullName}!
                </h1>
              </div>

              <form className="formCommande">
                <div className="street">
                  <label className="commandeLabel" htmlFor="street-address">
                    Rue
                  </label>
                  <input
                    className="commandeInput"
                    type="text"
                    id="street-address"
                    name="street"
                    autoComplete="street-address"
                    required
                    enterKeyHint="next"
                    value={address.street}
                    onChange={(e) =>
                      setAddress((prevAddress) => ({
                        ...prevAddress,
                        street: e.target.value,
                      }))
                    }
                  />{" "}
                </div>{" "}
                <div className="city">
                  {" "}
                  <label className="commandeLabel" htmlFor="city">
                    Ville
                  </label>{" "}
                  <input
                    className="commandeInput"
                    required
                    type="text"
                    id="city"
                    name="town"
                    autoComplete="address-level2"
                    enterKeyHint="next"
                    value={address.town}
                    onChange={(e) =>
                      setAddress((prevAddress) => ({
                        ...prevAddress,
                        town: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="codePostale">
                  <label className="commandeLabel" htmlFor="postal-code">
                    Code postale
                  </label>
                  <input
                    required
                    className="postal-code commandeInput"
                    id="postal-code"
                    name="postalcode"
                    autoComplete="postal-code"
                    enterKeyHint="next"
                    value={address.postalcode}
                    onChange={(e) =>
                      setAddress((prevAddress) => ({
                        ...prevAddress,
                        postalcode: e.target.value,
                      }))
                    }
                  />
                </div>
                <div />
              </form>
            </div>
          ) : (
            <div className="confirmationMessage">
              <img id="commandeLogo" src={logo} alt="" />

              {buttonClicks === 1 ? (
                <h2 className="confirmation">
                  Merci. Votre addresse a été bien enregistrée
                </h2>
              ) : (
                <h2 className="confirmation">
                  Merci pour votre commande, {fullName}. Nous vous avons envoyé
                  un mail de confirmation.
                </h2>
              )}
            </div>
          )}
        </div>
        <button type="button" className="truck-button" onClick={handleClick}>
          {buttonClicks === 1 ? (
            <span className="default">Commander</span>
          ) : (
            <span className="default">Enregistrer</span>
          )}
          <span className="success">
            Commande confirmée
            <svg viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1" />
            </svg>
          </span>
          <div className="truck">
            <div className="wheel" />
            <div className="back" />
            <div className="front" />
            <div className="box" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CommandeModal;
CommandeModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
