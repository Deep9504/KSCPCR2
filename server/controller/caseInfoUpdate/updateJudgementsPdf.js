import { performPdfUpdateOperation } from "./updateProtectionMeasuresPdf.js";
const pdfs = [
  "courtOrdersPdf",
  "judgementsPdf"
];
export const updateJudgementsPdf = (req, res) => {
  const pdfIdsMap = new Map();
  try {
    performPdfUpdateOperation(req, pdfs, pdfIdsMap);
    res.status(200).json("updateJudgementsPdf");
  } catch (err) {
    res.status(400).json("File Not Updated");
  }
  console.log(pdfIdsMap);
};
