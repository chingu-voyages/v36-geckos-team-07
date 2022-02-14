import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import TrendingNftsCard from "../nft-card/nft-card";

// const dailyNFTsSample = require("../NFTsDaily.json");
// const weeklyNFTsSample = require("../NFTsWeekly.json");
// const monthlyNFTsSample = require("../NFTsMonthly.json");

const TrendingNftsList = ({ title }) => {
  const [NFTs, setNFTs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (title === "Daily") {
      fetch(`https://top-nft-sales.p.rapidapi.com/sales/1d`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      })
        .then((response) => {
          if (
            response.ok &&
            response.headers.get("Content-Type").includes("application/json")
          ) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(setNFTs)
        .then(() => setLoading(false))
        .catch((err) => {
          console.error(err);
        });

      //   setNFTs(dailyNFTsSample);
      setLoading(false);
    } else if (title === "Weekly") {
      let secondsLeft = 2;

      function setTime() {
        var timerInterval = setInterval(function () {
          secondsLeft--;

          if (secondsLeft === 0) {
            clearInterval(timerInterval);

            fetch("https://top-nft-sales.p.rapidapi.com/sales/7d", {
              method: "GET",
              headers: {
                "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
              },
            })
              .then((response) => {
                if (
                  response.ok &&
                  response.headers
                    .get("Content-Type")
                    .includes("application/json")
                ) {
                  return response.json();
                } else {
                  throw new Error("Something went wrong");
                }
              })
              .then(setNFTs)
              .then(() => setLoading(false))
              .catch((err) => {
                console.error(err);
              });

            // setNFTs(weeklyNFTsSample);
            setLoading(false);
          }
        }, 1000);
      }

      setTime();
    } else if (title === "Monthly") {
      let secondsLeft = 4;

      function setTime() {
        var timerInterval = setInterval(function () {
          secondsLeft--;

          if (secondsLeft === 0) {
            clearInterval(timerInterval);
            fetch("https://top-nft-sales.p.rapidapi.com/sales/30d", {
              method: "GET",
              headers: {
                "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
              },
            })
              .then((response) => {
                if (
                  response.ok &&
                  response.headers
                    .get("Content-Type")
                    .includes("application/json")
                ) {
                  return response.json();
                } else {
                  throw new Error("Something went wrong");
                }
              })
              .then(setNFTs)
              .then(() => setLoading(false))
              .catch((err) => {
                console.error(err);
              });

            // setNFTs(monthlyNFTsSample);
            setLoading(false);
          }
        }, 1000);
      }

      setTime();
    } else {
      console.log("time duration for trending NFTs invalid");
    }
  }, []);

  if (loading) {
    return (
      <div className="nft-list mb-5">
        <h3
          className="text-center d-flex align-items-center justify-content-center"
          style={{ height: "100px" }}
        >
          {title} Trending NFTs
        </h3>
        <hr
          style={{
            color: "#000000",
            height: 2,
            borderColor: "#000000",
          }}
        />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="nft-list mb-5">
      <h3
        className="text-center d-flex align-items-center justify-content-center"
        style={{ height: "100px" }}
      >
        {title} Trending NFTs
      </h3>
      <hr
        style={{
          color: "#000000",
          height: 2,
          borderColor: "#000000",
        }}
      />
      <div className="nft-card-container">
        {NFTs.map((NFT, index) => (
          <TrendingNftsCard key={index} NFT={NFT} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNftsList;
