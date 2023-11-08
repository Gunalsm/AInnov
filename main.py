


from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
async def get_index_html():
    return FileResponse("src/index.html")
