# dig-w2-clinic
## Steps to solve the problem
- Fork the repo.
- Clone forked repo to your machine.
- run `npm i`.
- run `npm run dev`.
- Write your solution according to the below specifications.
- Push your changes to the forked repo.
- Make a pull request.
## Understanding
Relationship between Patient and History implemented using one-to-many and Referenced method, So now Patient document has list of IDs which reference to many documents in History collection by ObjectId.
CRUD operations plus related operations are implmeneted in the last week (week1):
```
router.get('/', getAllPatients);// Get all patients list with filter, sort, pagination and load history log also.
router.get('/search', searchPatients);// Search for patient by full_name and populate related docuemnts.
router.get('/:id', getPatientById);// load patient by his _id and populated related document.
router.delete('/:id', deletePatient);// delete patient using his _id
router.put('/:id', updatePatient);// update patient using his _id 
router.get('/:id/history', getHistoryOfPatient);// get history of a patient, by pull history and returns it
router.post(`/`, createPatient);// create new patient
router.post(`/:id/history`, newHistory);// add new history log to a patient
```
And for history:
```
router.get('/', getAllHistory);// done
```
Now we will need to deal with prescriptions in the history document as embedded collections, as you will see in the specifications below, so each history document has many embedded prescriptions collection.
## Specifications
1- Complete solution with implementing all **TO-DO** comments in the code:
  - Embedd collection `prescriptions` in history document. to make the relationship between history and it's prescriptions as 1-to-many embedded method.
  - Prescription document (object schema) is: {name:String, dose: String}
  - In Routers:
    - In History:
      - Add new endpoint to get history by _id of the required history with it's related embedded prescriptions.
      - Add new endpoint to delete a history by _id.
      - Add endpoint to enable the front-end developer to add new prescription to given history _id. (way 1)
    - Add new Router called `presscriptions` and define following endpoints:
      - Endpoint to add new prescription to a history.( way 2 )
  - controllers:
    - PrescriptionController:
      - createPrescription
    - HistoryController:
      - Implement getHistory
      - Implement deleteHistory
