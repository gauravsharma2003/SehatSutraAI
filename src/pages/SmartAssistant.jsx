import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import symptomsData from '../../symptoms.json';

const HealthAssistantGeminiChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const chatBoxRef = useRef(null);
  const textareaRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_KEY;
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const HEALTH_ASSISTANT_PROMPT = `
    You are an AI health assistant. Your role is to listen to users' symptoms and provide 
    possible health issues they might be experiencing, along with recommendations for which 
    type of doctor they should consult. Remember to always advise the user to seek 
    professional medical advice for accurate diagnosis and treatment. Do not provide 
    specific medical advice or prescriptions. Respond in a caring and informative manner.

    Please provide your response in the following JSON format:
    {
      "possibleIssues": ["Issue 1", "Issue 2", ...],
      "recommendedDoctor": "Type of doctor to consult",
      "advice": "General advice and precautions",
      "example": "A brief example or explanation"
    }

    User: [User will describe their symptoms here]
    Health Assistant: [Your JSON response here]
  `;

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const createChatMessage = (message, isOutgoing, isJson = false) => ({
    message,
    isOutgoing,
    isJson
  });

  const generateResponse = async (userMessage) => {
    try {
      const requestBody = {
        contents: [
          { role: "user", parts: [{ text: HEALTH_ASSISTANT_PROMPT }] },
          { role: "user", parts: [{ text: userMessage }] }
        ],
      };
      console.log('Request Body:', JSON.stringify(requestBody, null, 2));

      const response = await axios.post(API_URL, requestBody, {
        params: { key: API_KEY },
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('API Response:', response.data);

      const jsonResponse = JSON.parse(response.data.candidates[0].content.parts[0].text);
      return jsonResponse;
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      return { error: "An error occurred while fetching the response. Please try again later." };
    }
  };

  const handleChat = async (symptom = null) => {
    const message = symptom || inputMessage.trim();
    if (!message) return;

    setMessages(prev => [...prev, createChatMessage(message, true)]);
    setInputMessage('');
    setIsInputDisabled(true);

    setMessages(prev => [...prev, createChatMessage("Analyzing your symptoms...", false)]);

    const response = await generateResponse(message);
    setMessages(prev => [
      ...prev.slice(0, -1),
      createChatMessage(response, false, true),
    ]);

    setIsInputDisabled(false);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800 && !isInputDisabled) {
      e.preventDefault();
      handleChat();
    }
  };

  const handleSymptomClick = (symptom) => {
    handleChat(symptom);
  };

  const renderJsonResponse = (json) => (
    <div className="space-y-2">
      <p><strong>Possible Issues:</strong> {json.possibleIssues.join(", ")}</p>
      <p><strong>Recommended Doctor:</strong> {json.recommendedDoctor}</p>
      <p><strong>Advice:</strong> {json.advice}</p>
      <p><strong>Example:</strong> {json.example}</p>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 to-teal-100">
      <div className="w-1/4 bg-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Common Symptoms</h2>
        <div className="grid grid-cols-2 gap-2">
          {symptomsData.symptoms.map((symptom, index) => (
            <button
              key={index}
              onClick={() => handleSymptomClick(symptom)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 text-sm"
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-3/4">
        <div className="bg-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center text-blue-600">AI Health Assistant</h1>
        </div>
        <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isOutgoing ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-lg p-3 shadow-md ${
                msg.isOutgoing ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}>
                {!msg.isOutgoing && (
                  <span className="inline-block mr-2 text-blue-600">
                    <i className="fas fa-user-md"></i>
                  </span>
                )}
                {msg.isJson ? renderJsonResponse(msg.message) : <p>{msg.message}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 border-t shadow-md">
          <div className="flex items-center">
            <textarea
              ref={textareaRef}
              className="flex-1 resize-none border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="1"
              placeholder={isInputDisabled ? "Please select a symptom from the list" : "Describe your symptoms..."}
              value={inputMessage}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isInputDisabled}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
              onClick={() => handleChat()}
              disabled={isInputDisabled}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssistantGeminiChatbot;