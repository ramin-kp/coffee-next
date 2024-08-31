import React from "react";

function TestimonialItem({ id, username, body, profile }) {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={profile} alt="" />
        <div className="ml-3">
          <h4>{username}</h4>
          <i>Profession</i>
        </div>
      </div>
      <p className="m-0">{body}</p>
    </div>
  );
}

export default TestimonialItem;
