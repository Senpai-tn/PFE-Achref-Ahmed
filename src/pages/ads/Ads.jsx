import './ads.scss'
import React, { useEffect } from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Map from '../../Components/map/Map'
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'
import { Row, Col } from 'antd'
import Search from '../../Components/search/Search'
import { useSelector } from 'react-redux'
import { fake } from '../../Actions/Govs/govsActions'

const Ads = () => {
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {})
    $('#example')
      .DataTable()
      .page.len(parseInt(localStorage.getItem('nbRows')))
      .columns(3)
      .draw()
  }, [])

  const state = useSelector((state) => state)
  return (
    <div className="ads">
      <Sidebar />
      <div className="adsContainer">
        <div class="container">
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
              <Map />
            </Col>
          </Row>
          <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 10 }}>
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>id</th>
                  <th>status</th>
                  <th>gov</th>
                </tr>
              </thead>
              <tbody>
                {state.ads.map((ad) => {
                  return (
                    <tr>
                      <td>{ad.id}</td>
                      <td>{ad.status == 1 ? 'Active' : 'Inactive'}</td>
                      <td>
                        {fake.find((obj) => {
                          return obj.id == ad.govId
                        }) != undefined &&
                          fake.find((obj) => {
                            return obj.id == ad.govId
                          }).name}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
        </div>
      </div>
    </div>
  )
}

export default Ads
