import React, { useState } from 'react'
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
  );
  const StarIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
  );
  const FileUpIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-up"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 12v6" /><path d="m15 15-3-3-3 3" /></svg>
  );
  const XIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  );
  
  
  const CreateAssignment = ({ isOpen, onClose }) => {
    const [assignmentTitle, setAssignmentTitle] = useState('Mid-Term Essay on Photosynthesis');
    const [description, setDescription] = useState('Write a 500-word essay detailing the process of photosynthesis.');
    const [dueDate, setDueDate] = useState('2025-09-15');
    const [fileName, setFileName] = useState('rubric.pdf');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log('Submitting Assignment:', { assignmentTitle, description, dueDate, points, fileName });
      setTimeout(() => {
        setIsSubmitting(false);
        onClose(); 
      }, 2000);
    };
  
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-2xl mx-auto max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors">
              <XIcon />
          </button>
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Create New Assignment</h1>
            <p className="text-slate-500 mt-2">Fill out the details below to create a new assignment.</p>
          </header>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Assignment Title */}
            <div>
              <label htmlFor="assignmentTitle" className="block text-sm font-medium text-slate-700 mb-1">Assignment Title</label>
              <input type="text" id="assignmentTitle" value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Due Date */}
              <div>
                <label htmlFor="dueDate" className="flex items-center text-sm font-medium text-slate-700 mb-1"><CalendarIcon /><span className="ml-2">Due Date</span></label>
                <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              
            </div>
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Attach Files (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FileUpIcon className="mx-auto h-12 w-12 text-slate-400"/>
                  <div className="flex text-sm text-slate-600"><label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"><span>Upload a file</span><input id="file-upload" name="file-upload" type="file" className="sr-only" /></label><p className="pl-1">or drag and drop</p></div>
                  {fileName && <p className="text-sm text-green-600 pt-2">File selected: {fileName}</p>}
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting} className=" flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#001F3F] hover:bg-[#006D77]">
                {isSubmitting ? 'Creating...' : 'Create Assignment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default CreateAssignment;