import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IP } from "../utils/IP";

interface CaseDetailsMetaData{
  address:string,
  age: number,
  caseDescription:string,
  caseId:string,
  caseIdInput:string,
  caseNotesandUpdatesInput:string,
  casePriority:string,
  caseStatus:string,
  caseTimeline:Date,
  caseTitle:string,
  caseType:string,
  childName:string,
  city: number,
  courtName:number,
  createdDate: Date
  dob:Date,
  educationalBg:string
  followUpActionInput:string
  gender:string,
  guradian:string,
  jurisdiction:string,
  lawyer:string,
  legalAidDetails:string,
  nextHearingDate:Date,
  nextStepsandAction:string,
  petitioner:string,
  postCaseMonitoringInput:string,
  respondent:string,
  state:number,
  taluk:number,
  taskAssignment:string,
  village:number
}

const CaseDetails = () => {
  const { id } = useParams();
  const [editId, setEditId] = useState<number>(0);
  const handlEdit = (id: number) => {
    if (id === editId) {
      setEditId(0);
    } else {
      setEditId(id);
    }
  };
  //Handle Page Number 1 Inputs
  const [childInformationInput,setChildInformationInput] = useState({
    childNameInput:'',
    ageInput:'',
    dobInput:'',
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
  const [selectedGender,setSelectedGender] = useState<string>('male');
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
    const ChildInformationData ={
      ...childInformationInput,
      selectedGender:selectedGender,
      selectedState:selectedState,
      selectedCity:selectedCity,
      selectedTaluk:selectedTaluk,
      selectedVillage:selectedVillage,
    }
    axios.put(IP.API +'case/childInformation/'+id, ChildInformationData).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
  const handleCaseDetails =() =>{
    // alert(caseIdInput.current?.value);
    // alert(selectedCaseStatus)
    const CaseDetailsData={
      ...caseDetailsInput,
      selectedCaseType:selectedCaseType,
      selectedCasePriority:selectedCasePriority,
      selectedCaseStatus:selectedCaseStatus
    }
    axios.put(IP.API +'case/caseDetails/'+id, CaseDetailsData).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
  const handleLegalRepresentation =() =>{
    // alert(legalRepresentationInput.lawyerInput);
    axios.put(IP.API +'case/legal/'+id, legalRepresentationInput).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
  const handleChildProtectionMeasures=()=>{
    const formData = new FormData();
    if (protectionOrderPdf) formData.append('protectionOrderPdf', protectionOrderPdf);
    if (placementOrderPdf) formData.append('placementOrderPdf', placementOrderPdf);
    if (restrainingOrderPdf) formData.append('restrainingOrderPdf', restrainingOrderPdf);
    const prevPdfId ={
      protectionOrderPdf:'9dc91a28-5b7a-46a6-909e-a93cadd0d740',
      placementOrderPdf:'',
      restrainingOrderPdf:'9ab43b2c-8023-42c5-b878-2e7a5fb24168'
    }
    formData.append('prevPdfId', JSON.stringify(prevPdfId));
    axios.put(IP.API +'case/protectionMeasures/'+ id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
  const handleEvidence=() =>{
    const formData = new FormData();
    if (medicalReportsPdf) formData.append('medicalReportsPdf', medicalReportsPdf);
    if (witnessStatementsPdf) formData.append('witnessStatementsPdf', witnessStatementsPdf);
    if (policeReportsPdf) formData.append('policeReportsPdf', policeReportsPdf);
    if (photographsPdf) formData.append('photographsPdf', photographsPdf);
    if (testimonyPdf) formData.append('testimonyPdf', testimonyPdf);
    if (schoolRecordsPdf) formData.append('schoolRecordsPdf', schoolRecordsPdf);
    const prevPdfId ={
      medicalReportsPdf:'',
      witnessStatementsPdf:'',
      policeReportsPdf:'',
      photographsPdf:'',
      testimonyPdf:'',
      schoolRecordsPdf:'',
    }
    formData.append('prevPdfId', JSON.stringify(prevPdfId));
    axios.put(IP.API +'case/evidence/'+ id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
  const handleCaseManagement=() =>{
    // alert(caseManagementInput.caseNotesandUpdatesInput)
    axios.put(IP.API +'case/caseManagement/'+id, caseManagementInput).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
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
    const formData = new FormData();
    if (courtOrdersPdf) formData.append('courtOrdersPdf', courtOrdersPdf);
    if (judgementsPdf) formData.append('judgementsPdf', judgementsPdf);
    const prevPdfId ={
      courtOrdersPdf:'',
      judgementsPdf:'',
    }
    formData.append('prevPdfId', JSON.stringify(prevPdfId));
    axios.put(IP.API +'case/judgements/'+ id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  //Handle Page Number 8 Inputs
  const postCaseMonitoringInput = useRef<HTMLInputElement>(null);
  const followUpActionInput = useRef<HTMLInputElement>(null);
  const handleMonitoring = () =>{
    // alert(postCaseMonitoringInput.current?.value);
    const data ={
      postCaseMonitoringInput:postCaseMonitoringInput.current?.value,
      followUpActionInput:followUpActionInput.current?.value
    }
    axios.put(IP.API +'case/follow-up/'+id, data).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  const getCaseDetailsInfo =() =>{
    axios.get(IP.API+'case/'+id).then(res=>{
      const data:CaseDetailsMetaData = res.data[0];
      setChildInformationInput({
        childNameInput:data.childName,
        ageInput:data.age.toString(),
        dobInput:'2024-05-10',
        guradianInput:data.guradian,
        educationalBgInput:data.educationalBg,
        addressInput:data.address
      });
    }).catch(error=>{
      console.error(error);
    })
  }
  useEffect(()=>{
    getCaseDetailsInfo()
  },[]);
  return (
    <>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 1 ? "green" : "black"}` }}>
            Child Information
          </h6>
          <button className="btn" onClick={() => handlEdit(1)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="childNameInput"
                  value={childInformationInput.childNameInput}
                  disabled={editId === 1 ? false : true}
                  onChange={childInformationInputChange}
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
                  value={childInformationInput.ageInput}
                  disabled={editId === 1 ? false : true}
                  onChange={childInformationInputChange}
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
                  value={childInformationInput.dobInput}
                  disabled={editId === 1 ? false : true}
                  onChange={childInformationInputChange}
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
                  disabled={editId === 1 ? false : true}
                  value={selectedGender}
                  onChange={handleGenderChange}
                >
                  <option value="select">--- Select Gender ---</option>
                  <option value="male">
                    Male
                  </option>
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
                  disabled={editId === 1 ? false : true}
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
                  disabled={editId === 1 ? false : true}
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
                  disabled={editId === 1 ? false : true}
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
                  disabled={editId === 1 ? false : true}
                  value={selectedState}
                    onChange={handleStateChange}
                >
                  <option value="select">--- Select State ---</option>
                  <option value="karnataka">
                    karnataka
                  </option>
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
                  disabled={editId === 1 ? false : true}
                  value={selectedCity}
                    onChange={handleCityChange}
                >
                  <option value="select">--- Select City ---</option>
                  <option value="Bagalkot" >
                    Bagalkot
                  </option>
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
                  disabled={editId === 1 ? false : true}
                  value={selectedTaluk}
                    onChange={handleTalukChange}
                >
                  <option value="select">--- Select Taluk ---</option>
                  <option value="Badami">
                    Badami
                  </option>
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
                  disabled={editId === 1 ? false : true}
                  value={selectedVillage}
                    onChange={handleVillageChange}
                >
                  <option value="select">--- Select Village ---</option>
                  <option value="Bandakeri">
                    Bandakeri
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlFor="floatingSelect3">Village</label>
              </div>
            </div>
            <div className="col-12">
              {editId === 1 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={saveChildInformation} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 2 ? "green" : "black"}` }}>
            Case Details
          </h6>
          <button className="btn" onClick={() => handlEdit(2)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={caseDetailsInput.caseIdInput}
                  disabled
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
                  disabled={editId === 2 ? false : true}
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
                  disabled={editId === 2 ? false : true}
                  value={selectedCaseType}
                    onChange={handleCaseTypeChange}
                >
                  <option value="select">--- Select Case Type ---</option>
                  <option value="Child Protection">
                    Child Protection
                  </option>
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
                  disabled={editId === 2 ? false : true}
                  value={selectedCasePriority}
                    onChange={handleCasePriorityChange}
                >
                  <option value="select">--- Select Case Priority ---</option>
                  <option value="High" >
                    High
                  </option>
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
                  disabled={editId === 2 ? false : true}
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
                  disabled={editId === 2 ? false : true}

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
                  disabled={editId === 2 ? false : true}
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
                  disabled={editId === 2 ? false : true}
                  value={selectedCaseStatus}
                    onChange={handleCaseStatusChange}
                >
                  <option value="select">--- Select Case Status ---</option>
                  <option value="Open">
                    Open
                  </option>
                  <option value="Closed">Closed</option>
                  <option value="Pending">Pending</option>
                </select>
                <label htmlFor="floatingSelect3">Case Status</label>
              </div>
            </div>
            <div className="col-12">
              {editId === 2 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleCaseDetails} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 3 ? "green" : "black"}` }}>
            Legal Representation
          </h6>
          <button className="btn" onClick={() => handlEdit(3)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
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
                  disabled={editId === 3 ? false : true}
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
                  disabled={editId === 3 ? false : true}
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
                  disabled={editId === 3 ? false : true}
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
                  disabled={editId === 3 ? false : true}
                />
                <label htmlFor="floatingInput4">
                  Legal Aid Details (if appl)
                </label>
              </div>
            </div>
            <div className="col-12">
              {editId === 3 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleLegalRepresentation} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 4 ? "green" : "black"}` }}>
            Child Protection Measures
          </h6>
          <button className="btn" onClick={() => handlEdit(4)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  disabled={editId === 4 ? false : true}
                  accept="application/pdf"
                  onChange={handleProtectioOrdersPdfChange}
                />
                <label htmlFor="floatingInput">Protection Orders</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                  disabled={editId === 4 ? false : true}
                  accept="application/pdf"
                  onChange={handlePlacementOrdersPdfChange}
                />
                <label htmlFor="floatingInput2">Placement Orders</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput3"
                  placeholder="name@example.com"
                  disabled={editId === 4 ? false : true}
                  accept="application/pdf"
                  onChange={handleRestrainingOrdersPdfChange}
                />
                <label htmlFor="floatingInput3">Restraining Ordera</label>
              </div>
            </div>
            <div className="col-12">
              {editId === 4 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleChildProtectionMeasures} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 5 ? "green" : "black"}` }}>
            Evidence and Documentation
          </h6>
          <button className="btn" onClick={() => handlEdit(5)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handleMedicalReportsPdfChange}
                />
                <label htmlFor="floatingInput">Medical Reports</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handleWitnessStatementsPdfChange}
                />
                <label htmlFor="floatingInput2">Witness Statements</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput42"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handlePoliceReportsPdfChange}
                />
                <label htmlFor="floatingInput42">Police Reports</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput3"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handlePhotographsPdfChange}
                />
                <label htmlFor="floatingInput3">Photographs or Evidence</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput4"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handleTestimonyPdfChange}
                />
                <label htmlFor="floatingInput4"> Child's Testimony </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput5"
                  placeholder="name@example.com"
                  disabled={editId === 5 ? false : true}
                  accept="application/pdf"
                  onChange={handleSchoolRecordsPdfChange}
                />
                <label htmlFor="floatingInput5"> School Records </label>
              </div>
            </div>
            <div className="col-12">
              {editId === 5 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleEvidence} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 6 ? "green" : "black"}` }}>
            Case Management
          </h6>
          <button className="btn" onClick={() => handlEdit(6)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
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
                  disabled={editId === 6 ? false : true}
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
                  disabled={editId === 6 ? false : true}
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
                  disabled={editId === 6 ? false : true}
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
                  disabled={editId === 6 ? false : true}
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
                  disabled={editId === 6 ? false : true}
                />
                <label htmlFor="floatingInput4">Case Notes & Updates </label>
              </div>
            </div>
            <div className="col-12">
              {editId === 6 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleCaseManagement} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 7 ? "green" : "black"}` }}>
            Court Orders & Judgements
          </h6>
          <button className="btn" onClick={() => handlEdit(7)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  disabled={editId === 7 ? false : true}
                  onChange={handleCourtOrdersPdfChange}
                />
                <label htmlFor="floatingInput">Court Orders</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                  disabled={editId === 7 ? false : true}
                  onChange={handleJudgementsPdfChange}
                />
                <label htmlFor="floatingInput2">Judgements</label>
              </div>
            </div>
            <div className="col-12">
              {editId === 7 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={courtOrdersAndJudgements} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"card "} style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 style={{ color: `${editId === 8 ? "green" : "black"}` }}>
            Monitoring and Follow-up
          </h6>
          <button className="btn" onClick={() => handlEdit(8)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={"HKJHKJF"}
                  ref={postCaseMonitoringInput}
                  disabled={editId === 8 ? false : true}
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
                  value={"GGDKH"}
                  ref={followUpActionInput}
                  disabled={editId === 8 ? false : true}
                />
                <label htmlFor="floatingInput2">Follow-up Action </label>
              </div>
            </div>
            <div className="col-12">
              {editId === 8 && (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <button onClick={handleMonitoring} className="btn btn-primary">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseDetails;
