import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Modal from '../../components/modal';
import Spinner from '../../components/spinner';
import useAgenda from './hooks/useAgenda';
import useModal from './hooks/useModal';
import styled from 'styled-components';
// Main container div with 1376 max width and centered
// with cursor as a pointer on a child element.
const Container = styled.div`
  max-width: 1376px;
  margin: auto;
  .fc-daygrid-event-harness {
    cursor: pointer;
  }
`;

/**
* Agenda component that renders Fullcalendar and a Modal.
* 
* @returns {JSX} Component User Interface.
*/
function Agenda() {
  const [loading, error, events] = useAgenda();
  const [eventDetails, setModalDetails] = useModal();

  return (
    <Container>
      <h1>Agenda</h1>
      <Spinner
        loading={loading}
        error={error}
      >
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
          initialView={
            window.innerWidth <= 650
            ? 'timeGridDay'
            : window.innerWidth <= 950
              ? 'timeGridWeek'
              : 'dayGridMonth'
          }
          customButtons={{
            new: {
              text: 'new',
              click: () => console.log('new event'),
            },
          }}
          events={events}
          eventClick={setModalDetails}
          nowIndicator={true}
          height={`${window.innerHeight}px`}
          initialDate='2025-04-15'
        />
        <Modal details={eventDetails} />
      </Spinner>
    </Container>
  );
}

export default Agenda;
