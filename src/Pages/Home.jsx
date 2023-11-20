import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/AttendanceLogin">
        <Button variant="primary">Go to Attendance Page</Button>
      </Link>
    </div>
  );
}
