import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Table, Button } from "react-bootstrap";

const Launch = (props) => {
  const [launchData, setLaunchData] = useState([]);

  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  const [queryYear, setQueryYear] = useState("");
  const [queryName, setQueryName] = useState("");
  const [querySuccess, setQuerySucces] = useState("");

  const { history } = props;

  const handleLaunchData = useCallback(
    (value) => setLaunchData(value), []
  )

  const handlePage = useCallback(
    (value) => setPage(value), []
  )

  const handleLoadMore = useCallback(
    (value) => setLoadMore(value), []
  )

  const handleQueryYear = useCallback(
    (value) => setQueryYear(value), []
  )

  const handleQueryName = useCallback(
    (value) => setQueryName(value), []
  )

  const handleQuerySuccess = useCallback(
    (value) => setQuerySucces(value), []
  )

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      handlePage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      handleLoadMore(true);
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json()
      handleLaunchData((prev) => [...prev, ...data]);
      handleLoadMore(false);
    };
    getData();
  }, [page]);

  const searchData = (rows) => {
    return rows.filter(
      (row) =>
        row.launch_year.toLowerCase().indexOf(queryYear) > -1 &&
        row.rocket.rocket_name
          .toLowerCase()
          .includes(queryName.toLowerCase()) &&
        row?.launch_success?.toString().includes(querySuccess.toLowerCase())
    );
  };

  const goDetail = (data) => {
    history.push("/launchDetail", { data: data });
  };

  return (
    <React.Fragment>
      <Header />
      <div
        className="container-fluid bg-dark d-flex justify-content-center align-items-center py-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="border boder-white rounded p-4 w-75">
          <div
            className="bg-light d-grid w-100 m-auto overflow-auto"
            style={{
              height: "50vh",
            }}
            onScroll={handleScroll}
          >
            <div>
              <Table hover responsive>
                <thead>
                  <th>MISSION NAME</th>
                  <th>ROCKET NAME</th>
                  <th>LAUNCH YEAR</th>
                  <th>LAUNCH SUCCESS</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Control
                          placeholder="search Rocket name"
                          onChange={(e) => handleQueryName(e.target.value)}
                        />
                      </Form>
                    </td>
                    <td>
                      <Form>
                        <Form.Control
                          placeholder="search year"
                          onChange={(e) => handleQueryYear(e.target.value)}
                        />
                      </Form>
                    </td>
                    <td>
                      <Form>
                        <Form.Control
                          placeholder="search success"
                          onChange={(e) => handleQuerySuccess(e.target.value)}
                        />
                      </Form>
                    </td>
                    <td></td>
                  </tr>
                  {searchData(launchData).map((e) => {
                    return (
                      <tr key={e.flight_id}>
                        <td>{e.mission_name}</td>
                        <td>{e.rocket.rocket_name}</td>
                        <td>{e.launch_year}</td>
                        <td
                          className={
                            e.launch_success ? "text-success" : "text-danger"
                          }
                        >
                          {e.launch_success?.toString()}
                        </td>
                        <td>
                          <Button
                            className="btn btn-dark"
                            onClick={() => goDetail(e)}
                          >
                            DETAIL
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {loadMore && <div>Loading ..</div>}
              </Table>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center my-4">
            <svg
              viewBox="0 0 320.001 320.001"
              width="50px"
              height="50px"
              fill="white"
            >
              <path d="m295.84 146.049-256-144c-4.96-2.784-11.008-2.72-15.904.128-4.928 2.88-7.936 8.128-7.936 13.824v288c0 5.696 3.008 10.944 7.936 13.824 2.496 1.44 5.28 2.176 8.064 2.176 2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z" />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Launch);
