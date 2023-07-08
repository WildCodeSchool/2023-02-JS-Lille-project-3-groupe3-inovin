import React, { useState } from "react";
import "./CommandeModal.scss";
import PropTypes from "prop-types";
import { gsap } from "gsap";

function CommandeModal({ setOpenModal }) {
  const [confirmed, setConfirmed] = useState(false);
  const handleClick = () => {
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
                <h1>Nous avons besoin de votre adresse de livraison, Alex!</h1>
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
                    name="street-address"
                    autoComplete="street-address"
                    required
                    enterKeyHint="next"
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
                    name="city"
                    autoComplete="address-level2"
                    enterKeyHint="next"
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
                    name="postal-code"
                    autoComplete="postal-code"
                    enterKeyHint="next"
                  />
                </div>
                <div />
              </form>
            </div>
          ) : (
            <div className="confirmationMessage">
              Merci pour votre commande. Nous vous avons envoyé un mail de
              confirmation.
            </div>
          )}
        </div>
        <button type="button" className="truck-button" onClick={handleClick}>
          <span className="default">Commander</span>
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
};
