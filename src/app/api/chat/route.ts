import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildOpenAssistantPrompt } from "ai/prompts";
import { HfInference } from "@huggingface/inference";

// Create a new Hugging Face Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";
const question =
	"Este es un simulacro de una consulta médica para probar una aplicación. Ten en cuenta que esta es solo una demostración y ninguna de las conversaciones o respuestas seran consideradas como asesoramiento médico real. Por favor, actúa en el papel de un profesor y responde a mis preguntas como si yo fuera tu alumno.";


export async function POST(req: Request) {
	// Extract the `messages` from the body of the request
	const { messages } = await req.json();

	const messagesWithData = [
		{
			content: question,
			role: "user",
		},
		...messages,
	];

	// Initialize a text-generation stream using the Hugging Face Inference SDK
	const response = await Hf.textGenerationStream({
		model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
		inputs: experimental_buildOpenAssistantPrompt(messagesWithData),
		parameters: {
			max_new_tokens: 200,
			// @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
			typical_p: 0.2,
			repetition_penalty: 1,
			truncate: 1000,
			return_full_text: false,
		},
	});

	// Convert the async generator into a friendly text-stream
	const stream = HuggingFaceStream(response);

	// Respond with the stream, enabling the client to consume the response
	return new StreamingTextResponse(stream);
}
