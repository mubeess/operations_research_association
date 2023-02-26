import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import query from "../helpers/query";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import Button from "../components/Button";

export default function Verify() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [callTetx, setCallText] = useState("");
  const route = useNavigate();
  const setAlert = (text: string) => {
    setCallText(text);
    setTimeout(() => {
      setCallText("");
    }, 3000);
  };
  async function verifyUser() {
    const response = await query({
      method: "POST",
      url: `/users/email-verification/${params.token}`,
      bodyData: {},
    });
    setLoading(false);
    if (response?.success) {
      setSuccess(true);
      setAlert(response.data.message);
    } else {
      setSuccess(false);
      setAlert("Something went wrong!");
    }
  }
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div className="verify">
      <Loading loading={loading} />
      <Alert text={callTetx} />

      {loading && <span>Verifying.........</span>}
      <Button
        onClick={() => {
          route("/");
        }}
        label="Back To Login"
      />
    </div>
  );
}
