import { getDbConnection } from "../db/dbConnection.js";
import sql from "mssql";
export const dbAddNewCase = (pdfIdsMap, req) => {
  return new Promise(async (resolve, reject) => {
    // console.log(pdfIdsMap);
    const pool = await getDbConnection();
    // console.log(JSON.parse(req.body.data));
    // console.log(req.body);
    const {ChildInformation,CaseDetails,LegalRepresentation,CaseManagement,MonitoringFollowUp} = req.body;
    const jsonChildInformation = JSON.parse(ChildInformation);
    const jsonCaseDetails = JSON.parse(CaseDetails);
    const jsonLegalRepresentation = JSON.parse(LegalRepresentation);
    const jsonCaseManagement = JSON.parse(CaseManagement);
    const jsonMonitoringFollowUp = JSON.parse(MonitoringFollowUp);
    // console.log(jsonMonitoringFollowUp);
    const currentTimestamp = Date.now();
    const request = pool.request();
    request.input("caseId", sql.NVarChar(255), `CASE${currentTimestamp}`);
    request.input("childName", sql.NVarChar(255), jsonChildInformation.childNameInput);
    request.input("age", sql.Int, parseInt(jsonChildInformation.ageInput));
    request.input("dob", sql.Date, new Date(jsonChildInformation.dobInput));
    request.input("guradian", sql.NVarChar(255),jsonChildInformation.guradianInput);
    request.input("educationalBg", sql.NVarChar(sql.MAX), jsonChildInformation.educationalBgInput);
    request.input("address", sql.NVarChar(sql.MAX), jsonChildInformation.addressInput);
    request.input("gender", sql.NVarChar(50), jsonChildInformation.selectedGender);
    request.input("state", sql.Int, parseInt(jsonChildInformation.selectedState));
    request.input("city", sql.Int, parseInt(jsonChildInformation.selectedCity));
    request.input("taluk", sql.Int, parseInt(jsonChildInformation.selectedTaluk));
    request.input("village", sql.Int, parseInt(jsonChildInformation.selectedVillage));

    request.input("caseIdInput", sql.NVarChar(255), jsonCaseDetails.caseIdInput);
    request.input("caseTitle", sql.NVarChar(255), jsonCaseDetails.caseTitleInput);
    request.input(
      "caseDescription",
      sql.NVarChar(sql.MAX),
      jsonCaseDetails.caseDescriptionInput
    );
    request.input("courtName", sql.NVarChar(255), jsonCaseDetails.courtNameInput);
    request.input("jurisdiction", sql.NVarChar(255), jsonCaseDetails.jurisdictionInput);
    request.input("caseType", sql.NVarChar(50), jsonCaseDetails.selectedCaseType);
    request.input("casePriority", sql.NVarChar(50), jsonCaseDetails.selectedCasePriority);
    request.input("caseStatus", sql.NVarChar(50), jsonCaseDetails.selectedCaseStatus);

    request.input("lawyer", sql.NVarChar(255), jsonLegalRepresentation.lawyerInput);
    request.input("petitioner", sql.NVarChar(255), jsonLegalRepresentation.petitionerInput);
    request.input("respondent", sql.NVarChar(255), jsonLegalRepresentation.respondentInput);
    request.input("legalAidDetails", sql.NVarChar(255), jsonLegalRepresentation.legalAidDetailsInput);

    request.input("caseTimeline", sql.Date, new Date(jsonCaseManagement.caseTimelineInput));
    request.input("nextHearingDate", sql.Date, new Date(jsonCaseManagement.nextHearingDateInput));
    request.input(
      "nextStepsandAction",
      sql.NVarChar(sql.MAX),
      jsonCaseManagement.nextStepsandActionInput
    );
    request.input(
      "taskAssignment",
      sql.NVarChar(sql.MAX),
      jsonCaseManagement.taskAssignmentInput
    );
    request.input(
      "caseNotesandUpdatesInput",
      sql.NVarChar(sql.MAX),
      jsonCaseManagement.caseNotesandUpdatesInput
    );

    request.input(
      "postCaseMonitoringInput",
      sql.NVarChar(sql.MAX),
      jsonMonitoringFollowUp.postCaseMonitoringInput
    );
    request.input(
      "followUpActionInput",
      sql.NVarChar(sql.MAX),
      jsonMonitoringFollowUp.followUpActionInput
    );
    // resolve("Ok");
    request.execute("InsertCaseDetails", async (error, result) => {
      if (error) {
        console.log(error);
        reject("Not Save");
        return;
      }
      console.log("Stored procedure executed successfully");
      await insertDoc("CASE" + currentTimestamp,pdfIdsMap, (error, result) => {
        if (error) {
          console.log(error);
          reject("Not Save");
          return;
        }
        console.log("Doc URL Save Successfully");
      });
      resolve("Ok");
    });
  });
};

const insertDoc = async (caseID,pdfIdsMap, callback) => {
  const pool = await getDbConnection();
  const request = pool.request();
  request.query(
    `
            INSERT INTO DocumentStorageLink (
                caseId,
                schoolRecordsPdf,
                courtOrdersPdf,
                judgementsPdf,
                witnessStatementsPdf,
                photographsPdf,
                testimonyPdf,
                policeReportsPdf,
                medicalReportsPdf,
                protectionOrderPdf,
                placementOrderPdf,
                restrainingOrderPdf
            )
            VALUES (
                '${caseID}',
                '${pdfIdsMap.get('schoolRecordsPdf')}',
                '${pdfIdsMap.get('courtOrdersPdf')}',
                '${pdfIdsMap.get('judgementsPdf')}',
                '${pdfIdsMap.get('witnessStatementsPdf')}',
                '${pdfIdsMap.get('photographsPdf')}',
                '${pdfIdsMap.get('testimonyPdf')}',
                '${pdfIdsMap.get('policeReportsPdf')}',
                '${pdfIdsMap.get('medicalReportsPdf')}',
                '${pdfIdsMap.get('protectionOrderPdf')}',
                '${pdfIdsMap.get('placementOrderPdf')}',
                '${pdfIdsMap.get('restrainingOrderPdf')}'
            );
        `,
    callback
  );
};
