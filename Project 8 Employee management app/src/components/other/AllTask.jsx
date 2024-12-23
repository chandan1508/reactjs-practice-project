import { useContext } from "react";
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
       <h2 className="test-lg font-medium w-1/5">Employee Name</h2>
       <h2 className="test-lg font-medium w-1/5">New Task</h2>
       <h2 className="test-lg font-medium w-1/5">Active Task</h2>
       <h2 className="test-lg font-medium w-1/5">Completed</h2>
       <h2 className="test-lg font-medium w-1/5">Failed</h2>
       </div>

       <div>
       {userData.map(function(elem, idx){
        return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
          <h2 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCounts.newTask}</h2>
          <h2 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h2>
          <h2 className="text-lg font-medium w-1/5 text-white-400">{elem.taskCounts.completed}</h2>
          <h2 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h2>
        </div>
       })}
       </div>
    </div>
  );
};

export default AllTask;