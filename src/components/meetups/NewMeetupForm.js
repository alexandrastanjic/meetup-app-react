import { useRef } from 'react';

import Card from "../UI/Card";
import classes from './NewMeetupForm.module.css';
import React from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Meetup Title</label>
        <input type='text' required id='title' ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='title'>Meetup Image</label>
        <input type='url' required id='imgae' ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Meetup Address</label>
        <input type='text' required id='address' ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Meetup Description</label>
        <textarea name="" id="description" required rows="5" ref={descriptionInputRef}></textarea>
      </div>
      <div className={classes.action}>
        <button>Add meetup</button>
      </div>
    </form>
  </Card>;
}

export default NewMeetupForm;