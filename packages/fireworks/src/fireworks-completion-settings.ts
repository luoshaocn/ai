import { OpenAICompatibleCompletionSettings } from '@ai-sdk/openai-compatible';

// Below is just a subset of the available models.
export type FireworksCompletionModelId =
  | 'accounts/fireworks/models/llama-v3-8b-instruct'
  | 'accounts/fireworks/models/llama-v2-34b-code'
  | (string & {});

export interface FireworksCompletionSettings
  extends OpenAICompatibleCompletionSettings {}