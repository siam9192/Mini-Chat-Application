import { Printer } from "lucide-react";
import type { ResultResponse } from "../types/result.type";
import { useRef } from "react";

interface Props {
    resultResponse:ResultResponse|null,
    onClose?:()=>void|any
}
function ResultDialog({resultResponse:data,onClose}:Props) {
 const mainContentRef =  useRef<HTMLDivElement|null>(null)
 function closeModal ()  {
 

    (document.getElementById('my_modal_5') as any)?.close();
    setTimeout(()=>{
      if(onClose) {
  onClose()
 }
    },400)
  };

  function handlePrintMainContent() {
  if (!mainContentRef.current) return;

  const printContent = mainContentRef.current.innerHTML;
  const originalContent = document.body.innerHTML;
  // Replace body with only the print section
  document.body.innerHTML = printContent;
 
  window.print();
  // Restore original body after printing
  document.body.innerHTML = originalContent;
  window.location.reload()
}

  return (
    <div className="flex justify-center mt-10">
   

      <dialog 
        id="my_modal_5" 
        className="modal modal-middle"
      >
        <div className="modal-box w-full max-w-3xl p-8 sm:p-10 md:p-12">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-center ">
            🎉 Result Details
          </h3>
 
       
     <div ref={mainContentRef}>
       <div className=" mt-2 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {data?.instituteData?.name} ({data?.instituteData?.district})
        </h1>
        <p className="text-base-content/70 mt-1">
          Roll: {data?.roll} | Regulation: {data?.regulation} | Exam: {data?.exam}
        </p>
      </div>

   <div  className="mt-10 space-y-5">
       {data?.resultData?.map((semester) => (
        <div
          key={semester.semester}
          className={`card border-2 rounded-xl p-5 ${
            semester.passed ? "border-success" : "border-error"
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Semester {semester.semester} - {semester.passed ? "Passed ✅" : "Failed ❌"}
          </h2>
          {/* <div className="text-success text-5xl font-semibold">{semester.}</div> */}
          <p className="text-sm text-base-content/70 mb-4">Published on: {semester.publishedAt}</p>

     {
      typeof semester.result === 'string' ?
      (
             <h1 className=" mt-1 text-success text-center text-5xl font-semibold font-secondary">{semester.result}</h1>
      )
:

      (
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {semester.result.passedList?.length > 0 && (
              <div>
                <h3 className="font-semibold text-green-700 mb-1">Passed Subjects:</h3>
                <ul className="list-disc list-inside">
                  {semester.result.passedList.map((sub) => (
                    <li key={sub.subjectCode}>
                      {sub.subjectName} ({sub.subjectCode})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {semester.result.failedList?.length > 0 && (
              <div>
                <h3 className="font-semibold text-red-700 mb-1 ">Failed Subjects:</h3>
                <ul className="list-disc list-inside">
                  {semester.result.failedList.map((sub) => (
                    <li key={sub.subjectCode}>
                      {sub.subjectName} ({sub.subjectCode}) - {sub.failedType}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      )
     }
        </div>
      ))}
   </div>
 
     </div>
          
          {/* Print button */}
          <button onClick={handlePrintMainContent} className="text-info bg-base-300 p-2 rounded-lg absolute top-5 left-5 hover:cursor-pointer hidden lg:block">
            <Printer  size={30}/>
          </button>
    


          <div className="modal-action justify-center mt-6">
          
        <button
        type="button"
        onClick={closeModal}
  className="
    btn btn-secondary btn-lg
    rounded-xl
    shadow-md
    hover:shadow-lg
    transition-all
    duration-200
    transform
    hover:-translate-y-1
    focus:ring-4
    focus:ring-secondary/50
    flex
    items-center
    gap-2
  "
>
  ✖ Close
</button>
          
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ResultDialog;
