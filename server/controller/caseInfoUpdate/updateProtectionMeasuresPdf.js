import fs from "fs";
import { v4 } from "uuid";
const pdfs = ["protectionOrderPdf", "placementOrderPdf", "restrainingOrderPdf"];
export const updateProtectionMeasuresPdf = (req, res) => {
  const pdfIdsMap = new Map();
  try{
    performPdfUpdateOperation(req, pdfs, pdfIdsMap);
    res.status(200).json("updateProtectionMeasuresPdf");
  }catch(err){
    res.status(400).json("File Not Updated");
  }
  
};
export const performPdfUpdateOperation = (req, pdfs, pdfIdsMap) => {
  try {
    const prevPdf = JSON.parse(req.body.prevPdfId);
    pdfs.forEach((filesName) => {
      if (prevPdf[filesName] !== "") {
        if (req.files[filesName]) {
          const pdfInputFile = req.files[filesName];
          try {
            pdfIdsMap.set(filesName, prevPdf[filesName]);
            updatePdf(pdfInputFile, prevPdf, filesName, pdfIdsMap);
          } catch (err) {
            pdfIdsMap.set(filesName, prevPdf[filesName]);
            console.log(err);
          }
        } else {
          pdfIdsMap.set(filesName, prevPdf[filesName]);
        }
      } else {
        if (req.files[filesName]) {
          const pdfInputFile = req.files[filesName];
          try {
            pdfIdsMap.set(filesName, prevPdf[filesName]);
            addPdf(pdfInputFile, filesName, pdfIdsMap);
          } catch (err) {
            pdfIdsMap.set(filesName, prevPdf[filesName]);
            console.log(err);
          }
        } else {
          pdfIdsMap.set(filesName, prevPdf[filesName]);
        }
      }
    });
  } catch (err) {
    throw Error(err);
  }
};
const addPdf = (pdfinfo, pdfInputId, pdfIdsMap) => {
  try {
    const pdf = pdfinfo[0];
    const pdfId = v4();
    fs.renameSync(pdf.path, `uploads/${pdfId}.pdf`);
    pdfIdsMap.set(pdfInputId, pdfId);
  } catch (error) {
    throw Error(error);
  }
};
const updatePdf = (pdfinfo, prevPdf, pdfInputId, pdfIdsMap) => {
  try {
    deletePdf(prevPdf[pdfInputId]);
    const pdf = pdfinfo[0];
    const pdfId = v4();
    fs.renameSync(pdf.path, `uploads/${pdfId}.pdf`);
    pdfIdsMap.set(pdfInputId, pdfId);
  } catch (err) {
    throw Error(err);
  }
};

const deletePdf = (pdfId) => {
  try {
    fs.unlinkSync(`uploads/${pdfId}.pdf`);
  } catch (error) {
    throw Error(error);
  }
};
