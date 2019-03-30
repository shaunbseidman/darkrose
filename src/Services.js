import React, { Component } from "react";
import { ListGroup } from 'react-bootstrap';

 
class Services extends Component {
  render() {
    return (
      <div>
      <ListGroup>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Haircut - $40</span>
      <br />
      <span className='serviceDescription'>Long or short, clippers/scissors, neck shaved and styled</span>
      <br />
      <span className='serviceTime'>30-45min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Shave - $50</span>
      <br />
      <span className='serviceDescription'>Smooth or bearded, full service hot towel shave</span>
      <br />
      <span className='serviceTime'>45-60min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Just the Sides - $25</span>
      <br />
      <span className='serviceDescription'>Clean up the sides and let the top grow</span>
      <br />
      <span className='serviceTime'>15-30min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Buzz - $20</span>
      <br />
      <span className='serviceDescription'>One length all around, light taper</span>
      <br />
      <span className='serviceTime'>15-20min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Beard Trim - $20</span>
      <br />
      <span className='serviceDescription'>Clean and shape your beard (no straight razor)</span>
      <br />
      <span className='serviceTime'>15-20min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Skin Detox Treatment - $25</span>
      <br />
      <span className='serviceDescription'>Detoxing hot towel facial treatment</span>
      <br />
      <span className='serviceTime'>15-20min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Hangover Treatment - $25</span>
      <br />
      <span className='serviceDescription'>One too many? Hot towel facial designed to help get out of that funk</span>
      <br />
      <span className='serviceTime'>15-20min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Women's Haircut - $60</span>
      <br />
      <span className='serviceDescription'>Women’s cut, shampoo’d and styled</span>
      <br />
      <span className='serviceTime'>60min</span>
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Shampoo & Rinse-complimentary with haircut</span>
      <br />
      <span className='serviceDescription'>Shampoo and rinse out loose hair before styling</span>
      <br />
      <span className='serviceTime'>10min</span>
      </ListGroup.Item>
       <ListGroup.Item variant="dark" className='serviceList'>
      <span className='serviceName'>Color Service-ask for pricing</span>
      <br />
      <span className='serviceDescription'>By appointment only, prices given at consultation</span>
      <br />
      <span className='serviceTime'>90 min +</span>
      </ListGroup.Item>
    </ListGroup>;
      </div>
    );
  }
}

export default Services;