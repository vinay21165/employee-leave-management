import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg text-center">

        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Leave Submitted Successfully
        </h2>

        <div className="text-left bg-gray-100 p-4 rounded-lg text-sm">
          <p><strong>ID:</strong> {state?.id}</p>
          <p><strong>Name:</strong> {state?.name}</p>
          <p><strong>Leave Type:</strong> {state?.leaveType}</p>
          <p><strong>Start:</strong> {state?.startDate}</p>
          <p><strong>End:</strong> {state?.endDate}</p>
          <p><strong>Reason:</strong> {state?.reason}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Login
        </button>

      </div>
    </div>
  );
}

export default Confirmation;