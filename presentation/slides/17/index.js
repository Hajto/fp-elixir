import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps textColor="tertiary">
      Czym jest Elixir?
    </Heading>
    <List>
      {[
        'Działa na Erlang VM',
        'Dynamiczny funkcyjny język',
        'Skalowalny',
        'Fault-tolerant'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
