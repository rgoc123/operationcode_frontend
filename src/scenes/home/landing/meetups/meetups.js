import React from 'react';
import Section from 'shared/components/section/section';
import MeetupLabel from './meetupLabel';
// import PropTypes from 'prop-types';
// import styles from './meetups.css';
import { getMeetupInfo } from '../../../../shared/utils/apiHelper';

class Meetups extends React.Component {
  componentDidMount() {
    getMeetupInfo();
  }

  render() {
    return (
      <Section title="Meetups" theme="white">
        <h1>This is where my section will be</h1>
        <MeetupLabel />
      </Section>
    );
  }
}

export default Meetups;
