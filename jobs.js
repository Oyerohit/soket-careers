const JOBS = [
  {
    id: "research_scientist_pretraining_fm",
    title: "Research Scientist, Pretraining",
    team: "Research",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b980L\u20131.5Cr + equity",
    blurb: "Own scaling laws, training dynamics, and the pretraining stack for frontier models in math, code, and reasoning.",
    apply: "https://northstarz.ai/ats/#/careers/24dda8b4-7e8f-4720-8d99-3917a11367f3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: true,
    work: [
      "Drive research across pretraining and post-training pipelines for large-scale foundation models.",
      "Evaluate and implement current methods in pretraining and post-training.",
      "Design model architectures for reasoning, code, mathematics, multilingual, and domain work.",
      "Define data mixture, filtering, and curriculum for frontier training.",
      "Run experiments on scaling laws, training dynamics, and capability emergence.",
      "Optimise distributed training stacks, parallelism, and compute efficiency.",
      "Improve post-training: SFT, preference optimisation, alignment, instruction tuning.",
      "Build evaluation and benchmarking for capability, safety, reasoning, and generalisation."
    ],
    fit: [
      "7+ years in machine learning, deep learning, or foundation-model research.",
      "PhD or Master\u2019s in Computer Science or a related field (PhD preferred).",
      "Strong grasp of transformers, LLM training dynamics, and large-scale optimisation.",
      "Comfortable across theory and systems. Python and modern ML tooling."
    ]
  },
  {
    id: "research_scientist_data_fm",
    title: "Research Scientist, Data",
    team: "Research",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b955L\u20131Cr + equity",
    blurb: "Design data mixtures, synthetic pipelines, and evaluation that move model capability.",
    apply: "https://northstarz.ai/ats/#/careers/d56e23ba-eaf8-475b-bdf2-0876de086088/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: true,
    work: [
      "Lead capability-driven data strategy for pretraining and post-training.",
      "Own datasets that improve code, mathematical reasoning, multi-step problem solving, and tool use.",
      "Set mixture strategy, inclusion rules, and quality standards.",
      "Build synthetic data and execution-grounded training systems.",
      "Maintain sandboxed execution so model output can be verified and fed back.",
      "Run curation infrastructure: filtering, deduplication, contamination checks, trace validation.",
      "Design annotation rubrics and human/AI-in-the-loop workflows for SFT and RL.",
      "Close the data to model to evaluation loop by mapping failures to data changes."
    ],
    fit: [
      "Master\u2019s or PhD in Computer Science or a related field (PhD preferred).",
      "6+ years in AI research, data systems, or ML infrastructure.",
      "Strong Python, plus fluency in at least one systems language.",
      "Deep understanding of LLM training pipelines, synthetic data, and post-training methods."
    ]
  },
  {
    id: "mle_fm",
    title: "Machine Learning Engineer, Foundation Models",
    team: "Research",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b955\u201375L + equity",
    blurb: "Turn research bets into reliable training and post-training systems.",
    apply: "https://northstarz.ai/ats/#/careers/ab00cc27-c864-499f-b706-0c8c78bec5ea/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: true,
    work: [
      "Design and optimise large-scale pretraining and post-training pipelines.",
      "Turn research papers into production training code.",
      "Optimise multi-node, multi-GPU training for efficiency and fault tolerance.",
      "Run ablations on architecture, hyperparameters, and scaling behaviour.",
      "Improve throughput, memory use, and hardware utilisation.",
      "Wire training to continuous evaluation and benchmarking.",
      "Debug instability, convergence failures, and distributed-systems faults.",
      "Ship post-training workflows: instruction tuning, alignment, preference optimisation."
    ],
    fit: [
      "3+ years in machine learning engineering or deep-learning systems.",
      "Distributed training: data, tensor, pipeline, and expert parallelism.",
      "Megatron-LM experience is expected. PyTorch Distributed, DeepSpeed, or FSDP helps.",
      "Comfortable with nsys-class profilers and GPU cluster environments."
    ]
  },
  {
    id: "kernel_engineer_fm",
    title: "Kernel Engineer, Foundation Models",
    team: "Systems",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b955\u201375L + equity",
    blurb: "CUDA / Triton kernels for Hopper and Blackwell. Training and inference that earn every FLOP.",
    apply: "https://northstarz.ai/ats/#/careers/2c9f5bfe-0c9e-4c6b-8c7a-4cddc2574e9b/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: true,
    work: [
      "Design and optimise CUDA kernels for foundation-model training and inference.",
      "Target Hopper and Blackwell specifically.",
      "Build primitives for attention, GEMM, softmax, normalisation, and MoE.",
      "Use fusion, warp specialisation, async execution, and memory-hierarchy work.",
      "Ship FlashAttention-style kernels, KV-cache management, and sequence-parallel inference.",
      "Write quantisation and dequantisation kernels across 1-bit, 4-bit, and 8-bit schemes.",
      "Profile and debug kernels with Nsight and related tools.",
      "Integrate custom kernels into training frameworks and inference runtimes."
    ],
    fit: [
      "3+ years in GPU kernels, HPC, compilers, or high-performance ML infrastructure.",
      "Deep knowledge of NVIDIA SM design, memory hierarchy, tensor cores, and warp scheduling.",
      "Strong CUDA. Triton and TileLang are useful.",
      "You like working close to the hardware and explaining why a kernel is slow."
    ]
  },
  {
    id: "ai_data_engineer_fm",
    title: "AI Data Engineer, Foundation Models",
    team: "Systems",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b935\u201350L + equity",
    blurb: "Petabyte-scale ingestion, packing, lineage, and quality for training-ready datasets.",
    apply: "https://northstarz.ai/ats/#/careers/cd88e92c-2c61-4626-bafd-8e9dde70c9a3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: true,
    work: [
      "Build production data pipelines for LLM training data.",
      "Run ingestion, parsing, cleaning, normalisation, filtering, and packing.",
      "Engineer high-throughput systems for web, code, document, synthetic, and structured data.",
      "Own versioning, lineage, reproducibility, and governance.",
      "Optimise ETL for throughput, cost, and reliability.",
      "Build quality pipelines: deduplication, contamination detection, metadata.",
      "Connect data systems to training and inference infrastructure.",
      "Add CI/CD, observability, and developer tooling for the data stack."
    ],
    fit: [
      "Bachelor\u2019s or Master\u2019s in Computer Science or a related field (Master\u2019s preferred).",
      "Strong software-engineering and data-systems fundamentals.",
      "Python as the primary language. Spark, Hugging Face Datasets, Arrow, Parquet, JSONL.",
      "You care about reproducibility and data quality at scale."
    ]
  },
  {
    id: "ai_data_curator_fm",
    title: "AI Data Curator, Foundation Models",
    team: "Systems",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b918\u201325L",
    blurb: "Judgment-heavy curation across web, code, document, and Indic corpora.",
    apply: "https://northstarz.ai/ats/#/careers/aeb783a9-5942-450a-880d-32382f63eaa3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: false,
    work: [
      "Source and organise datasets across web, code, document, speech, and synthetic sources.",
      "Align corpora to reasoning, coding, mathematics, multilinguality, and instruction following.",
      "Support acquisition: crawling, APIs, and extraction, with data engineering.",
      "Review quality with manual inspection and automated validation.",
      "Filter duplicates, noise, unsafe content, contamination, and low-signal data.",
      "Run annotation and QA for SFT and post-training sets.",
      "Validate synthetic traces, tool-use trajectories, and preference data.",
      "Keep metadata, provenance, and versioning reproducible across releases."
    ],
    fit: [
      "Bachelor\u2019s or Master\u2019s in CS, data science, computational linguistics, or a related field.",
      "Experience in dataset curation, annotation, or training-data workflows.",
      "Comfortable making quality judgments on large corpora.",
      "Python plus Hugging Face Datasets, Pandas, or Spark is expected."
    ]
  },
  {
    id: "hpc_infrastructure_engineer",
    title: "HPC Infrastructure Engineer",
    team: "Systems",
    location: "Bengaluru",
    type: "Full-time",
    comp: "\u20b910\u201320L",
    blurb: "Clusters, fabric, scheduling, and the reliability that makes thousand-GPU runs possible.",
    apply: "https://northstarz.ai/ats/#/careers/911af2cf-d032-4ea1-8e39-d2f018241408/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    featured: false,
    work: [
      "Run large GPU clusters on-prem and in the cloud.",
      "Administer Slurm and Kubernetes scheduling.",
      "Monitor health, utilisation, storage, and networking.",
      "Diagnose hardware, fabric, and distributed-infrastructure failures.",
      "Manage distributed storage and high-speed networking.",
      "Keep access control and basic cyber hygiene in place.",
      "Build automation for deploy and day-2 operations.",
      "Support training and inference jobs; own incident response and capacity planning."
    ],
    fit: [
      "2\u20135+ years in infrastructure or systems administration.",
      "Comfortable debugging cluster failures under time pressure.",
      "Slurm, Kubernetes or Enroot, nvidia-smi / DCGM, InfiniBand basics.",
      "Experience with parallel file systems (for example WEKA) is a plus."
    ]
  },
  {
    id: "rust_platform",
    title: "Software Engineer, Rust Platform",
    team: "Platform",
    location: "Bengaluru",
    type: "Full-time",
    blurb: "APIs, auth, metering, billing, and reliability for inference \u2014 production Rust.",
    apply: "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/1591df77-1e21-4317-80b1-a9856a284a3f",
    linkedin: "https://www.linkedin.com/jobs/view/4459510112/",
    featured: true,
    work: [
      "Build the inference control plane: APIs, authentication, metering, and billing.",
      "Write production Rust services that stay up when the workload is inference, not CRUD.",
      "Own reliability, latency, and correctness of the serving path.",
      "Work next to researchers shipping foundation models, and own the surface those models are served through.",
      "Design services that enterprises can run under their own governance."
    ],
    fit: [
      "At least two years of production Rust.",
      "3\u20134 years overall in backend or platform engineering.",
      "Judgment for systems that fail in public: auth, quotas, observability.",
      "Bengaluru, full-time."
    ]
  },
  {
    id: "executive_assistant",
    title: "Executive Assistant, CEO Office",
    team: "Operations",
    location: "Bengaluru, on-site",
    type: "Full-time",
    blurb: "Operating partner to the CEO: multi-city schedules, IndiaAI correspondence, briefings in the actual technical language.",
    apply: "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/b4beb5b7-6d12-41e8-b4c0-9ae9056d3eab",
    linkedin: "https://www.linkedin.com/jobs/view/4459283673/",
    featured: true,
    work: [
      "Run multi-city schedules, travel, and inbound for the CEO and co-founder.",
      "Draft and track IndiaAI, partner, and government correspondence.",
      "Prepare briefings in the actual technical language of models, compute, and milestones.",
      "Keep GPU-cluster timelines, grant milestones, and meetings in the same week.",
      "Handle confidential material on strategy, hiring, and compute."
    ],
    fit: [
      "3\u20135 years supporting founders or C-level in a deep-tech or fast-growing company.",
      "On-site in Bengaluru.",
      "You already know what a cluster timeline and a grant milestone require.",
      "Discretion is part of the job, not an extra."
    ]
  }
];

function jobRow(job) {
  return '<a class="job" href="role.html?id=' + job.id + '">\
    <div>\
      <strong>' + job.title + '</strong><br />\
      <small>' + job.blurb + '</small>\
    </div>\
    <div>' + job.team + '</div>\
    <div>' + job.location + '</div>\
    <div>View</div>\
  </a>';
}

function renderFeatured() {
  var el = document.getElementById("featured-jobs");
  if (!el) return;
  el.innerHTML = JOBS.filter(function (j) { return j.featured; }).map(jobRow).join("");
}

function renderBoard(filter) {
  filter = filter || "All";
  var el = document.getElementById("board");
  if (!el) return;
  var rows = JOBS.filter(function (j) { return filter === "All" || j.team === filter; });
  el.innerHTML = rows.map(jobRow).join("") || "<p>No roles in this team right now.</p>";
  var c = document.getElementById("count");
  if (c) c.textContent = rows.length + " open roles";
}

function list(items) {
  if (!items || !items.length) return "";
  return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
}

function renderRole() {
  var el = document.getElementById("role");
  if (!el) return;
  var id = new URLSearchParams(location.search).get("id");
  var job = JOBS.filter(function (j) { return j.id === id; })[0] || JOBS[0];
  var extra = job.linkedin
    ? '<a class="btn btn-ghost" href="' + job.linkedin + '" target="_blank" rel="noopener">LinkedIn listing</a>'
    : "";
  var comp = job.comp ? "<span>" + job.comp + "</span>" : "";
  el.innerHTML =
    '<p class="kicker">' + job.team + "</p>" +
    "<h1>" + job.title + "</h1>" +
    '<p class="meta"><span>' + job.location + "</span><span>" + job.type + "</span>" + comp + "</p>" +
    '<p class="lede">' + job.blurb + "</p>" +
    "<h2>The work</h2>" + list(job.work) +
    "<h2>You are a fit if</h2>" + list(job.fit) +
    "<h2>Apply</h2>" +
    "<p>Applications run through Northstarz. Recruiters write from @soket.ai or the ATS.</p>" +
    '<p class="hero-actions">' +
      '<a class="btn btn-primary" href="' + job.apply + '" target="_blank" rel="noopener">Apply on Northstarz</a>' +
      extra +
      '<a class="btn btn-ghost" href="jobs.html">All roles</a>' +
    "</p>";
  document.title = job.title + " \u2014 Soket AI Careers";
}
