import { performPdfUpdateOperation } from "./updateProtectionMeasuresPdf.js";
const pdfs = [
  "medicalReportsPdf",
  "witnessStatementsPdf",
  "policeReportsPdf",
  "photographsPdf",
  "testimonyPdf",
  "schoolRecordsPdf",
];
export const updateEvidencePdf = (req, res) => {
  const pdfIdsMap = new Map();
  try {
    performPdfUpdateOperation(req, pdfs, pdfIdsMap);
    res.status(200).json("updateEvidencePdf");
  } catch (err) {
    res.status(400).json("File Not Updated");
  }
  console.log(pdfIdsMap);
};
