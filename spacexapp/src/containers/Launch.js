import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import spacexApi from "../api/spacexApi";
import { Form, Table, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

const Launch = (props) => {
    const [launchData, setLaunchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [queryYear, setQueryYear] = useState("");
    const [queryName, setQueryName] = useState("");
    const [querySuccess, setQuerySucces] = useState("");

    const { history } = props;


    useEffect(() => {
        const getData = async () => {
            setIsLoading(false)
            const response = await spacexApi.get("/launches");
            setLaunchData(response.data);
            setIsLoading(true);
        };
        getData();
    }, []);

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
            {isLoading ? (
                <>
                    <div className="container-fluid mt-2">
                        <Table hover responsive>
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
                                                    setQuerySucces(
                                                        e.target.value
                                                    )
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
                                            <td>
                                                {e.launch_success?.toString()}
                                            </td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    onClick={() =>
                                                        goDetail(e)
                                                    }
                                                >
                                                    See more
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <Footer />
                </>
            ) : (
                <LoadingMask loading={true} text={"loading..."}>
                    <div style={{ width: 500, height: 900 }}></div>
                </LoadingMask>
            )}
        </>
    );
};

export default withRouter(Launch);
