import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';

// rubric57 - The user should see a form with text input fields for name and email and a text area for a message.These fields should have placeholders to show what they represent.

function Contactus() {
  return (
    <div style={{ marginTop: '100px', marginBottom: '90px' }}>
      {' '}
      <NavBar />
      <div class="container" style={{ marginTop: '50px' }}>
        <h2 style={{ marginLeft: '10px' }}>
          Please Contact Us for any Information. Thanks!
        </h2>

   {/** ruric58 - The user should see description that shows an email and phone number for the contacting the business **/}     
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">
              Email:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">
              Phone
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="pwd"
                placeholder="Enter Phone"
                name="pwd"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <label for="exampleFormControlTextarea1">Subject</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
              />
            </div>
          </div>

{/** rubric59 - The user should see a button labeled “Send” **/}
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contactus;
