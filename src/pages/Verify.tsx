import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import query from "../helpers/query";

export default function Verify() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  async function verifyUser() {
    const response = await query({
      method: "POST",
      url: `/users/email-verification/${params.token}`,
      bodyData: {},
    });
    setLoading(false);
    if (response?.success) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    console.log(response);
  }
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div className="verify">
      {loading && <h1>loadinggg</h1>}
      {success != null && success && <h4>success</h4>}
      {success != null && !success && <h4>error</h4>}
      {loading&&<span>Verifying.........</span>}
    </div>
  );
}
