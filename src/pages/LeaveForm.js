import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLeave } from "../services/api";

function LeaveForm() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await submitLeave(form);
      navigate("/confirm", { state: res.data });
    } catch {
      alert("Error submitting leave");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-center">Leave Form</h2>

        <input placeholder="ID" className="input mb-2" onChange={(e)=>setForm({...form,id:e.target.value})}/>
        <input placeholder="Name" className="input mb-2" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Leave Type" className="input mb-2" onChange={(e)=>setForm({...form,leaveType:e.target.value})}/>
        <input type="date" className="input mb-2" onChange={(e)=>setForm({...form,startDate:e.target.value})}/>
        <input type="date" className="input mb-2" onChange={(e)=>setForm({...form,endDate:e.target.value})}/>
        <input placeholder="Reason" className="input mb-2" onChange={(e)=>setForm({...form,reason:e.target.value})}/>

        <button className="btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default LeaveForm;