import express from "express";
import { createPatient } from "../controllers/patientdetailsControllers";



router.post('/', createPatient);
// router.get('/:id', getPatientById);
// router.put('/:id', updatePatientDetails);
// router.delete('/:id', deletePatientDetails);

export default router