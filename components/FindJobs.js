import React, { useState, useEffect } from "react";
import "./styles/FindJobs.css";

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=3&num_pages=5",
          {
            headers: {
              "X-RapidAPI-Key":
                "d82262018fmsh89188c400adb3c5p10b3fbjsn9c7a6458db7c",
              "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData.data); // Update to access the 'data' array from the response
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid" id="findjobscontainer">
      <div className="row">
        <div className="col" id="searchbarcol">
          <div className="search-bar">
            <input type="text" placeholder="Search For Jobs..." id="searchMe" />
            <button type="submit" id="submit">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <h1 id="containerheading">Check The Most Recent Jobs</h1>
      </div>
      <div className="card-container mt-5">
        {data.map((element, index) => (
          <div key={index} className="sidecardheading2">
            <div
              className="card"
              style={{ width: "250px", height: "350px", borderRadius: "35px" }}
            >
              <img
                src={element.employer_logo}
                style={{
                  width: "90px",
                  justifyContent: "center",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
                className="card-img-top"
                alt="Employer Logo"
              />
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{ fontWeight: "900", fontSize: "19px" }}
                >
                  Job Title :{element.job_title}
                </h1>
                <h5
                  className="card-title"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                >
                  Company Name : {element.employer_name}
                </h5>
                <h5 className="card-title" style={{ fontWeight: "600",fontSize: "14px" }}>
                  Country : {element.job_country}
                </h5>
                <h5 className="card-title" style={{ fontWeight: "600",fontSize: "12px" }}>
                  Job Employment Type : {element.job_employment_type}
                </h5>
                <h5 className="card-title" style={{ fontWeight: "600",fontSize: "12px" }}>
                 Salary : {element.job_max_salary
}$.
                </h5>
                <a
                  href={element.job_apply_link
                  }
                  className="btn btn-dark rounded-pill"
                  style={{ fontWeight: "600" }}
                >
                  Click to apply 

                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
