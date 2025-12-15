
import React, { useState } from 'react';

const jobsData = [
    {
        id: 1,
        title: "Art Director",
        department: "Marketing",
        experience: "1-2 Years",
        openings: 2,
        // description: "We are seeking a skilled Website Designer to join our dynamic team and oversee the development, maintenance, and optimization of our websites. The ideal candidate will have a strong understanding of web technologies, a keen eye for detail, and a passion for creating exceptional digital experiences.",
        Qualifications: [
            "Any Bachelor's degree (Marketing/Mass Communication/Business preferred)",
            "Experience: 2-4 years handling clients in advertising or digital marketing agency",
            "Certifications: Project management training (preferred but not mandatory)"
        ],
        responsibilities: [
            "Manage 6-8 client accounts as their main contact person",
            " Understand client requirements and explain to internal teams",
            "Coordinate between clients and design/content/social media teams",
            "Schedule and attend client meetings (office or video calls)",
            "Prepare and present monthly progress reports to clients",
            "Handle client complaints and feedback professionally",
            "Make sure work is delivered on time as promised",
            "Follow up for payments and invoices",
            "Find opportunities to sell additional services to existing clients",
            "Keep all client communication and approvals documented",
            "Onboard new clients with proper introduction and expectations",
        ],
        Skills: [
            "Software: MS Office (Excel, Word, PowerPoint), Google Workspace",
            "Tools: Project management software like Asana, Trello, or Monday.com",
            "Languages: Good English & Hindi (speaking and writing)",
            "Understanding: Basic knowledge of social media, design, and digital marketing",
            "Skills: Good talking and listening, problem-solving, staying organized",

        ],
        Competence: [
            "Software: MS Office (Excel, Word, PowerPoint), Google Workspace",
            "Tools: Project management software like Asana, Trello, or Monday.com",
            "Languages: Good English & Hindi (speaking and writing)",
            "Understanding: Basic knowledge of social media, design, and digital marketing",
            "Skills: Good talking and listening, problem-solving, staying organized",

        ],
    },
    {
        id: 2,
        title: "Account Director",
        department: "Marketing",
        experience: "5+ Years",
        openings: 1,
        // description: "Leading the account management team to ensure client satisfaction and growth.",
        responsibilities: [
            "Manage client relationships and expectations.",
            "Oversee project delivery and quality.",
            "Develop strategic plans for client growth."
        ],
        skills: ["Leadership", "Communication", "Strategic Planning"]
    },
    {
        id: 3,
        title: "Motion Graphic Artist",
        department: "Creative",
        experience: "2-4 Years",
        openings: 3,
        // description: "Creating engaging motion graphics for various digital platforms.",
        responsibilities: [
            "Design and animate motion graphics.",
            "Collaborate with the creative team on storyboards.",
            "Edit video content for social media."
        ],
        skills: ["After Effects", "Premiere Pro", "Animation"]
    },
    {
        id: 4,
        title: "Senior Graphic Designer",
        department: "Creative",
        experience: "4+ Years",
        openings: 1,
        // description: "Designing high-quality visuals for marketing campaigns.",
        responsibilities: [
            "Lead design projects from concept to completion.",
            "Mentor junior designers.",
            "Ensure brand consistency across all collaterals."
        ],
        skills: ["Photoshop", "Illustrator", "Branding"]
    }
];

const ContactCareer = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
    };

    const handleBackToList = () => {
        setSelectedJob(null);
    };

    return (
        <div className="w-full bg-black text-white py-20 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">

                {/* Left Side: Job List or Job Details */}
                <div className={`transition-all duration-500 ease-in-out ${selectedJob ? 'lg:w-1/2' : 'w-full lg:w-1/2'} bg-[#1a1a1a] rounded-4xl p-8 md:p-12 border border-gray-800`}>

                    {!selectedJob ? (
                        /* JOB LIST VIEW */
                        <div className="animate-fade-in">
                            <div className="flex justify-between items-end mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold">Careers</h2>
                                <span className="text-gray-500 hidden md:block">Experience years</span>
                            </div>

                            <div className="flex flex-col gap-8">
                                {jobsData.map((job) => (
                                    <div key={job.id} className="group border-b border-gray-800 pb-8 hover:border-gray-600 transition-colors">
                                        <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                                        <div className="flex flex-wrap items-center justify-between gap-4 text-sm md:text-base text-gray-400">
                                            <div className="flex gap-8">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Job function</span>
                                                    <span>{job.department}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Experience</span>
                                                    <span>{job.experience}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Openings</span>
                                                    <span>{job.openings}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleApplyClick(job)}
                                                className="text-white border-b border-white pb-1 group-hover:text-blue-400 group-hover:border-blue-400 transition-colors cursor-pointer"
                                            >
                                                Apply Here
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* JOB DETAILS VIEW */
                        <div className="animate-fade-in">
                            <button
                                onClick={handleBackToList}
                                className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                ← Back to Jobs
                            </button>

                            <h2 className="text-3xl md:text-4xl font-bold mb-8">{selectedJob.title}</h2>

                            <div className="space-y-8 text-gray-300">
                                <p className="leading-relaxed">
                                    {selectedJob.description}
                                </p>

                                {selectedJob.responsibilities && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.responsibilities.map((res, idx) => (
                                                <li key={idx}>{res}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedJob.skills && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Required Skills and Experience</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.skills.map((skill, idx) => (
                                                <li key={idx}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Application Form (Hidden initially, shown when job selected) */}
                {selectedJob && (
                    <div className="lg:w-1/2 animate-slide-in-right">
                        <div className="flex flex-col gap-6">

                            {/* Form Card */}
                            <div className="bg-[#1a1a1a] rounded-4xl p-8 md:p-12 border border-gray-800">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Become a Swastixa</h2>
                                <form className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Mobile no."
                                            className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <textarea
                                            placeholder="Enter Your Message"
                                            rows="3"
                                            className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 resize-none"
                                        ></textarea>
                                    </div>

                                    <button className="mt-8 self-center border-b border-white pb-1 text-lg font-medium hover:text-gray-300 transition-colors">
                                        Submit
                                    </button>
                                </form>
                            </div>

                            {/* Resume Upload Card */}
                            <div className="bg-[#1a1a1a] rounded-4xl p-8 border border-gray-800">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold">Upload Resume*</span>
                                    <span className="text-xs text-gray-500">Allowed file types: pdf, doc, docx, txt</span>
                                </div>
                                <div className="bg-gray-200/5 hover:bg-gray-200/10 transition-colors rounded-xl h-32 flex items-center justify-center border-2 border-dashed border-gray-700 cursor-pointer">
                                    <span className="text-gray-500">Choose File</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ContactCareer;
