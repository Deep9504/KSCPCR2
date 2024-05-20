import express from 'express';
import {createNewCase} from '../controller/createNewCase.js'
import multer from "multer";
import {addNewState,getStateList,updateState,removeState} from '../controller/masterData/address/state.js'
import {addNewDistrict,getDistrictList,updateDistrict,removeDistrict} from '../controller/masterData/address/district.js'
import {addNewCity,getCityList,updateCity,removeCity} from '../controller/masterData/address/city.js'
import {addNewTaluk,getTalukList,updateTaluk,removeTaluk} from '../controller/masterData/address/taluk.js'
import {addNewVillage,getVillageList,updateVillage,removeVillage} from '../controller/masterData/address/village.js'
import {addNewCourt,getCourtList,removeCourt,updateCourt} from '../controller/masterData/court/court.js'
import {addNewJurisdiction,getJurisdictionList,removeJurisdiction,updateJurisdiction} from '../controller/masterData/court/jurisdiction.js'
import {createNewCasePdfType} from '../PDFType/createNewCasePdfType.js'
import {updateChildInfo} from '../controller/caseInfoUpdate/updateChildInfo.js';
import {updateCaseDetails} from '../controller/caseInfoUpdate/updateCaseDetails.js';
import {updateLegalRepInfo} from '../controller/caseInfoUpdate/updateLegalRepInfo.js';
import {updateProtectionMeasuresPdf} from '../controller/caseInfoUpdate/updateProtectionMeasuresPdf.js';
import {updateEvidencePdf} from '../controller/caseInfoUpdate/updateEvidencePdf.js';
import {updateJudgementsPdf} from '../controller/caseInfoUpdate/updateJudgementsPdf.js';
import {updateCaseManagementInfo} from '../controller/caseInfoUpdate/updateCaseManagementInfo.js';
import {updatefollowUpInfo} from '../controller/caseInfoUpdate/updatefollowUpInfo.js';
import {getCaseList} from '../controller/Dashboard/getCaselist.js';
import {getCaseDetails} from '../controller/Dashboard/getCaseDetails.js';
const userRoutes = express.Router();
const fileUpload = multer({ dest: "uploads/" });
//Case Info
userRoutes.post("/addNewCase",fileUpload.fields(createNewCasePdfType),createNewCase)
//Dashboard
userRoutes.get("/caselist",getCaseList);
userRoutes.get('/case/:id',getCaseDetails);
userRoutes.put("/case/childInformation/:id",updateChildInfo)
userRoutes.put("/case/caseDetails/:id",updateCaseDetails)
userRoutes.put("/case/legal/:id",updateLegalRepInfo)
userRoutes.put("/case/caseManagement/:id",updateCaseManagementInfo)
userRoutes.put("/case/follow-up/:id",updatefollowUpInfo)
userRoutes.put("/case/protectionMeasures/:id",fileUpload.fields(createNewCasePdfType),updateProtectionMeasuresPdf)
userRoutes.put("/case/evidence/:id",fileUpload.fields(createNewCasePdfType),updateEvidencePdf)
userRoutes.put("/case/judgements/:id",fileUpload.fields(createNewCasePdfType),updateJudgementsPdf)
//State
userRoutes.get("/state",getStateList);
userRoutes.post("/addNewState",addNewState);
userRoutes.put("/state/:id",updateState);
userRoutes.delete("/state/:id",removeState);
//District
userRoutes.get("/district",getDistrictList);
userRoutes.post("/addNewDistrict",addNewDistrict);
userRoutes.put("/district/:id",updateDistrict);
userRoutes.delete("/district/:id",removeDistrict);
//City
userRoutes.get("/city",getCityList);
userRoutes.post("/addNewCity",addNewCity);
userRoutes.put("/city/:id",updateCity);
userRoutes.delete("/city/:id",removeCity);
//Taluk
userRoutes.get("/taluk",getTalukList);
userRoutes.post("/addNewTaluk",addNewTaluk);
userRoutes.put("/taluk/:id",updateTaluk);
userRoutes.delete("/taluk/:id",removeTaluk);
//Village
userRoutes.get("/village",getVillageList);
userRoutes.post("/addNewVillage",addNewVillage);
userRoutes.put("/village/:id",updateVillage);
userRoutes.delete("/village/:id",removeVillage);
//Court
userRoutes.get("/Court",getCourtList);
userRoutes.post("/Court",addNewCourt);
userRoutes.put("/Court/:id",updateCourt);
userRoutes.delete("/Court/:id",removeCourt);
//Jurisdiction
userRoutes.get("/Jurisdiction",getJurisdictionList);
userRoutes.post("/Jurisdiction",addNewJurisdiction);
userRoutes.put("/Jurisdiction/:id",updateJurisdiction);
userRoutes.delete("/Jurisdiction/:id",removeJurisdiction);
export default userRoutes;