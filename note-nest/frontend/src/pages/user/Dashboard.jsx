import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar";
import TopBar from '../../components/TopBar';
import PreviewPage from '../../components/PreviewPage';
import UploadModal from '../../components/UploadModal';
import UploadedResources from "../../components/UploadedResources";
import { FaCloudUploadAlt } from 'react-icons/fa';

const subjectsByYear = {
  "1st Year": [
    "Essential of ICT",
    "Fundamentals of Computer Programming",
    "Fundamentals of Web Technology",
    "English",
    "Mathematics",
  ],
  "2nd Year": [
    "Data Structures and Algorithms",
    "Statistics for Technology",
    "Advanced Computer Programming",
    "Multimedia Design and Technologies",
    "Human Computer Interaction",
    "Fundamentals of Web Technology",
    "Computer Networks",
    "Database Management Systems",
    "Computer Graphics",
    "System Analysis and Design",
    "Accounting for Technology",
  ],
  "3rd Year": [
    "Computer Architecture and Organization",
    "Advanced Database Management Systems",
    "Advanced Web Technologies",
    "Social and Professional Issues in IT",
    "Software Engineering",
    "Information Security",
  ],
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedType, setSelectedType] = useState(''); // PDF or Video
  const [pastPaperYear, setPastPaperYear] = useState(''); // Past papers
  const [selectedResource, setSelectedResource] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedSubject(''); // reset subject when year changes
  };

  const handlePreview = (resource) => {
    window.history.pushState(resource, '', '/previewpage');
    setSelectedResource(resource);
  };

  const closePreview = () => {
    window.history.back();
    setSelectedResource(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#F7F8FB] p-6">
        <TopBar />
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

        {/* Upload Button */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Popular Resources</h3>
          <button
            className="bg-[#2094F3] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center gap-2"
            onClick={() => setIsUploadModalOpen(true)}
          >
            <FaCloudUploadAlt /> Upload Resource
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap items-center gap-3 mb-6">
          {/* Year */}
          <select
            className="border px-3 py-2 rounded text-sm"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            {Object.keys(subjectsByYear).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          {/* Subject */}
          <select
            className="border px-3 py-2 rounded text-sm"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={!selectedYear}
          >
            <option value="">Select Subject</option>
            {selectedYear &&
              subjectsByYear[selectedYear].map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
          </select>

          {/* Resource Type */}
          <select
            className="border px-3 py-2 rounded text-sm"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Resource Type</option>
            <option value="pdf">PDF</option>
            <option value="video">Video</option>
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by title..."
            className="border px-3 py-2 rounded text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Past Papers */}
          <div className="ml-auto">
            <label className="text-sm mr-2">Past Papers:</label>
            <select
              className="border px-3 py-2 rounded text-sm"
              value={pastPaperYear}
              onChange={(e) => setPastPaperYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
          </div>
        </div>

        {/* Resources */}
        <UploadedResources
          searchTerm={searchTerm}
          selectedYear={selectedYear}
          selectedSubject={selectedSubject}
          selectedType={selectedType}
          pastPaperYear={pastPaperYear}
          onPreview={handlePreview}
        />

        {/* Preview modal */}
        {selectedResource && (
          <PreviewPage resource={selectedResource} onClose={closePreview} />
        )}

        {/* Upload modal */}
        <UploadModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          onUpload={(files) => {
            console.log("Files to upload:", files);
            setIsUploadModalOpen(false);
          }}
        />
      </main>
    </div>
  );
};

export default Dashboard;
