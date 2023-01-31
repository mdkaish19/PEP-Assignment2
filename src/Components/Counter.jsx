import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Button, Header, Container } from "semantic-ui-react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container textAlign='center'>
        <Segment raised style={{margin: "15% 37% 5%", padding: "4% 4.1%", borderRadius: "8px" }}>
            <Grid columns={2}>
                    <Container textAlign="center">
                        <Header as='h4'>Count</Header>
                        <Header as='h1'>{count}</Header>
                    </Container>
                <Grid.Row>
                    <Button
                    positive
                    onClick={() => setCount(count + 1)}
                    content="Increment"
                    // Buttons
                    />
                    <Button
                    negative
                    disabled={count === 0}
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    content="Decrement"
                    // Buttons
                    />
                </Grid.Row>
            </Grid>
        </Segment>
        <Header as={"h5"}>Done By Md Kaish - 12020238</Header>
        {/* Maje kr */}
    </Container>
  );
}
export default Counter;
