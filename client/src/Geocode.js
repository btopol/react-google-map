import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Geocode = (props) => {
  const { data } = props;

  if (!data)
    return <div></div>;

  return (
    <Row className="geocode">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        
        <span></span>&nbsp;
         <Table>
          <tbody>
          <tr>
              <td>latitude </td>
              <td>{data.results[0].geometry.location.lat}</td>
              <td>longitude </td>
              <td>{data.results[0].geometry.location.lng}</td>
            </tr>
            <tr>
              <td>Formatted Address</td>
              <td>{data.results[0].formatted_address}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Geocode;