import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeaveForm() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm", { state: form });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Leave Application Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input placeholder="Employee ID" className="input" onChange={(e)=>setForm({...form,id:e.target.value})}/>
          <input placeholder="Full Name" className="input" onChange={(e)=>setForm({...form,name:e.target.value})}/>

          <select className="input" onChange={(e)=>setForm({...form,leaveType:e.target.value})}>
            <option>Select Leave Type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Paid Leave</option>
          </select>

          <input type="date" className="input" onChange={(e)=>setForm({...form,startDate:e.target.value})}/>
          <input type="date" className="input" onChange={(e)=>setForm({...form,endDate:e.target.value})}/>

          <textarea
            placeholder="Reason"
            className="input col-span-1 md:col-span-2"
            onChange={(e)=>setForm({...form,reason:e.target.value})}
          />

          <button className="btn-primary col-span-1 md:col-span-2">
            Submit Leave
          </button>

        </form>
      </div>
    </div>
  );
}

export default LeaveForm;