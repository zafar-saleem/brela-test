import { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

// Main div element with fixed position right in the center of
// the screen.
const Container = styled.div`
	display: block;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 15;
	opacity: .7;
	background-color: #ffffff;
`;

// div element with width and height and after
// I am adding some blank contents after this
// div and displaying block with width, height and 
// margin. I set its border radius to make it look
// circular and with some border and its color. 
// Finally, I am adding some animation to it.
const Loader = styled.div`
	position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  &:after {
	  content: " ";
	  display: block;
	  width: 64px;
	  height: 64px;
	  margin: 8px;
	  border-radius: 50%;
	  border: 6px solid #39211e;
	  border-color: #39211e transparent #39211e transparent;
	  animation: dual-ring 1.2s linear infinite;
	}

	@keyframes dual-ring {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
`;

/**
* Spinner component that renders preloader when network request is in
* pending mode.
* 
* @returns {JSX} Component User Interface.
*/
const Spinner = memo(function Spinner({ loading, error, children }) {

	return (
		<Wrapper>
			{
				loading
				?
				<Container className='hello'>
					<Loader></Loader>
				</Container>
				:
					error
					?
					<p>{error}</p>
					:
					null
			}
			{children}
		</Wrapper>
	);
});

export default Spinner;
