import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function AttendanceLogin() {
  return (
    <div>
      <h1>Attendance Page</h1>
      <Link to="/">
        <Button variant="primary">Go Home Page</Button>
      </Link>
    </div>
  );
}
