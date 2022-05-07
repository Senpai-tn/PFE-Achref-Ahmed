import './new.scss'
import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Search from '../../Components/search/Search'
import Chart from '../../Components/Searcher/Chart'
import { useSelector } from 'react-redux'

const New = () => {
  const state = useSelector((state) => state)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        {/* <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
        </Row> */}
        <Chart />
        <Search rows={state.chercheurs} />
      </div>
    </div>
  )
}

export default New
