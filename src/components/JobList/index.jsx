import parse from 'html-react-parser';

export default function JobList({data}) {
  
  const jobs = data;
    
  return (
    <>
    
      <div key={jobs.id} className="flex flex-col w-full mb-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-3">
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{parse(jobs.title)}</h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><i className="fa-regular fa-building text-indigo-500"></i> <strong>Company:</strong> {parse(jobs.company)}</p>
        </div>
        <div className="flex flex-row w-full flex-wrap gap-4 justify-between text-sm leading-normal">
          <p><i className="fa-regular fa-compass text-indigo-500"></i> <strong>Location:</strong> {jobs.location}</p>
          <p><i className="fa-regular fa-clock text-indigo-500"></i> <strong>Employment type:</strong> {jobs.employmentType}</p>
          <p><i className="fa-regular fa-calendar text-indigo-500"></i> <strong>Date posted:</strong> {jobs.datePosted}</p>
          <p><i className="fa-regular fa-money-bill-1 text-indigo-500"></i> <strong>Salary range:</strong> {jobs.salaryRange == "" ?  "Competitive" : jobs.salaryRange}</p>
        </div>
      </div>
    
    </>

  );
}