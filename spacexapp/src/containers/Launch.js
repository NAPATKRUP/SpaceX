import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import spacexApi from "../api/spacexApi";
import { Form, Table, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";

const Launch = (props) => {
    const [launchData, setLaunchData] = useState([]);

    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(true);

    const [queryYear, setQueryYear] = useState("");
    const [queryName, setQueryName] = useState("");
    const [querySuccess, setQuerySucces] = useState("");

    const { history } = props;

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const getData = async () => {
            setLoadMore(true);
            const response = await spacexApi.get("/launches");
            setLaunchData((prev) => [...prev, ...response.data]);
            setLoadMore(false);
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
                row?.launch_success
                    ?.toString()
                    .includes(querySuccess.toLowerCase())
        );
    };

    const goDetail = (data) => {
        history.push("/launchDetail", { data: data });
    };

    return (
        <>
            <Header />
            <div
                style={{
                    display: "grid",
                    width: "80%",
                    height: 800,
                    margin: "auto",
                    overflow: "auto",
                }}
                onScroll={handleScroll}
            >
                <div className="container-fluid mt-2">
                    <Table hover responsive style={{}}>
                        <thead>
                            <th>mission name</th>
                            <th>rocket name</th>
                            <th>Launch year</th>
                            <th>Launch Success</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <Form>
                                        <Form.Control
                                            placeholder="search Rocket name"
                                            onChange={(e) =>
                                                setQueryName(e.target.value)
                                            }
                                        />
                                    </Form>
                                </td>
                                <td>
                                    <Form>
                                        <Form.Control
                                            placeholder="search year"
                                            onChange={(e) =>
                                                setQueryYear(e.target.value)
                                            }
                                        />
                                    </Form>
                                </td>
                                <td>
                                    <Form>
                                        <Form.Control
                                            placeholder="search success"
                                            onChange={(e) =>
                                                setQuerySucces(e.target.value)
                                            }
                                        />
                                    </Form>
                                </td>
                            </tr>
                            {searchData(launchData).map((e) => {
                                return (
                                    <tr>
                                        <td>{e.mission_name}</td>
                                        <td>{e.rocket.rocket_name}</td>
                                        <td>{e.launch_year}</td>
                                        <td>{e.launch_success?.toString()}</td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                onClick={() => goDetail(e)}
                                            >
                                                See more
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        {loadMore && <div >Loading ..</div>}
                    </Table>
                </div>
            </div>
            <div style={{marginTop:10}}></div>
            <Footer />
        </>
    );
};

export default withRouter(Launch);
