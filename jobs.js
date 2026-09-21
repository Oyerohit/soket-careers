const JOBS = [
  {id:"research_scientist_pretraining_fm",title:"Research Scientist, Pretraining",team:"Research",location:"Bengaluru",type:"Full-time",blurb:"Scaling laws, training dynamics, and the pretraining stack.",apply:"https://soket.ai/careers/jobs/research_scientist_pretraining_fm",featured:true},
  {id:"research_scientist_data_fm",title:"Research Scientist, Data",team:"Research",location:"Bengaluru",type:"Full-time",blurb:"Data mixtures, synthetic pipelines, and evaluation.",apply:"https://soket.ai/careers/jobs",featured:true},
  {id:"mle_fm",title:"Machine Learning Engineer, Foundation Models",team:"Research",location:"Bengaluru",type:"Full-time",blurb:"Turn research bets into reliable training systems.",apply:"https://soket.ai/careers/jobs",featured:true},
  {id:"kernel_engineer_fm",title:"Kernel Engineer, Foundation Models",team:"Systems",location:"Bengaluru",type:"Full-time",comp:"Rs 55-75L + equity",blurb:"CUDA / Triton kernels for Hopper and Blackwell.",apply:"https://northstarz.ai/ats/#/careers/2c9f5bfe-0c9e-4c6b-8c7a-4cddc2574e9b/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",featured:true},
  {id:"ai_data_engineer_fm",title:"AI Data Engineer, Foundation Models",team:"Systems",location:"Bengaluru",type:"Full-time",comp:"Rs 35-50L + equity",blurb:"Ingestion, packing, lineage, and quality for training data.",apply:"https://northstarz.ai/ats/#/careers/cd88e92c-2c61-4626-bafd-8e9dde70c9a3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",featured:true},
  {id:"ai_data_curator_fm",title:"AI Data Curator, Foundation Models",team:"Systems",location:"Bengaluru",type:"Full-time",blurb:"Curation across web, code, document, and Indic corpora.",apply:"https://soket.ai/careers/jobs",featured:false},
  {id:"hpc_infrastructure_engineer",title:"HPC Infrastructure Engineer",team:"Systems",location:"Bengaluru",type:"Full-time",blurb:"Clusters, fabric, scheduling, and reliability.",apply:"https://soket.ai/careers/jobs",featured:false},
  {id:"rust_platform",title:"Software Engineer, Rust Platform",team:"Platform",location:"Bengaluru",type:"Full-time",blurb:"APIs, auth, metering, billing, and inference reliability.",apply:"https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/1591df77-1e21-4317-80b1-a9856a284a3f",linkedin:"https://www.linkedin.com/jobs/view/4459510112/",featured:true},
  {id:"executive_assistant",title:"Executive Assistant, CEO Office",team:"Operations",location:"Bengaluru, on-site",type:"Full-time",blurb:"Operating partner to the CEO: schedules, IndiaAI correspondence, briefings.",apply:"https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/b4beb5b7-6d12-41e8-b4c0-9ae9056d3eab",linkedin:"https://www.linkedin.com/jobs/view/4459283673/",featured:true}
];
function jobRow(job){
  return '<a class="job" href="role.html?id='+job.id+'"><div><strong>'+job.title+'</strong><br /><small>'+job.blurb+'</small></div><div>'+job.team+'</div><div>'+job.location+'</div><div>View</div></a>';
}
function renderFeatured(){
  var el=document.getElementById('featured-jobs');
  if(!el) return;
  el.innerHTML=JOBS.filter(function(j){return j.featured;}).map(jobRow).join('');
}
function renderBoard(filter){
  filter=filter||'All';
  var el=document.getElementById('board');
  if(!el) return;
  var rows=JOBS.filter(function(j){return filter==='All'||j.team===filter;});
  el.innerHTML=rows.map(jobRow).join('')||'<p>No roles in this team right now.</p>';
  var c=document.getElementById('count');
  if(c) c.textContent=rows.length+' open roles';
}
function renderRole(){
  var el=document.getElementById('role');
  if(!el) return;
  var id=new URLSearchParams(location.search).get('id');
  var job=JOBS.filter(function(j){return j.id===id;})[0]||JOBS[0];
  var extra=job.linkedin?'<a class="btn btn-ghost" href="'+job.linkedin+'" target="_blank" rel="noopener">LinkedIn listing</a>':'';
  var comp=job.comp?'<span>'+job.comp+'</span>':'';
  el.innerHTML='<p class="kicker">'+job.team+'</p><h1>'+job.title+'</h1><p class="meta"><span>'+job.location+'</span><span>'+job.type+'</span>'+comp+'</p><p class="lede">'+job.blurb+'</p><p>Applications run through Northstarz. Recruiters write from @soket.ai or the ATS.</p><p style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary" href="'+job.apply+'" target="_blank" rel="noopener">Apply</a>'+extra+'<a class="btn btn-ghost" href="jobs.html">All roles</a></p>';
  document.title=job.title+' — Soket AI Careers';
}
