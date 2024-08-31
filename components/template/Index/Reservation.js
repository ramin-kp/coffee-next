import React, { useState } from "react";

function Reservation() {
  const [books, setBooks] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const changeHandler = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(books);
    const name = books.name;
    const email = books.email;
    const date = books.date;
    const time = books.time;
    const person = books.person;
    if (name && email && date && time && person) {
      const res = await fetch("http://localhost:4000/reserve", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(books),
      });
      if (res.status === 201) {
        alert("reservation successfully");
        setBooks({
          name: "",
          email: "",
          date: "",
          time: "",
          person: "",
        });
      }
      console.log("res", res);
    } else {
      alert("enter book fields");
    }
  };
  return (
    <div class="container-fluid my-5">
      <div class="container">
        <div class="reservation position-relative overlay-top overlay-bottom">
          <div class="row align-items-center">
            <div class="col-lg-6 my-5 my-lg-0">
              <div class="p-5">
                <div class="mb-4">
                  <h1 class="display-3 text-primary">30% OFF</h1>
                  <h1 class="text-white">For Online Reservation</h1>
                </div>
                <p class="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul class="list-inline text-white m-0">
                  <li class="py-2">
                    <i class="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li class="py-2">
                    <i class="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li class="py-2">
                    <i class="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 class="text-white mb-4 mt-5">Book Your Table</h1>
                <form class="mb-5" onSubmit={submitHandler}>
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      value={books.name}
                      class="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                      onChange={changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      value={books.email}
                      class="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                      onChange={changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <div class="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        name="date"
                        value={books.date}
                        class="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        name="time"
                        value={books.time}
                        class="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      value={books.person}
                      onChange={(e) =>
                        setBooks({ ...books, person: e.target.value })
                      }
                    >
                      <option selected="">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="3">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      class="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
