import { useState, useCallback } from 'react';

/**
* useModal hook that renders modal on the page.
* 
* @returns {[object, function]}.
*/
function useModal() {
	const [eventDetails, setEventDetails] = useState();
  /**
   * sets modal's details to be shown in modal.
   * 
   * @type {function}
   */
	const setModalDetails = useCallback((e) => {
    setEventDetails({
      id: e.event.id,
      start: e.event.start,
      end: e.event.end,
      title: e.event.title,
      locations: e.event.extendedProps.locations,
      speaker_assignments: e.event.extendedProps['speaker-assignments'],
    });
  }, []);

  return [eventDetails, setModalDetails];
}

export default useModal;
