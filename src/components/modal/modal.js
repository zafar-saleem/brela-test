import { useEffect, useState, memo } from 'react';
import styled from 'styled-components';

// Main div container and positioned centered.
const Container = styled.div`
	display: ${({display}) => display ? 'block' : 'none'};
	position: absolute;
	padding: 20px;
	max-width: 400px;
	max-height: 400px;
	top: 50%;
	left: 50%;
	z-index: 10;
	overflow-y: scroll;
	transform: translate(-50%, -50%);
	border: 1px solid #666;
	border-radius: 5px;
	background-color: #fff;
	@media (max-width: 450px) {
		width: 80%;
		margin: auto;
	}
`;

// close button to close the modal.
const Close = styled.span`
	display: block;
	position: absolute;
	top: 10px;
	right: 15px;
	color: #333;
	font-size: 25px;
	z-index: 11;
	cursor: pointer;
`;

// Backdrop div element to show above the rest
// of the page so that user can only interact 
// with the modal.
const Backdrop = styled.div`
	display: ${({display}) => display ? 'block' : 'none'};
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: .5;
	z-index: 5;
	background-color: #000000;
`;

// Title of the modal
const Title = styled.h2`
	text-align: center;
`;

// Grid component divides speaker's photo and
// their name and details in two columns.
const Grid = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-gap: 10px;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #cccccc;
`;

// Participants' avatar/photo.
const Photo = styled.img`
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

// Paragraph element with participants' details
const Content = styled.p`
  margin: 0;
  padding: 0;
  vertical-align: top;
`;

// span element that contains the job title
// and company name of the participants.
const SpeakerInfo = styled.span`
	display: block;
	padding: 5px 0;
	font-size: 14px;
`;

// Contains the role of the participants such
// as speaker, moderator etc.
const Role = styled.span`
	color: #666;
	font-size: 12px;
`;

// Location of the event.
const Location = styled.p`
	color: ${({color}) => color};
	text-align: center;
`;

/**
* Mdal component that renders Modal with event's details.
* 
* @returns {JSX} Component User Interface.
*/
const Modal = memo(function Modal({ details }) {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		if (details) {
			setToggle(!toggle);
			document.querySelector('body').style.overflow = 'hidden';
		} // eslint-disable-next-line
	}, [details]);

	return (
		<>
		{
			details
			?
			<>
				<Backdrop
					display={toggle ? 1 : 0}
					onClick={() => {
						document.querySelector('body').style.overflow = 'auto';
						setToggle(!toggle);
					}}
				/>
				<Container display={toggle ? 1 : 0}>
					<Close
						onClick={() => {
							document.querySelector('body').style.overflow = 'auto';
							setToggle(!toggle);
						}}>x</Close>
					<header>
						<Title>{details.title}</Title>
						{
							details?.locations?.map((location, index) => (
								<Location key={index} color={location.color}>in {location.name}</Location>
							))
						}
					</header>
					{
						details?.speaker_assignments?.map((speakers, index) => (
							<Grid key={index}>
								<Photo src={speakers.speaker['photo-url']} alt={speakers.speaker['photo-url']} />
								<Content>
									<b>
										{
											speakers.speaker.honorific
										} {
											speakers.speaker['first-name']
										} {
											speakers.speaker['last-name']
										}
									</b>
									<Role> ({speakers.role})</Role>
									<SpeakerInfo>
										{
											speakers.speaker['job-title']
										} at {
											speakers.speaker['company-name']
										}
									</SpeakerInfo>
								</Content>
							</Grid>
						))
					}
				</Container>
			</>
			:
			null
		}
		</>
	);
});

export default Modal;
