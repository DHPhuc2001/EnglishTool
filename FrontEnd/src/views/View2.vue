<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
          <div>
              <textarea v-model="Question" placeholder="Please enter your question here">
              </textarea>
          </div>
          <div>
              <button class="button-31" role="button" @click="AskChatGPT" >Ask ChatGPT</button>
          </div>
          <div v-if="IsASK">
              <textarea v-model="Answer" placeholder="chatGPT Of Answer">
              </textarea>
          </div>
          <div>
            <button class="button-43" role="button" @click="ShowHistoryFunc">{{ button_title }}</button>
          </div>
      </div>
      <div v-if="show_history" class="historyFrame">
          <h1 style="text-align: center;">History</h1>
          <div class="align-center" v-for="Q_A in reversedArray" >
              <p>{{Q_A.time}}</p>
              <p>{{Q_A.question}}</p>
              <p>{{Q_A.answer}}</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
data() {
  return {
    Question :'',
    Answer : '',
    show_history :false,
    button_title : 'Show History',
    IsASK: false,
    Q_AList :[],
  }
},
computed: {
    reversedArray() {
      return this.Q_AList.slice().reverse();
    },
  },
methods:{
  AskChatGPT(){
    if(this.Question.length>0){
      this.$emit('loadingevent')
      this.IsASK = false;
      setTimeout(this.callAPI,3000);
    }
  },
  async callAPI(){
      const linkURL = "http://127.0.0.1:8000/chatGPT/same-meaning?recv_data=";
      try {
          const response = await axios.get(linkURL+this.Question);
          this.Answer = "ANSWER:" + response.data[0].answer;
          let time = new Date().toLocaleString();
          let Q_A = {"time": time,"question":'Q: '+this.Question,"answer":'A: '+response.data[0].answer};
          this.Q_AList.push(Q_A);
          this.IsASK = true;
          this.$emit('loadingevent')
        } catch (error) {
          console.error(error);
        }

  },
  ShowHistoryFunc(){
    this.show_history = !this.show_history;
    if(this.show_history) this.button_title = 'Hide History'
    else this.button_title = 'Show History'
  }
}
}
</script>

<style scoped>
textarea {
  width: 80%;
  min-height: 200px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  border-color: #000000;
  border-width: 2px;
}

fieldset
{
background-color:#f8f8f8;
width: 80%;
padding:16px;	
align-items: center;
border-radius: 10px;
min-height: 100px;
margin-bottom: 10px;
border-color: #000000;
border-width: 2px;
border-style: solid;
}
.align-center{
background-color:#f8f8f8;
width: 100%;
padding:16px;	
border-radius: 10px;
min-height: 100px;
margin-bottom: 10px;
border-color: #000000;
border-width: 2px;
border-style: solid;
}
.historyFrame{
background-color:#f8f8f8;
width: 80%;
margin-left: 10%;
margin-right: 10%;
border-radius: 10px;
min-height: 100px;
border-color: #000000;
border-width: 2px;
border-style: solid;
}

.button-31 {
background-color: #222;
border-radius: 4px;
border-style: none;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-block;
font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 1.5;
margin: 10px;
max-width: none;
min-height: 44px;
min-width: 10px;
outline: none;
overflow: hidden;
padding: 9px 20px 8px;
position: relative;
text-align: center;
text-transform: none;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
width: 80%;
}

.button-31:hover,
.button-31:focus {
opacity: .75;
}

.button-43 {
background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
border-radius: .5rem;
box-sizing: border-box;
color: #FFFFFF;
display: flex;
font-size: 20px;
justify-content: center;
text-decoration: none;
width: 80%;
border: 0;
cursor: pointer;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 10px;
}

.button-43:hover {
background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
}

@media (min-width: 768px) {
.button-43 {
  padding: 0.5rem 2rem;
}
}


</style>
