from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
   

# Load your trained Linear Regression model
model = joblib.load('kmeans3_model.pkl')  
scaler = joblib.load('scaler.pkl')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["http://localhost:3000"] for specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input data schema
class PredictionInput(BaseModel):
    DSMCRIT:int
    PSYPROB:int
    PRIMPAY: int
    MARSTAT:int
    LOS: int
    AGE: int
    SERVSETD: int
    FRSTUSE1: int
    NOPRIOR:int

@app.get("/")
def getData():
    return {"message":"hi"}


# Define prediction endpoint
@app.post("/predict")
def predict(data: PredictionInput):        

    input_array = pd.DataFrame(
        [[data.DSMCRIT,data.PSYPROB,data.PRIMPAY,data.MARSTAT,data.LOS,data.AGE,data.SERVSETD,data.FRSTUSE1,data.NOPRIOR]], 
        columns=['DSMCRIT', 'PSYPROB', 'PRIMPAY', 'MARSTAT', 'LOS', 'AGE', 'SERVSETD', 'FRSTUSE1', 'NOPRIOR'],
        index=[0]
    ) 

    new_data_scaled = scaler.transform(input_array)
    
    # Make predictions using the trained K-Means model
    predictions = model.predict(new_data_scaled)

    cluster_labels = {
        0: "High Risk",        # Cluster 0 is high risk
        1: "Moderate Risk",    # Cluster 1 is moderate risk
        2: "Low Risk",         # Cluster 2 is low risk
        3: "Low Risk",         # Cluster 3 is low risk
        4: "High Risk",        # Cluster 4 is high risk
        5: "Low Risk",         # Cluster 5 is low risk
        6: "Moderate Risk",    # Cluster 6 is moderate risk
        7: "Low Risk",         # Cluster 7 is low risk
        8: "Low Risk"          # Cluster 8 is low risk
    }

    if isinstance(predictions, pd.Series) or isinstance(predictions, list):
        result = predictions[0]  # Access the first element
    else:
        result = predictions  # If it's a scalar, just use it directly

    cluster_label = cluster_labels.get(int(result), "Unknown Risk")

    # Return the prediction in JSON format
    return JSONResponse(content={"cluster": int(result), "label":cluster_label})
    


