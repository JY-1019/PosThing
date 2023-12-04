from fastapi import FastAPI

app = FastAPI()


@app.get("/api/")
def root():
    return {"message": "드디어 됐네"}
