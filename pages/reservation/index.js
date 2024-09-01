import React from "react";

//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import ReservationDetails from "@/components/template/Reservation/ReservationDetails";

function Reservation() {
  return (
    <>
      <PageHeader title={"Reservation"} href={"reservation"} />
      <ReservationDetails />
    </>
  );
}
export default Reservation;
