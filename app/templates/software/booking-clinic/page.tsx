'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Physician {
  id: string;
  name: string;
  specialty: string;
  credentials: string;
  rating: number;
  patientsCount: string;
  telehealthAvailable: boolean;
  inClinicAvailable: boolean;
  avatar: string;
  nextOpening: string;
}

export default function MediSlotClinicPage() {
  // Stepper State
  const [activeStep, setActiveStep] = useState<number>(1);

  // Specialty & Doctor
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Dermatology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('dr-chen');
  const [visitType, setVisitType] = useState<'in-clinic' | 'telehealth'>('in-clinic');

  // Insurance State
  const [insuranceProvider, setInsuranceProvider] = useState<string>('BlueCross BlueShield');
  const [memberId, setMemberId] = useState<string>('BCBS-98421074');

  // Symptom Triage State
  const [chiefComplaint, setChiefComplaint] = useState<string>('Severe Skin Rash & Eczema Flare-Up');
  const [symptomDuration, setSymptomDuration] = useState<string>('3 to 7 Days');
  const [painLevel, setPainLevel] = useState<number>(5);
  const [hasAllergies, setHasAllergies] = useState<boolean>(true);
  const [allergyNotes, setAllergyNotes] = useState<string>('Penicillin, Shellfish');

  // Appointment Slot
  const [selectedTime, setSelectedTime] = useState<string>('Tomorrow 10:15 AM');
  const [confirmedBooking, setConfirmedBooking] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Practice inquiry
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState({
    clinicName: '',
    directorName: '',
    email: '',
    physiciansCount: '5-15 Physicians',
    notes: ''
  });

  const doctors: Physician[] = [
    {
      id: 'dr-chen',
      name: 'Dr. Evelyn Chen, MD, FAAD',
      specialty: 'Dermatology & Cutaneous Surgery',
      credentials: 'Johns Hopkins Medicine • 14 Yrs Experience',
      rating: 4.96,
      patientsCount: '4,200+ Patients',
      telehealthAvailable: true,
      inClinicAvailable: true,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      nextOpening: 'Tomorrow 10:15 AM'
    },
    {
      id: 'dr-alvarez',
      name: 'Dr. Mateo Alvarez, MD, FACC',
      specialty: 'Cardiology & Preventive Heart Health',
      credentials: 'Stanford Health Care • 18 Yrs Experience',
      rating: 4.98,
      patientsCount: '6,100+ Patients',
      telehealthAvailable: true,
      inClinicAvailable: true,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      nextOpening: 'Thursday 1:30 PM'
    },
    {
      id: 'dr-patel',
      name: 'Dr. Ananya Patel, MD',
      specialty: 'Family Medicine & Integrative Health',
      credentials: 'Mayo Clinic College • 11 Yrs Experience',
      rating: 4.94,
      patientsCount: '3,800+ Patients',
      telehealthAvailable: true,
      inClinicAvailable: true,
      avatar: 'https://images.unsplash.com/photo-1594824813629-d75ff39bb3e3?auto=format&fit=crop&w=400&q=80',
      nextOpening: 'Today 4:00 PM (Urgent Care)'
    }
  ];

  const currentDoctor = doctors.find(d => d.id === selectedDoctorId) || doctors[0];

  const estimatedCopay =
    insuranceProvider === 'Self-Pay Cash'
      ? 180
      : insuranceProvider === 'Medicare'
      ? 15
      : 30;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleFinalizeBooking = () => {
    setConfirmedBooking(true);
    showToast(`Appointment confirmed with ${currentDoctor.name}!`);
  };

  return (
    <div
      style={{
        backgroundColor: '#042f2e',
        color: '#f0fdfa',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#14b8a6] selection:text-slate-900"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-teal-200 bg-teal-950/90 hover:bg-teal-900 border border-teal-600/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0f766e] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-teal-300/40 animate-fade-in">
          <span className="text-lg">🩺</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE CLINIC NAVBAR */}
      <header className="border-b border-teal-800/50 bg-[#02201f]/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-teal-950 font-bold text-lg shadow-lg shadow-teal-950/60">
              🩺
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-xl text-white font-['Outfit'] block leading-none">
                MEDI<span className="text-teal-400">SLOT</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-teal-300/80 font-mono">
                Patient Care & Clinical Intake OS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-teal-200/80">
            <a href="#intake-flow" className="hover:text-teal-300 transition-colors">Triage & Intake</a>
            <a href="#physicians" className="hover:text-teal-300 transition-colors">Specialty Doctors</a>
            <a href="#hipaa-tech" className="hover:text-teal-300 transition-colors">HIPAA Compliance</a>
            <a href="#clinic-inquiry" className="hover:text-teal-300 transition-colors">Practice Setup</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#intake-flow"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-teal-950 transition-all font-bold shadow-md shadow-teal-950"
            >
              Test Patient Intake
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-teal-900/60">
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-teal-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-emerald-700/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>HIPAA-Compliant • Real-Time Insurance Pre-Check</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1]">
                Frictionless patient triage and <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400">doctor appointment scheduling.</span>
              </h1>

              <p className="text-teal-100/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                Replace bulky clipboard clipboards in waiting rooms. Allow patients to complete medical questionnaires, verify insurance eligibility, and schedule urgent care or specialist consultations in 90 seconds.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-teal-800/60 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-teal-300 font-['Outfit']">7.2 Mins</div>
                  <div className="text-xs text-teal-200/70 mt-1">Saved per Patient Check-in</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-300 font-['Outfit']">99.4%</div>
                  <div className="text-xs text-teal-200/70 mt-1">Insurance Eligibility Match</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-teal-200 font-['Outfit']">0 Paper</div>
                  <div className="text-xs text-teal-200/70 mt-1">EHR Instant Sync</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#intake-flow"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-teal-950 shadow-xl shadow-teal-950 transition-all flex items-center gap-2"
                >
                  <span>Launch Interactive Intake Stepper</span>
                  <span>→</span>
                </a>
                <a
                  href="#clinic-inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-950/60 hover:bg-teal-900 text-teal-200 border border-teal-700/50 transition-all"
                >
                  Deploy For Your Practice
                </a>
              </div>
            </div>

            {/* Right Live Triage Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-[#032423] border border-teal-700/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-teal-900/50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">Clinical Triage Engine</div>
                      <div className="text-sm font-bold text-white font-['Outfit']">Beacon Health Specialty Clinic</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-teal-950 text-emerald-400 border border-teal-700">
                    EHR CONNECTED
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#011716] border border-teal-900/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-teal-300/70">Verified Coverage</p>
                      <p className="text-sm font-bold text-white">BlueCross BlueShield PPO</p>
                    </div>
                    <span className="text-xs font-mono bg-teal-950 text-teal-300 px-2 py-1 rounded-lg border border-teal-800">
                      $30 Co-Pay Estimate
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-800/30 text-xs text-teal-200/80 space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-teal-400/70">Triage Urgency:</span>
                      <span className="text-amber-400">Moderate (Skin Eczema)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-400/70">Intake Encrypted:</span>
                      <span className="text-emerald-400">AES-256 GCM HIPAA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-400/70">Provider Routing:</span>
                      <span className="text-white">Epic / Cerner HL7 FHIR API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE CLINICAL INTAKE STEPPER */}
      <section id="intake-flow" className="py-20 bg-[#02201f] border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
              Interactive Patient Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] mt-3">
              Step Through the Patient Intake Flow
            </h2>
            <p className="text-teal-200/70 text-sm sm:text-base mt-2">
              Select doctor specialty, verify co-pay, detail symptoms on the triage slider, and generate your intake ticket.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="grid grid-cols-4 gap-2">
              {[
                { num: 1, title: 'Physician' },
                { num: 2, title: 'Insurance' },
                { num: 3, title: 'Symptoms' },
                { num: 4, title: 'Schedule' }
              ].map(s => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    activeStep === s.num
                      ? 'bg-teal-600 text-teal-950 font-bold border-teal-400 shadow-lg'
                      : activeStep > s.num
                      ? 'bg-teal-950/80 text-teal-300 border-teal-700'
                      : 'bg-[#031b1a] text-teal-500 border-teal-900'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase">Step 0{s.num}</div>
                  <div className="text-xs font-bold mt-0.5">{s.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Stepper Body Container */}
          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#032827] border border-teal-700/50 shadow-2xl relative">
            
            {/* STEP 1: PHYSICIAN & SPECIALTY */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-teal-900/60 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Outfit']">
                      Select Specialty & Attending Physician
                    </h3>
                    <p className="text-xs text-teal-200/70">Pick your medical field and consultation mode.</p>
                  </div>
                  
                  {/* Telehealth vs In-Clinic toggle */}
                  <div className="flex bg-[#011817] p-1 rounded-xl border border-teal-900">
                    <button
                      onClick={() => setVisitType('in-clinic')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        visitType === 'in-clinic' ? 'bg-teal-500 text-teal-950 font-bold' : 'text-teal-400'
                      }`}
                    >
                      🏥 In-Clinic
                    </button>
                    <button
                      onClick={() => setVisitType('telehealth')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        visitType === 'telehealth' ? 'bg-teal-500 text-teal-950 font-bold' : 'text-teal-400'
                      }`}
                    >
                      💻 Telehealth Video
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {doctors.map(doc => {
                    const isSelected = selectedDoctorId === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-teal-950 border-teal-400 shadow-xl'
                            : 'bg-[#011b1a] border-teal-900/60 hover:border-teal-700'
                        }`}
                      >
                        <img
                          src={doc.avatar}
                          alt={doc.name}
                          className="w-16 h-16 rounded-xl object-cover border border-teal-500/40 mb-3"
                        />
                        <h4 className="font-bold text-sm text-white font-['Outfit']">{doc.name}</h4>
                        <div className="text-xs text-teal-400 font-medium mt-0.5">{doc.specialty}</div>
                        <div className="text-[11px] text-teal-200/60 mt-1">{doc.credentials}</div>
                        <div className="mt-3 pt-2 border-t border-teal-900/60 flex justify-between text-[10px] font-mono">
                          <span className="text-amber-300">★ {doc.rating}</span>
                          <span className="text-emerald-400">⚡ {doc.nextOpening}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Next: Insurance Pre-Check →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: INSURANCE VERIFICATION */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-teal-900/60">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    Insurance Eligibility & Co-Pay Estimation
                  </h3>
                  <p className="text-xs text-teal-200/70">We run automated 270/271 EDI eligibility queries in real time.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-2">
                      Primary Health Insurance Provider
                    </label>
                    <select
                      value={insuranceProvider}
                      onChange={e => setInsuranceProvider(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#011817] border border-teal-800 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      <option>BlueCross BlueShield</option>
                      <option>Aetna Healthcare</option>
                      <option>Cigna Global</option>
                      <option>UnitedHealthcare</option>
                      <option>Medicare Part B</option>
                      <option>Self-Pay Cash</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-2">
                      Member / Policy ID Number
                    </label>
                    <input
                      type="text"
                      value={memberId}
                      onChange={e => setMemberId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#011817] border border-teal-800 text-white text-xs font-mono focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                {/* Instant Verification Banner */}
                <div className="p-5 rounded-2xl bg-teal-950/70 border border-teal-500/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      ✓ Coverage Active • In-Network Tier 1
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      Estimated Patient Co-Pay: ${estimatedCopay}
                    </div>
                    <div className="text-[11px] text-teal-200/60 mt-0.5">
                      Covers 100% of diagnostic consultation and initial triage labs.
                    </div>
                  </div>
                  <span className="text-3xl">🛡️</span>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="px-5 py-3 rounded-xl bg-[#011b1a] text-teal-300 text-xs font-bold border border-teal-800"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Next: Symptoms Triage →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SYMPTOM QUESTIONNAIRE & PAIN SLIDER */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-teal-900/60">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    Clinical Triage & Symptom Evaluation
                  </h3>
                  <p className="text-xs text-teal-200/70">Information is routed directly into the physician&apos;s EHR chart prior to entry.</p>
                </div>

                <div>
                  <label className="block text-xs font-mono text-teal-300 uppercase mb-2">
                    Chief Complaint / Primary Symptom
                  </label>
                  <input
                    type="text"
                    value={chiefComplaint}
                    onChange={e => setChiefComplaint(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#011817] border border-teal-800 text-white text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>

                {/* Pain Level Slider */}
                <div className="p-5 rounded-2xl bg-[#011b1a] border border-teal-900/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono text-teal-300 uppercase">
                      Severity / Discomfort Rating (1-10):
                    </label>
                    <span className="text-sm font-mono font-bold text-teal-300 bg-teal-950 px-3 py-1 rounded-lg border border-teal-700">
                      Level {painLevel} / 10 ({painLevel <= 3 ? 'Mild' : painLevel <= 6 ? 'Moderate' : 'Severe'})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={painLevel}
                    onChange={e => setPainLevel(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer bg-teal-950 rounded-lg h-2"
                  />
                </div>

                {/* Duration & Allergies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Duration of Symptoms</label>
                    <select
                      value={symptomDuration}
                      onChange={e => setSymptomDuration(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#011817] border border-teal-800 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      <option>Less than 24 Hours (Acute)</option>
                      <option>3 to 7 Days</option>
                      <option>2 to 4 Weeks</option>
                      <option>Chronic (&gt; 3 Months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Known Drug Allergies</label>
                    <input
                      type="text"
                      value={allergyNotes}
                      onChange={e => setAllergyNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#011817] border border-teal-800 text-white text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="px-5 py-3 rounded-xl bg-[#011b1a] text-teal-300 text-xs font-bold border border-teal-800"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Next: Final Slot & Confirm →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SLOT SELECTION & INTAKE CONFIRMATION */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-teal-900/60">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    Lock In Patient Care Slot
                  </h3>
                  <p className="text-xs text-teal-200/70">Review clinical intake summary and confirm appointment hold.</p>
                </div>

                {/* Slot grid */}
                <div>
                  <label className="block text-xs font-mono text-teal-300 uppercase mb-2">
                    Available Consult Windows
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Tomorrow 10:15 AM', 'Tomorrow 2:00 PM', 'Thursday 9:30 AM', 'Thursday 1:30 PM', 'Friday 11:00 AM', 'Friday 4:15 PM'].map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                          selectedTime === slot
                            ? 'bg-teal-500 text-teal-950 border-teal-400 shadow-md font-extrabold'
                            : 'bg-[#011817] text-teal-200 border-teal-900/60 hover:border-teal-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-[#011716] border border-teal-800 text-xs space-y-2">
                  <div className="flex justify-between text-teal-200/80">
                    <span>Attending Physician:</span>
                    <span className="font-bold text-white">{currentDoctor.name} ({currentDoctor.specialty})</span>
                  </div>
                  <div className="flex justify-between text-teal-200/80">
                    <span>Consultation Mode:</span>
                    <span className="font-mono text-emerald-400 font-bold uppercase">{visitType}</span>
                  </div>
                  <div className="flex justify-between text-teal-200/80">
                    <span>Insurance Pre-Check:</span>
                    <span className="text-white">{insuranceProvider} (Est. Co-Pay ${estimatedCopay})</span>
                  </div>
                  <div className="flex justify-between text-teal-200/80">
                    <span>Symptom Triage:</span>
                    <span className="text-white">{chiefComplaint} (Pain Lvl {painLevel})</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="px-5 py-3 rounded-xl bg-[#011b1a] text-teal-300 text-xs font-bold border border-teal-800"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleFinalizeBooking}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-teal-950 font-extrabold text-xs uppercase tracking-wider shadow-lg"
                  >
                    Confirm Patient Appointment ({selectedTime}) →
                  </button>
                </div>

                {confirmedBooking && (
                  <div className="mt-6 p-5 rounded-2xl bg-teal-950 border border-emerald-400/50 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-emerald-300 font-bold">
                      <span>🩺 Patient Intake Ticket #MED-9024 Confirmed</span>
                      <button onClick={() => setConfirmedBooking(false)} className="text-teal-400 hover:text-white">✕</button>
                    </div>
                    <p className="text-teal-100 leading-relaxed">
                      Your intake chart has been transferred to <strong>{currentDoctor.name}</strong>. Calendar invitation and secure SMS patient check-in link have been generated.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* PRACTICE ONBOARDING & SETUP INQUIRY */}
      <section id="clinic-inquiry" className="py-20 bg-[#032524]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#021d1c] border border-teal-700/50 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Practice & Health System Deployment
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Outfit'] mt-3">
                Deploy MediSlot in Your Clinic
              </h2>
              <p className="text-xs sm:text-sm text-teal-200/70 mt-2">
                Integrate real-time insurance eligibility checks, eliminate manual waiting-room clipboard intake, and seamlessly connect to Epic, Athena, or Cerner.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-teal-950/40 border border-teal-500/50 text-center space-y-3">
                <span className="text-4xl">🩺</span>
                <h3 className="text-xl font-bold text-teal-200 font-['Outfit']">Clinical Pilot Request Received!</h3>
                <p className="text-xs text-teal-200/70 max-w-md mx-auto">
                  Our healthcare compliance lead will reach out to <strong>{inquiryData.email}</strong> to schedule an EHR sandbox demonstration.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-teal-500 text-teal-950 text-xs font-bold"
                >
                  Submit Another Practice
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Clinic inquiry submitted!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Clinic / Practice Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Beacon Health Medical Group"
                      value={inquiryData.clinicName}
                      onChange={e => setInquiryData({ ...inquiryData, clinicName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011413] border border-teal-900 text-white text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Medical Director / Clinic Lead</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Arthur Vance"
                      value={inquiryData.directorName}
                      onChange={e => setInquiryData({ ...inquiryData, directorName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011413] border border-teal-900 text-white text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Official Medical Email</label>
                    <input
                      required
                      type="email"
                      placeholder="arthur@beaconhealth.org"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011413] border border-teal-900 text-white text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Physician Practice Size</label>
                    <select
                      value={inquiryData.physiciansCount}
                      onChange={e => setInquiryData({ ...inquiryData, physiciansCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011413] border border-teal-900 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      <option>1-4 Physicians (Private Practice)</option>
                      <option>5-15 Physicians (Specialty Clinic)</option>
                      <option>15-50 Physicians (Multi-Specialty Center)</option>
                      <option>Hospital Network / Health System</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-teal-300 uppercase mb-1">Current EHR & Triage Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="We use AthenaHealth and want automated insurance pre-checks and mobile triage questionnaires for our dermatology patients..."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#011413] border border-teal-900 text-white text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-teal-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl"
                >
                  Request HIPAA Clinical Platform Consultation
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE CLINIC FOOTER */}
      <footer className="py-12 bg-[#011413] border-t border-teal-950 text-teal-300/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-teal-950 font-bold">
                🩺
              </div>
              <div>
                <span className="font-bold text-white font-['Outfit'] text-sm">MEDISLOT</span>
                <span className="text-teal-400/50 ml-2">© 2026 MediSlot Healthcare Systems Inc.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#intake-flow" className="hover:text-teal-200 transition-colors">Patient Intake</a>
              <a href="#clinic-inquiry" className="hover:text-teal-200 transition-colors">Practice Setup</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400/50 hover:text-teal-300 transition-colors text-xs font-mono"
              >
                Built by WeBuild.YouSell →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
