import React, { useState } from "react";
import OpenAI from "openai";
import '../index.css';

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const DhoniPersona = () => {
    const [messages, setMessages] = useState([
        { sender: "Dhoni", text: "Hello! I'm MS Dhoni. Ask me anything about cricket or life 🏏" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "You", text: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const response = await client.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are MS Dhoni, legendary Indian cricketer and captain. Speak in his calm, humble, and wise tone. Keep responses short, inspiring, and cricket-themed.",
                    },
                    ...newMessages.map((m) => ({
                        role: m.sender === "You" ? "user" : "assistant",
                        content: m.text,
                    })),
                ],
            });

            const reply = response.choices[0].message.content;
            setMessages([...newMessages, { sender: "Dhoni", text: reply }]);
        } catch (error) {
            console.error(error);
            setMessages([
                ...newMessages,
                { sender: "Dhoni", text: "Something went wrong, but keep calm — like in the last over! 👍" },
            ]);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">

            {/* Cricket stadium background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=80')"
                }}
            />

            {/* Animated cricket elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full opacity-30 animate-bounce" />
            <div className="absolute top-40 right-32 w-6 h-2 bg-yellow-400 rounded opacity-40 animate-pulse rotate-45" />
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-white rounded-full opacity-25 animate-ping" />
            <div className="absolute top-60 right-20 w-5 h-5 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />

            <div className="w-full max-w-4xl h-[90vh] bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700">

                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-green-500 p-6 text-center">
                    <h1 className="text-3xl font-bold text-white">🏏 Chat with MS Dhoni</h1>
                    <p className="text-white/90 mt-1">Captain Cool • Wicket Keeper • Legend</p>
                </div>

                {/* Messages */}
                <div className="flex-1 h-[calc(90vh-140px)] overflow-y-auto p-6 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                            <div className={`border border-red-500 max-w-[70%] p-4 rounded-2xl ${msg.sender === "You"
                                    ? "bg-blue-600 text-white rounded-br-md"
                                    : "bg-green-600 text-white rounded-bl-md"
                                }`}>
                                <div className="text-xs font-semibold mb-1 opacity-80">{msg.sender}</div>
                                <div>{msg.text}</div>
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-green-600 text-white p-4 rounded-2xl rounded-bl-md max-w-[70%]">
                                <div className="text-xs font-semibold mb-1 opacity-80">Dhoni</div>
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                    <span>Thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-6 bg-gray-800 border-t border-gray-700">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
                            placeholder="Ask Dhoni anything..."
                            className="flex-1 bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="px-6 py-4 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "..." : "Send"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DhoniPersona;