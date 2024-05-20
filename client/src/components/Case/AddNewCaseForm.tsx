import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IP } from "../utils/IP";

const AddNewCaseForm = () => {
  //Handle Page Number and next Page
  const [pageNumber, setPageNumber] = useState<number>();
  const [progressWidth, setFormCompletePer] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNextBtn = () => {
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
      navigate(`/case/new-case/${pageNumber + 1}`);
    }
  };
  const handlePrevBtn = () => {
    if (pageNumber && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      navigate(`/case/new-case/${pageNumber - 1}`);
    }
  };
  useEffect(() => {
    if (pageNumber) setFormCompletePer((pageNumber / 8) * 100);
  }, [pageNumber]);
  useEffect(() => {
    if (id === undefined) {
      setPageNumber(1);
    } else {
      setPageNumber(Number(id));
    }
  }, [id]);
  //Handle Page Number 1 Inputs
  const [childInformationInput,setChildInformationInput] = useState({
    childNameInput:'',
    ageInput:'',
    dobInput:'',
    genderInput:'',
    guradianInput:'',
    educationalBgInput:'',
    addressInput:'',
  })
  const childInformationInputChange =(e:any)=>{
    const { name, value } = e.target;
    setChildInformationInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const [selectedGender,setSelectedGender] = useState<string>('select');
  const handleGenderChange =(e:any)=>{
    setSelectedGender(e.target.value);
  }
  const [selectedState,setSelectedState] = useState<string>('select');
  const handleStateChange =(e:any)=>{
    setSelectedState(e.target.value);
  }
  const [selectedCity,setSelectedCity] = useState<string>('select');
  const handleCityChange =(e:any)=>{
    setSelectedCity(e.target.value);
  }
  const [selectedTaluk,setSelectedTaluk] = useState<string>('select');
  const handleTalukChange =(e:any)=>{
    setSelectedTaluk(e.target.value);
  }
  const [selectedVillage,setSelectedVillage] = useState<string>('select');
  const handleVillageChange =(e:any)=>{
    setSelectedVillage(e.target.value);
  }
  const saveChildInformation=()=>{
    // alert(addressInput.current?.value);
    // alert(selectedVillage)
  }
  const validateChildInformation = () => {
    const { childNameInput, ageInput, dobInput,genderInput, guradianInput, educationalBgInput, addressInput} = childInformationInput;
    if (
      !childNameInput ||
      !ageInput ||
      !dobInput ||
      !genderInput||
      !guradianInput ||
      !educationalBgInput ||
      !addressInput ||
      selectedCaseType === "select" ||
      selectedCasePriority === "select" ||
      selectedCaseStatus === "select"
     
) {
      alert("Please fill out all fields and select options in child information.");
      return false;
    }
    return true;
  };

  const handleChildInformation = () => {
    if (validateChildInformation()) {
      alert("child information Saved!");
      handleNextBtn();
    }
  };

  //Handle Page Number 2 Inputs
  const [caseDetailsInput,setCaseDetailsInput] = useState({
    caseIdInput:'',
    caseTitleInput:'',
    caseDescriptionInput:'',
    courtNameInput:'',
    jurisdictionInput:'',
  })
  const caseDetailsInputChange =(e:any)=>{
    const { name, value } = e.target;
    setCaseDetailsInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const [selectedCaseType,setSelectedCaseType] = useState<string>('select');
  const handleCaseTypeChange =(e:any)=>{
    setSelectedCaseType(e.target.value);
  }
  const [selectedCasePriority,setSelectedCasePriority] = useState<string>('select');
  const handleCasePriorityChange =(e:any)=>{
    setSelectedCasePriority(e.target.value);
  }
  const [selectedCaseStatus,setSelectedCaseStatus] = useState<string>('select');
  const handleCaseStatusChange =(e:any)=>{
    setSelectedCaseStatus(e.target.value);
  }
  // const handleCaseDetails =() =>{
    // alert(caseIdInput.current?.value);
  //   alert(selectedCaseStatus)
  // }

  const validateCaseDetails = () => {
    const { caseIdInput, caseTitleInput, caseDescriptionInput, courtNameInput, jurisdictionInput } = caseDetailsInput;
    if (
      !caseIdInput ||
      !caseTitleInput ||
      !caseDescriptionInput ||
      !courtNameInput ||
      !jurisdictionInput ||
      selectedCaseType === "select" ||
      selectedCasePriority === "select" ||
      selectedCaseStatus === "select"
    ) {
      alert("Please fill out all fields and select options in Case Details.");
      return false;
    }
    return true;
  };

  const handleCaseDetails = () => {
    if (validateCaseDetails()) {
      alert("Case Details Saved!");
      handleNextBtn();
    }
  };
  //Handle Page Number 3 Inputs
  const [legalRepresentationInput,setLegalRepresentationInput] = useState({
    lawyerInput:'',
    petitionerInput:'',
    respondentInput:'',
    legalAidDetailsInput:'',
  })
  const LegalRepresentationInputChange =(e:any)=>{
    const { name, value } = e.target;
    setLegalRepresentationInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  // const handleLegalRepresentation =() =>{
    // alert(petitionerInput.current?.value);
  // }
  const validateLegalRepresentation = () => {
    const { lawyerInput, petitionerInput, respondentInput, legalAidDetailsInput } = legalRepresentationInput;
    if (!lawyerInput || !petitionerInput || !respondentInput || !legalAidDetailsInput) {
      alert("Please fill out all fields in Legal Representation.");
      return false;
    }
    return true;
  };

  const handleLegalRepresentation = () => {
    if (validateLegalRepresentation()) {
      alert("Legal Representation Saved!");
      handleNextBtn();
    }
  };
  //Handle Page Number 4 Inputs
  const [protectionOrderPdf, setProtectionOrderPdf] = useState<File | null>(null);
  const handleProtectioOrdersPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProtectionOrderPdf(e.target.files[0]);
    }
  };
  const [placementOrderPdf, setPlacementOrderPdf] = useState<File | null>(null);
  const handlePlacementOrdersPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPlacementOrderPdf(e.target.files[0]);
    }
  };
  const [restrainingOrderPdf, setRestrainingOrderPdf] = useState<File | null>(null);
  const handleRestrainingOrdersPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setRestrainingOrderPdf(e.target.files[0]);
    }
  };
  // const handleChildProtectionMeasures=()=>{
  //   console.log(protectionOrderPdf);
  //   console.log(placementOrderPdf);
  //   console.log(restrainingOrderPdf);
  // }
  const validateChildProtectionMeasures = () => {
    if (!protectionOrderPdf || !placementOrderPdf || !restrainingOrderPdf) {
      alert("Please upload all required PDFs in Child Protection Measures.");
      return false;
    }
    return true;
  };

  const handleChildProtectionMeasures = () => {
    if (validateChildProtectionMeasures()) {
      alert("Child Protection Measures Saved!");
      handleNextBtn();
    }
  };
  //Handle Page Number 5 Inputs
  const [medicalReportsPdf, setMedicalReportsPdf] = useState<File | null>(null);
  const handleMedicalReportsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMedicalReportsPdf(e.target.files[0]);
    }
  };
  const [witnessStatementsPdf, setWitnessStatementsPdf] = useState<File | null>(null);
  const handleWitnessStatementsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setWitnessStatementsPdf(e.target.files[0]);
    }
  };
  const [policeReportsPdf, setPoliceReportsPdf] = useState<File | null>(null);
  const handlePoliceReportsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPoliceReportsPdf(e.target.files[0]);
    }
  };
  const [photographsPdf, setPhotographsPdf] = useState<File | null>(null);
  const handlePhotographsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhotographsPdf(e.target.files[0]);
    }
  };
  const [testimonyPdf, setTestimonyPdf] = useState<File | null>(null);
  const handleTestimonyPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setTestimonyPdf(e.target.files[0]);
    }
  };
  const [schoolRecordsPdf, setSchoolRecordsPdf] = useState<File | null>(null);
  const handleSchoolRecordsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSchoolRecordsPdf(e.target.files[0]);
    }
  };
  // const handleEvidence=() =>{
  //   console.log(medicalReportsPdf);
  //   console.log(witnessStatementsPdf);
  //   console.log(policeReportsPdf);
  //   console.log(photographsPdf);
  //   console.log(testimonyPdf);
  //   console.log(schoolRecordsPdf);
  // }
  const validateEvidence = () => {
    if (
      !medicalReportsPdf ||
      !witnessStatementsPdf ||
      !policeReportsPdf ||
      !photographsPdf ||
      !testimonyPdf ||
      !schoolRecordsPdf
    ) {
      alert("Please upload all required PDFs in Evidence and Documentation.");
      return false;
    }
    return true;
  };

  const handleEvidence = () => {
    if (validateEvidence()) {
      alert("Evidence and Documentation Saved!");
      handleNextBtn();
    }
  };

  //Handle Page Number 6 Inputs

  const [caseManagementInput,setCaseManagementInput] = useState({
    caseTimelineInput:'',
    nextHearingDateInput:'',
    nextStepsandActionInput:'',
    taskAssignmentInput:'',
    caseNotesandUpdatesInput:'',
  })
  const CaseManagementInputChange =(e:any)=>{
    const { name, value } = e.target;
    setCaseManagementInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  // const handleCaseManagement=() =>{

  // }
  const validatecaseManagement = () => {
    const { caseTimelineInput, nextHearingDateInput, nextStepsandActionInput, taskAssignmentInput, caseNotesandUpdatesInput } = caseManagementInput;
    if (
      !caseTimelineInput ||
      !nextHearingDateInput ||
      !nextStepsandActionInput ||
      !taskAssignmentInput ||
      !caseNotesandUpdatesInput ||
      selectedCaseType === "select" ||
      selectedCasePriority === "select" ||
      selectedCaseStatus === "select"
    ) {
      alert("Please fill out all fields and select options in Case Management.");
      return false;
    }
    return true;
  };

  const handleCaseManagement = () => {
    if (validatecaseManagement()) {
      alert("Case Details Saved!");
      handleNextBtn();
    }
  };
  //Handle Page Number 7 Inputs
  const [courtOrdersPdf, setCourtOrdersPdf] = useState<File | null>(null);
  const handleCourtOrdersPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCourtOrdersPdf(e.target.files[0]);
    }
  };
  const [judgementsPdf, setJudgementsPdf] = useState<File | null>(null);
  const handleJudgementsPdfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setJudgementsPdf(e.target.files[0]);
    }
  };
  const courtOrdersAndJudgements = ()=>{
    console.log(courtOrdersPdf)
    console.log(judgementsPdf)
  }
  const validatecourtOrdersAndJudgements = () => {
    if (!courtOrdersPdf || !judgementsPdf) {
      alert("Please upload all required PDFs in Court Order and Judgements.");
      return false;
    }
    return true;
  };

  const handlecourtOrdersAndJudgements = () => {
    if (validatecourtOrdersAndJudgements()) {
      alert("Court Order and Judgements Saved!");
      handleNextBtn();
    }
  };
  
  //Handle Page Number 8 Inputs
  const postCaseMonitoringInput = useRef<HTMLInputElement>(null);
  const followUpActionInput = useRef<HTMLInputElement>(null);
  
  const handleSubmitBtn =() =>{
    
    const formData = new FormData();
    
    //Page Number 1
    const ChildInformationData ={
      ...childInformationInput,
      selectedGender:selectedGender,
      selectedState:selectedState,
      selectedCity:selectedCity,
      selectedTaluk:selectedTaluk,
      selectedVillage:selectedVillage,
    }
    formData.append('ChildInformation', JSON.stringify(ChildInformationData));
    //Page Number 2
    const CaseDetailsData={
      ...caseDetailsInput,
      selectedCaseType:selectedCaseType,
      selectedCasePriority:selectedCasePriority,
      selectedCaseStatus:selectedCaseStatus
    }
    formData.append('CaseDetails', JSON.stringify(CaseDetailsData));
    //Page Number 3
    formData.append('LegalRepresentation', JSON.stringify(legalRepresentationInput));
    //Page Number 4
    if (protectionOrderPdf) formData.append('protectionOrderPdf', protectionOrderPdf);
    if (placementOrderPdf) formData.append('placementOrderPdf', placementOrderPdf);
    if (restrainingOrderPdf) formData.append('restrainingOrderPdf', restrainingOrderPdf);
    //Page Number 5
    if (medicalReportsPdf) formData.append('medicalReportsPdf', medicalReportsPdf);
    if (witnessStatementsPdf) formData.append('witnessStatementsPdf', witnessStatementsPdf);
    if (policeReportsPdf) formData.append('policeReportsPdf', policeReportsPdf);
    if (photographsPdf) formData.append('photographsPdf', photographsPdf);
    if (testimonyPdf) formData.append('testimonyPdf', testimonyPdf);
    if (schoolRecordsPdf) formData.append('schoolRecordsPdf', schoolRecordsPdf);
    //Page Number 6
    formData.append('CaseManagement', JSON.stringify(caseManagementInput));
    //Page Number 7
    if (courtOrdersPdf) formData.append('courtOrdersPdf', courtOrdersPdf);
    if (judgementsPdf) formData.append('judgementsPdf', judgementsPdf);
    //Page Number 8
    const MonitoringFollowUpData ={
      postCaseMonitoringInput:postCaseMonitoringInput.current?.value,
      followUpActionInput:followUpActionInput.current?.value,
    }
    formData.append('MonitoringFollowUp', JSON.stringify(MonitoringFollowUpData));
    axios.post(IP.API +'addNewCase', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
  }
  return (
    <>
      <div
        className="progress"
        style={{
          margin: "5px 0px",
          height: "2px",
          position: "sticky",
          top: 0,
          zIndex: "5",
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressWidth}%` }} // Set the width dynamically using style attribute
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      {(Number(pageNumber) === 1 || pageNumber === undefined) && (
        <div>
          <h3>Child Information</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="childNameInput"
                    onChange={childInformationInputChange}
                    value={childInformationInput.childNameInput}
                  />
                  <label htmlFor="floatingInput">Child's Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    name="ageInput"
                    onChange={childInformationInputChange}
                    value={childInformationInput.ageInput}
                  />
                  <label htmlFor="floatingInput2">Age</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                    name="dobInput"
                    onChange={childInformationInputChange}
                    value={childInformationInput.dobInput}
                  />
                  <label htmlFor="floatingInput3">Date of Birth</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect0"
                    aria-label="Floating label select example"
                    value={selectedGender}
                    onChange={handleGenderChange}
                  >
                    <option value="select">--- Select Gender ---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label htmlFor="floatingSelect0">Gender</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput5"
                    placeholder="name@example.com"
                    name="guradianInput"
                    onChange={childInformationInputChange}
                    value={childInformationInput.guradianInput}
                  />
                  <label htmlFor="floatingInput5">Guradian / Caretaker</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput6"
                    placeholder="name@example.com"
                    name="educationalBgInput"                    
                    onChange={childInformationInputChange}
                    value={childInformationInput.educationalBgInput}
                  />
                  <label htmlFor="floatingInput6">Educational Background</label>
                </div>
              </div>
              <div className=" col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                    name="addressInput"
                    onChange={childInformationInputChange}
                    value={childInformationInput.addressInput}
                  />
                  <label htmlFor="floatingInput7">Address </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="select">--- Select State ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">State</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect2"
                    aria-label="Floating label select example"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="select">--- Select City ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect2">City</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                    value={selectedTaluk}
                    onChange={handleTalukChange}
                  >
                    <option value="select">--- Select Taluk ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect3">Taluk</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                    value={selectedVillage}
                    onChange={handleVillageChange}
                  >
                    <option value="select">--- Select Village ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect3">Village</label>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleChildInformation}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 2 && (
        <div>
          <h3>Case Details</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="caseIdInput"
                    onChange={caseDetailsInputChange}
                    value={caseDetailsInput.caseIdInput}
                  />
                  <label htmlFor="floatingInput">Case ID</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    name="caseTitleInput"
                    onChange={caseDetailsInputChange}
                    value={caseDetailsInput.caseTitleInput}
                  />
                  <label htmlFor="floatingInput2">Case Title</label>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect0"
                    aria-label="Floating label select example"
                    value={selectedCaseType}
                    onChange={handleCaseTypeChange}
                  >
                    <option value="select">--- Select Case Type ---</option>
                    <option value="Child Protection">Child Protection</option>
                    <option value="Child Custody">Child Custody</option>
                    <option value="Child Labour">Child Labour</option>
                    <option value="Child Abuse">Child Abuse</option>
                  </select>
                  <label htmlFor="floatingSelect0">Case Type</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect01"
                    aria-label="Floating label select example"
                    value={selectedCasePriority}
                    onChange={handleCasePriorityChange}
                  >
                    <option value="select">--- Select Case Priority ---</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <label htmlFor="floatingSelect01">Case Priority</label>
                </div>
              </div>

              <div className=" col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                    name="caseDescriptionInput"
                    onChange={caseDetailsInputChange}
                    value={caseDetailsInput.caseDescriptionInput}
                  />
                  <label htmlFor="floatingInput7">Case Description </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput6"
                    placeholder="name@example.com"
                    name="courtNameInput"
                    onChange={caseDetailsInputChange}
                    value={caseDetailsInput.courtNameInput}
                  />
                  <label htmlFor="floatingInput6">Court Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                    name="jurisdictionInput"
                    onChange={caseDetailsInputChange}
                    value={caseDetailsInput.jurisdictionInput}
                  />
                  <label htmlFor="floatingInput7">Jurisdiction</label>
                </div>
              </div>
              <div className=" col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                    value={selectedCaseStatus}
                    onChange={handleCaseStatusChange}
                  >
                    <option value="select">--- Select Case Status ---</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <label htmlFor="floatingSelect3">Case Status</label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleCaseDetails}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 3 && (
        <div>
          <h3>Legal Representation</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="lawyerInput"
                    onChange={LegalRepresentationInputChange}
                    value={legalRepresentationInput.lawyerInput}
                  />
                  <label htmlFor="floatingInput">Lawyer</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    name="petitionerInput"
                    onChange={LegalRepresentationInputChange}
                    value={legalRepresentationInput.petitionerInput}
                  />
                  <label htmlFor="floatingInput2">Petitioner</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                    name="respondentInput"
                    onChange={LegalRepresentationInputChange}
                    value={legalRepresentationInput.respondentInput}
                  />
                  <label htmlFor="floatingInput3">Respondent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                    name="legalAidDetailsInput"
                    onChange={LegalRepresentationInputChange}
                    value={legalRepresentationInput.legalAidDetailsInput}
                  />
                  <label htmlFor="floatingInput4">
                    Legal Aid Details (if appl)
                  </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleLegalRepresentation}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 4 && (
        <div>
          <h3>Child Protection Measures</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleProtectioOrdersPdfChange}
                  />
                  <label htmlFor="floatingInput">Protection Orders: <strong>{protectionOrderPdf?.name}</strong></label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handlePlacementOrdersPdfChange}
                  />
                  <label htmlFor="floatingInput2">Placement Orders: <strong>{placementOrderPdf?.name}</strong> </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleRestrainingOrdersPdfChange}
                  />
                  <label htmlFor="floatingInput3">Restraining Orders: <strong>{restrainingOrderPdf?.name}</strong></label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleChildProtectionMeasures}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 5 && (
        <div>
          <h3>Evidence and Documentation</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleMedicalReportsPdfChange}
                  />
                  <label htmlFor="floatingInput">Medical Reports: <strong>{medicalReportsPdf?.name}</strong></label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleWitnessStatementsPdfChange}
                  />
                  <label htmlFor="floatingInput2">Witness Statements: <strong>{witnessStatementsPdf?.name}</strong></label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput42"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handlePoliceReportsPdfChange}
                  />
                  <label htmlFor="floatingInput42">Police Reports: <strong>{policeReportsPdf?.name}</strong></label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handlePhotographsPdfChange}
                  />
                  <label htmlFor="floatingInput3">
                    Photographs or Evidence: <strong>{photographsPdf?.name}</strong>
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleTestimonyPdfChange}
                  />
                  <label htmlFor="floatingInput4"> Child's Testimony: <strong>{testimonyPdf?.name}</strong> </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput5"
                    placeholder="name@example.com"
                    accept="application/pdf"
                    onChange={handleSchoolRecordsPdfChange}
                  />
                  <label htmlFor="floatingInput5"> School Records: <strong>{schoolRecordsPdf?.name}</strong> </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleEvidence}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 6 && (
        <div>
          <h3>Case Management</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="caseTimelineInput"
                    onChange={CaseManagementInputChange}
                    value={caseManagementInput.caseTimelineInput}
                  />
                  <label htmlFor="floatingInput">Case Timeline</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    onChange={CaseManagementInputChange}
                    value={caseManagementInput.nextHearingDateInput}
                    name="nextHearingDateInput"
                  />
                  <label htmlFor="floatingInput2">Next Hearing Date</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput42"
                    placeholder="name@example.com"
                    onChange={CaseManagementInputChange}
                    value={caseManagementInput.nextStepsandActionInput}
                    name="nextStepsandActionInput"
                  />
                  <label htmlFor="floatingInput42">Next Steps and Action</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                    onChange={CaseManagementInputChange}
                    value={caseManagementInput.taskAssignmentInput}
                    name="taskAssignmentInput"
                  />
                  <label htmlFor="floatingInput3">Task Assignment</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                    onChange={CaseManagementInputChange}
                    value={caseManagementInput.caseNotesandUpdatesInput}
                    name="caseNotesandUpdatesInput"
                  />
                  <label htmlFor="floatingInput4">Case Notes & Updates </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleCaseManagement}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 7 && (
        <div>
          <h3>Court Orders & Judgements</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={handleCourtOrdersPdfChange}
                  />
                  <label htmlFor="floatingInput">Court Orders: <strong>{courtOrdersPdf?.name}</strong></label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    onChange={handleJudgementsPdfChange}
                  />
                  <label htmlFor="floatingInput2">Judgements: <strong>{judgementsPdf?.name}</strong></label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handlecourtOrdersAndJudgements}> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 8 && (
        <div>
          <h3>Monitoring and Follow-up</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    ref={postCaseMonitoringInput}
                  />
                  <label htmlFor="floatingInput">Post case Monitoring</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                    ref={followUpActionInput}
                  />
                  <label htmlFor="floatingInput2">Follow-up Action </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleSubmitBtn}> Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddNewCaseForm;
