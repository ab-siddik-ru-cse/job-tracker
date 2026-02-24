let currentFilter = 'ALL';

let jobs = [
    {
        id: 1,
        company: 'Mobile First Corp',
        role: 'React Native Developer',
        salary: 'Remote Full-time • $130k - $175k',
        status: 'PENDING',
        details: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.'
    },
    {
        id: 2,
        company: 'TechNova Solutions',
        role: 'Frontend Developer',
        salary: 'Remote • $90k - $120k',
        status: 'PENDING',
        details: 'Develop responsive web apps using React and Tailwind CSS. Collaborate closely with UI/UX designers.'
    },
    {
        id: 3,
        company: 'CloudNet Inc',
        role: 'Backend Developer',
        salary: 'Hybrid • $110k - $150k',
        status: 'PENDING',
        details: 'Build RESTful APIs using Node.js and Express. Manage database architecture and server scaling.'
    },
    {
        id: 4,
        company: 'DataBridge Ltd',
        role: 'Full Stack Developer',
        salary: 'On-site • $100k - $140k',
        status: 'PENDING',
        details: 'Work with the MERN stack to develop scalable applications. Participate in system architecture planning.'
    },
    {
        id: 5,
        company: 'AI Labs',
        role: 'Machine Learning Engineer',
        salary: 'Remote • $140k - $180k',
        status: 'PENDING',
        details: 'Develop advanced ML models and deploy AI solutions for enterprise clients in the healthcare sector.'
    },
    {
        id: 6,
        company: 'CyberSecure Pro',
        role: 'Security Engineer',
        salary: 'Hybrid • $120k - $160k',
        status: 'PENDING',
        details: 'Implement security best practices, conduct vulnerability testing, and secure cloud infrastructure.'
    },
    {
        id: 7,
        company: 'FinTech Global',
        role: 'DevOps Engineer',
        salary: 'Remote • $115k - $155k',
        status: 'PENDING',
        details: 'Manage CI/CD pipelines, containerization with Docker/Kubernetes, and AWS cloud infrastructure.'
    },
    {
        id: 8,
        company: 'Creative Apps Studio',
        role: 'UI/UX Designer',
        salary: 'Remote • $85k - $110k',
        status: 'PENDING',
        details: 'Design modern, accessible, and user-friendly interfaces. Conduct user research and wireframing.'
    },
    {
        id: 9,
        company: 'NextGen Systems',
        role: 'Software Engineer',
        salary: 'On-site • $105k - $145k',
        status: 'PENDING',
        details: 'Develop scalable backend systems and microservices using Java Spring Boot and PostgreSQL.'
    },
    {
        id: 10,
        company: 'WebWorks Agency',
        role: 'JavaScript Developer',
        salary: 'Remote • $95k - $125k',
        status: 'PENDING',
        details: 'Build interactive web applications using modern JavaScript frameworks and integrate with third-party APIs.'
    }
];


function updateDashboardStats(filteredCount) {
    const total = jobs.length;
    const interviewCount = jobs.filter(job => job.status === 'INTERVIEW').length;
    const rejectedCount = jobs.filter(job => job.status === 'REJECTED').length;

    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
    document.getElementById('tab-job-count').innerText = `${filteredCount} of ${total}`;
}

function toggleJobStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(job => job.id === id);
    
    if (jobIndex !== -1) {
        if (jobs[jobIndex].status === newStatus) {
            jobs[jobIndex].status = 'PENDING';
        } else {
            jobs[jobIndex].status = newStatus;
        }
        renderJobs();
    }
}

function setFilter(filterType) {
    currentFilter = filterType;

    const buttons = ['ALL', 'INTERVIEW', 'REJECTED'];
    buttons.forEach(btn => {
        const el = document.getElementById(`filter-${btn}`);
        if (btn === filterType) {
            el.className = `filter-btn px-6 py-2.5 rounded-lg bg-blue-600 border border-gray-200 text-white font-semibold shadow-sm hover:bg-blue-700 btn-transition`;
        } else {
            el.className = `filter-btn px-6 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 btn-transition`;
        }
    });

    renderJobs();
}


function renderJobs() {
    const container = document.getElementById('jobs-card');
    container.innerHTML = '';

    let filteredJobs = jobs;
    if (currentFilter !== 'ALL') {
        filteredJobs = jobs.filter(job => job.status === currentFilter);
    }

    updateDashboardStats(filteredJobs.length);

    if (filteredJobs.length === 0) {
        container.innerHTML = `
                    <div class="w-full py-16 px-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center flex flex-col items-center justify-center">
                        <div class="w-24 h-24 mb-4">
                            <img class="mx-auto block mb-6" src="jobs.png" alt="">
                        </div>
                        <h2 class="text-2xl font-bold text-[#002C5C] mb-2">No Jobs Available</h2>
                        <p class="text-gray-500 mx-auto">Try adjusting your filters or check back later for new opportunities.</p>
                    </div>
                `;
        return;
    }

    filteredJobs.forEach(job => {
        const isInterview = job.status === 'INTERVIEW';
        const isRejected = job.status === 'REJECTED';

        const interviewBtnStyle = isInterview
            ? 'bg-emerald-500 text-white border-emerald-500 shadow-md transform'
            : 'bg-white text-emerald-500 border-emerald-500 hover:bg-emerald-50';

        const rejectedBtnStyle = isRejected
            ? 'bg-rose-500 text-white border-rose-500 shadow-md transform'
            : 'bg-white text-rose-500 border-rose-500 hover:bg-rose-50';

        let statusBadge = `<span class="px-5 py-2.5 rounded bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase">Not Applied</span>`;
        if (isInterview) statusBadge = `<span class="px-5 py-2.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">Interview</span>`;
        if (isRejected) statusBadge = `<span class="px-5 py-2.5 rounded bg-rose-100 text-rose-800 text-xs font-bold tracking-wider uppercase">Rejected</span>`;

        const cardHTML = `
                    <div class="w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 rounded-xl flex flex-col md:flex-row gap-6 relative group">
                        
                        <div class="flex-1 space-y-3">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h1 class="text-xl text-[#002C5C] font-extrabold flex items-center gap-3">
                                        ${job.company}
                                    </h1>
                                    <p class="text-gray-600 font-medium text-lg mt-1">${job.role}</p>
                                </div>
                                
                            </div>
                            
                            <p class="text-gray-500 text-sm font-medium flex items-center gap-2">
                                 ${job.salary}
                            </p>
                            <div class="self-start sm:self-center">
                                    ${statusBadge}
                                </div>
                            <p class="text-gray-600 leading-relaxed text-sm">${job.details}</p>
                            
                            <div class="flex flex-wrap gap-3">
                                <button onclick="toggleJobStatus(${job.id}, 'INTERVIEW')" class="btn-transition px-5 py-2 rounded-lg border-2 font-semibold text-sm cursor-pointer uppercase ${interviewBtnStyle}">
                                    Interview
                                </button>
                                <button onclick="toggleJobStatus(${job.id}, 'REJECTED')" class="btn-transition px-5 py-2 rounded-lg border-2 font-semibold text-sm cursor-pointer uppercase ${rejectedBtnStyle}">
                                    Rejected
                                </button>
                            </div>
                        </div>

                        <div class="absolute top-6 right-6 md:static md:mt-0">
                            <button onclick="deleteJob(${job.id})" title="Delete Job" class="w-10 h-10 flex items-center justify-center border-2 border-gray-200 text-gray-500 rounded-full hover:border-rose-500 hover:text-rose-500 transition-all cursor-pointer">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

renderJobs();
