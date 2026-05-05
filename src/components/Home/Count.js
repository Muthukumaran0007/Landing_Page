import React,{useState, useEffect} from 'react'
import '../../css/Story.css';
import MovingIcon from './Moving';

function Count() {

  const [count, setCount] = useState(0); // Initialize state to 0
  const maxCount = 50; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render


  const [count1, setCount1] = useState(0); // Initialize state to 0
  const maxCount1 = 100; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount1((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount1) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [count2, setCount2] = useState(0); // Initialize state to 0
  const maxCount2 = 4; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount2((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount2) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [count3, setCount3] = useState(0); // Initialize state to 0
  const maxCount3 = 20; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount3((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount3) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render



  return (
    <section className="counter-section">
      <div className='container'>
        <div className="counter-head">
          <span className="counter-eyebrow">Product confidence</span>
          <h2>Built by a team that understands software, support, and real operations.</h2>
          <p>Our products are created for teams that need control, clarity, and less manual follow-up.</p>
        </div>
        <div className="row counter-grid">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="counter-card">
              <h3 className='count2'>{count}+</h3>
              <h4 className='count-title2'>Brands</h4>
              <p className='count-des2'>Businesses and teams have trusted RioBizSols for practical digital solutions.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="counter-card">
              <h3 className='count2'>{count1}+</h3>
              <h4 className='count-title2'>Customers</h4>
              <p className='count-des2'>Customers served across products, services, implementation, and support.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="counter-card">
              <h3 className='count2'>{count2}+</h3>
              <h4 className='count-title2'>Experience</h4>
              <p className='count-des2'>Years of hands-on work building systems for business and operational needs.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="counter-card">
              <h3 className='count2'>{count3}+</h3>
              <h4 className='count-title2'>Product Implementations</h4>
              <p className='count-des2'>Product and system rollouts supported from first setup to ongoing improvement.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="count-divider-wrap">
        <div className="count-divider-line" aria-hidden="true" />
        <MovingIcon />
      </div>
    </section>
  )
}
export default Count
