import React from "react";
import Header from "../components/Header";
import {Button} from "react-bootstrap"
import {withRouter} from 'react-router-dom'

const LaunchDetail = (props) => {

    const data = props.location.state?.data;
    const {history} = props

    const goRocket = () =>{
        history.push('/rocketDetail', {rocket_id: data.rocket.rocket_id})
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="h1 text-center m-4">
                    Mission : {data.mission_name}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <div className="card w-50">
                        <div className="card-header  text-center">
                            <p className="h5">LaunchDetail</p>
                        </div>
                        <div className="card-body">
                            <div className="col text-center m-4">
                                {data.details}
                            </div>
                            <div className="col">
                                <div className="row text-center">
                                    <div className="col-4 ">
                                        Launch Year : <b>{data.launch_year}</b>
                                    </div>
                                    <div className="col-4">
                                        Launch Success :{" "}
                                        <b>
                                            {data?.launch_success?.toString()}
                                        </b>
                                    </div>
                                    <div className="col-4">
                                        Launch Window :{" "}
                                        <b>{data.launch_window}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <div className="card w-50">
                        <div className="card-header  text-center">
                            <p className="h5">Rocket in mission</p>
                        </div>
                        <div className="card-body">
                        <div className="col">
                                <div className="row text-center">
                                    <div className="col-6 ">
                                        Rocket : <b>{data.rocket.rocket_name}</b>
                                    </div>
                                    <div className="col-6">
                                        Rocket type :{" "}
                                        <b>
                                            {data?.rocket.rocket_type}
                                        </b>
                                    </div>
                                    <Button className="mx-auto mt-4" onClick={() => goRocket()}>About Rocket</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(LaunchDetail);
