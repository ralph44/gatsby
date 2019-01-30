import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const lel = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">Hallo und herzlich willkommen auf meiner Webseite.</p>
        <hr className="my-2" />
        <p>Diese Seite befindet sich noch im Aufbau</p>
        <p className="lead">
          <Button color="primary" href="https://github.com/ralph44" >Mein Github</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default lel;
