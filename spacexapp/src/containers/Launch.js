import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import spacexApi from "../api/spacexApi";
import { Form, Table, Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom'

const Launch = props => {

    const [launchData, setLaunchData] = useState([])

    const [queryYear, setQueryYear] = useState('')
    const [queryName, setQueryName] = useState('')
    const [querySuccess, setQuerySucces] = useState('')

    const {history} = props

    useEffect(() => {
        const getData = async () => {
            const response = await spacexApi.get("/launches");
            setLaunchData(response.data);
        };

        getData();
    }, []);

    const searchData = (rows) =>{
      return rows.filter(
        (row) => 
        row.launch_year.toLowerCase().indexOf(queryYear) > -1 &&
        row.rocket.rocket_name.toLowerCase().includes(queryName.toLowerCase()) &&
        row?.launch_success?.toString().includes(querySuccess.toLowerCase())
        )}

    const goDetail = (data) =>{
        console.log(data)
        history.push("/launchDetail", {mission_name : data})
    }

    return (
        <>
            <Header />

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
                      <td><Form><Form.Control placeholder="search Rocket name" onChange={(e) => setQueryName(e.target.value)}/></Form></td>
                      <td><Form><Form.Control placeholder="search year" onChange={(e) => setQueryYear(e.target.value)}/></Form></td>
                      <td><Form><Form.Control placeholder="search success" onChange={(e) => setQuerySucces(e.target.value)} /></Form></td>
                      </tr>
                      {
                        searchData(launchData).map((e) => {
                          let textSuccess = 'true'
                          if(!e.launch_success){
                            textSuccess="false"
                          }
                          return (
                            <tr>
                              <td>{e.mission_name}</td>
                              <td>{e.rocket.rocket_name}</td>
                              <td>{e.launch_year}</td>
                              <td>{textSuccess}</td>
                              <td><Button variant="primary" onClick={() => goDetail(e.mission_name)}>See more</Button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default withRouter(Launch);
