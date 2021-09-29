import { useEffect, useState } from 'react';
import { map } from 'ramda';
const normalize = require('json-api-normalize');

/**
* useAgenda hook that fetches time slots from API call
* and retrieves necessary properties from the response
* using 'normalizer' and then the titles are resetted
* and renamed certain properties finally set it to event
* state which is returned in the array to be used in target
* component.
* 
* @returns {[boolean, boolean, object]}.
*/
function useAgenda() {
	const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  /**
   * hook that calls for API end point while setting certain
   * state variables.
   * 
   * @type {function}
   */
  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const response = await fetch('https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots');
        const data = await response.json();
        getAndManipulateProps(data);
      } catch(error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    fetchEvents(); // eslint-disable-next-line
  }, []);

  /**
   * function that gets required properties from response
   * and sets those events' titles and certain properties
   * and set it to events state variable.
   * 
   * @type {function}
   */
  const getAndManipulateProps = async (data) => {
    /**
     * Gets certains properties from JSON API using
     * normalizer package.
     */
    const normalizedEvents = normalize(data).get([
      'id',
      'title',
      'start-time',
      'end-time',
      'locations.name',
      'locations.color',
      'speaker-assignments.role',
      'speaker-assignments.position',
      'speaker-assignments.speaker.first-name',
      'speaker-assignments.speaker.last-name',
      'speaker-assignments.speaker.job-title',
      'speaker-assignments.speaker.company-name',
      'speaker-assignments.speaker.honorific',
      'speaker-assignments.speaker.photo-url',
    ]);
    /**
     * Certain events do not have titles or null titles
     * for such events reset those titles.
     */
    const resetTitlesEvents = await resetTitles(normalizedEvents);
    /**
     * Fullcalendar package uses start and end properties for 
     * events to be displayed on calendar, for that reason
     * I am resetting those properties to be used on fullcalendar.
     */
    const renamedTimeProps = map(renameTimeProps, resetTitlesEvents);
    /**
     * set events state variable
     */
    setEvents(renamedTimeProps);
    /**
     * set loading to true to hide spinner.
     */
    setLoading(false);
  };

  /**
   * function to reset null or empty titles
   * 
   * @type {function}
   */
  const resetTitles = async (data) => {
    return data.map(event => {
      if (event.title === null || event.title ==='') {
        event.title = 'Title is not given';
      }
      return event;
    });
  };

  /**
   * function to reset start and end time properties
   * 
   * @type {function}
   */
  const renameTimeProps = (event) => {
    const { 'start-time': start, 'end-time': end, ...rest } = event;
    const newEvent = { start, end, ...rest };
    return newEvent;
  };

  /**
   * returns loading, error and events in array.
   */
	return [loading, error, events];
}

export default useAgenda;
