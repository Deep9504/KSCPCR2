import fs from "fs";
import { v4 } from "uuid";
import { dbAddNewCase } from "../dbOperation/dbAddNewCase.js";
const pdfs = ["schoolRecordsPdf","courtOrdersPdf","judgementsPdf","witnessStatementsPdf","photographsPdf","testimonyPdf","policeReportsPdf","medicalReportsPdf","protectionOrderPdf", "placementOrderPdf","restrainingOrderPdf"];
export const createNewCase = (req, res) => {
  const pdfIdsMap = new Map();
  pdfs.forEach((filesName) => {
    let pdfId = "";
    pdfIdsMap.set(filesName, pdfId);
    if (req.files[filesName]) {
      const pdf = req.files[filesName][0];
      pdfId = v4();

      fs.renameSync(pdf.path, `uploads/${pdfId}.pdf`);
    }
    pdfIdsMap.set(filesName, pdfId);
  });
  dbAddNewCase(pdfIdsMap, req)
    .then((result) => {
      res.status(200).json({ message: "Data successfully Save" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};
