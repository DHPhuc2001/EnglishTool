import openai
from fastapi import FastAPI, File, UploadFile
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.responses import FileResponse
import os
import pandas as pd 
from google.cloud import texttospeech 
from google.cloud import texttospeech_v1
from google.cloud import speech

# os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'client_secret_key.json'
#speech to text


#chatgpt
CHATGPT_API_KEY = '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'
# CHATGPT_API_KEY = 'sk-8NRqvTkmpCKvZiC0AgyNT3BlbkFJA0RbzyJlbpuA4MLm76g'
openai.api_key = CHATGPT_API_KEY
model = 'text-davinci-003'

# text to speech
# client = texttospeech_v1.TextToSpeechClient()

# voice = texttospeech_v1.VoiceSelectionParams(
#     language_code="vi-VN", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
# )
# voice = texttospeech_v1.VoiceSelectionParams(
#     name='vi-VN-Wavenet-D', language_code="vi-VN"
# )
# audio_config = texttospeech_v1.AudioConfig(
#     audio_encoding=texttospeech_v1.AudioEncoding.MP3
# )


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/chatGPT/grammar")
async def askchatGPT(recv_data: str):
    data = {'question':'hello'}
    print("chatGPT")
    UserQuestion = "Please correct the grammatical error of the sentence:"+recv_data +"'"
    try:
        response_chatGPT = openai.Completion.create(
            prompt = UserQuestion,
            model = model,
            max_tokens = 500,
            temperature = 0.5
        )
        chatGPTdata = response_chatGPT.choices[0].text
    except:
        chatGPTdata = "Xin Lỗi, câu hỏi này khó quá!"
    print("end chatGPT")
    data = [{'answer':chatGPTdata}]
    json_compatible_item_data = jsonable_encoder(data )
    return JSONResponse(content=json_compatible_item_data)

@app.get("/chatGPT/same-meaning")
async def askchatGPT(recv_data: str):
    data = {'question':'hello'}
    print("chatGPT")
    UserQuestion = "Please write some sentences with similar meaning as '"+recv_data+"'with IELTS style"
    try:
        response_chatGPT = openai.Completion.create(
            prompt = UserQuestion,
            model = model,
            max_tokens = 500,
            temperature = 0.5
        )
        chatGPTdata = response_chatGPT.choices[0].text
    except:
        chatGPTdata = "Xin Lỗi, câu hỏi này khó quá!"
    print("end chatGPT")
    data = [{'answer':chatGPTdata}]
    json_compatible_item_data = jsonable_encoder(data )
    return JSONResponse(content=json_compatible_item_data)

@app.get("/chatGPT/write-paragraph")
async def askchatGPT(recv_data: str):
    data = {'question':'hello'}
    print("chatGPT")
    UserQuestion = "Write a paragraph about talking about:'"+recv_data +"' with IELTS writting style."
    try:
        response_chatGPT = openai.Completion.create(
            prompt = UserQuestion,
            model = model,
            max_tokens = 500,
            temperature = 0.5
        )
        chatGPTdata = response_chatGPT.choices[0].text
    except:
        chatGPTdata = "Xin Lỗi, câu hỏi này khó quá!"
    print("end chatGPT")
    data = [{'answer':chatGPTdata}]
    json_compatible_item_data = jsonable_encoder(data )
    return JSONResponse(content=json_compatible_item_data)


# @app.get("/textospeech")
# async def Text_To_Speech(recv_data:str):    
#     print("Text To Speech")
#     synthesis_input = texttospeech_v1.SynthesisInput(text=recv_data)
#     response_texttospeech = client.synthesize_speech(
#         input=synthesis_input, 
#         voice=voice, 
#         audio_config=audio_config
#     )
#     file_path = "TextToSpeech.mp3"
#     with open(file_path, "wb") as out:
#         out.write(response_texttospeech.audio_content)
#         print('Audio content written to file "TextToSpeech.mp3"')
#     print("end Text To Speech")
#     return FileResponse(file_path, media_type="audio/mpeg")

# @app.post("/voice-chatGPT")
# async def upload(file: UploadFile,language:str):
#     byte_data_mp3 = await file.read()
#     # setting speech to text
#     speech_client = speech.SpeechClient()
#     audio_mp3 = speech.RecognitionAudio(content=byte_data_mp3)
#     config_mp3 = speech.RecognitionConfig(
#         sample_rate_hertz=48000,
#         enable_automatic_punctuation=True,
#         language_code= language
#     )
#     # call Speech To Text API
#     response_standard_mp3 = speech_client.recognize(
#     config=config_mp3,
#     audio=audio_mp3
#     )
#     UserQuestion = response_standard_mp3.results[0].alternatives[0].transcript
#     print(UserQuestion)
#     # call chatGPT API
#     try:
#         response_chatGPT = openai.Completion.create(
#             prompt = UserQuestion,
#             model = model,
#             max_tokens = 500,
#             temperature = 0.5
#         )
#         chatGPTdata = response_chatGPT.choices[0].text
#     except:
#         chatGPTdata = "Xin Lỗi, câu hỏi này khó quá!"
#     print(chatGPTdata)
#     responsedata = [{'question':UserQuestion,'answer':chatGPTdata}]
#     json_compatible_item_data = jsonable_encoder(responsedata )
#     return JSONResponse(content=json_compatible_item_data)
