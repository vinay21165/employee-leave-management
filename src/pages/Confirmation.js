import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <h2 className="text-xl text-green-600 mb-4">
          Leave Submitted Successfully
        </h2>

        <p><b>ID:</b> {state?.id}</p>
        <p><b>Name:</b> {state?.name}</p>
        <p><b>Type:</b> {state?.leaveType}</p>
        <p><b>Start:</b> {state?.startDate}</p>
        <p><b>End:</b> {state?.endDate}</p>
        <p><b>Reason:</b> {state?.reason}</p>
      </div>
    </div>
  );
}

export default Confirmation;