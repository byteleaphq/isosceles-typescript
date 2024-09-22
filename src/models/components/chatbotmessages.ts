/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Document,
  Document$inboundSchema,
  Document$Outbound,
  Document$outboundSchema,
} from "./document.js";

export type Reference2 = {};

export type ChatbotMessagesReference = Reference2 | Document;

export type ChatMessages = {
  /**
   * The actor of the message, either USER or AI
   */
  actor?: string | undefined;
  /**
   * The timestamp when the message was created
   */
  createdAt?: string | undefined;
  /**
   * The ID of the message
   */
  id?: number | undefined;
  /**
   * The content of the message
   */
  message?: string | undefined;
  /**
   * The list of references associated with the interaction
   */
  reference?: Array<Reference2 | Document> | null | undefined;
  /**
   * The ID of the thread the message belongs to
   */
  threadId?: string | undefined;
  /**
   * The timestamp of the message, if available
   */
  timestamp?: string | null | undefined;
};

export type ChatbotMessages = {
  chatMessages?: Array<ChatMessages> | undefined;
};

/** @internal */
export const Reference2$inboundSchema: z.ZodType<
  Reference2,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Reference2$Outbound = {};

/** @internal */
export const Reference2$outboundSchema: z.ZodType<
  Reference2$Outbound,
  z.ZodTypeDef,
  Reference2
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reference2$ {
  /** @deprecated use `Reference2$inboundSchema` instead. */
  export const inboundSchema = Reference2$inboundSchema;
  /** @deprecated use `Reference2$outboundSchema` instead. */
  export const outboundSchema = Reference2$outboundSchema;
  /** @deprecated use `Reference2$Outbound` instead. */
  export type Outbound = Reference2$Outbound;
}

/** @internal */
export const ChatbotMessagesReference$inboundSchema: z.ZodType<
  ChatbotMessagesReference,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => Reference2$inboundSchema), Document$inboundSchema]);

/** @internal */
export type ChatbotMessagesReference$Outbound =
  | Reference2$Outbound
  | Document$Outbound;

/** @internal */
export const ChatbotMessagesReference$outboundSchema: z.ZodType<
  ChatbotMessagesReference$Outbound,
  z.ZodTypeDef,
  ChatbotMessagesReference
> = z.union([z.lazy(() => Reference2$outboundSchema), Document$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatbotMessagesReference$ {
  /** @deprecated use `ChatbotMessagesReference$inboundSchema` instead. */
  export const inboundSchema = ChatbotMessagesReference$inboundSchema;
  /** @deprecated use `ChatbotMessagesReference$outboundSchema` instead. */
  export const outboundSchema = ChatbotMessagesReference$outboundSchema;
  /** @deprecated use `ChatbotMessagesReference$Outbound` instead. */
  export type Outbound = ChatbotMessagesReference$Outbound;
}

/** @internal */
export const ChatMessages$inboundSchema: z.ZodType<
  ChatMessages,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string().optional(),
  created_at: z.string().optional(),
  id: z.number().int().optional(),
  message: z.string().optional(),
  reference: z.nullable(
    z.array(z.union([
      z.lazy(() => Reference2$inboundSchema),
      Document$inboundSchema,
    ])),
  ).optional(),
  thread_id: z.string().optional(),
  timestamp: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "thread_id": "threadId",
  });
});

/** @internal */
export type ChatMessages$Outbound = {
  actor?: string | undefined;
  created_at?: string | undefined;
  id?: number | undefined;
  message?: string | undefined;
  reference?: Array<Reference2$Outbound | Document$Outbound> | null | undefined;
  thread_id?: string | undefined;
  timestamp?: string | null | undefined;
};

/** @internal */
export const ChatMessages$outboundSchema: z.ZodType<
  ChatMessages$Outbound,
  z.ZodTypeDef,
  ChatMessages
> = z.object({
  actor: z.string().optional(),
  createdAt: z.string().optional(),
  id: z.number().int().optional(),
  message: z.string().optional(),
  reference: z.nullable(
    z.array(z.union([
      z.lazy(() => Reference2$outboundSchema),
      Document$outboundSchema,
    ])),
  ).optional(),
  threadId: z.string().optional(),
  timestamp: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatMessages$ {
  /** @deprecated use `ChatMessages$inboundSchema` instead. */
  export const inboundSchema = ChatMessages$inboundSchema;
  /** @deprecated use `ChatMessages$outboundSchema` instead. */
  export const outboundSchema = ChatMessages$outboundSchema;
  /** @deprecated use `ChatMessages$Outbound` instead. */
  export type Outbound = ChatMessages$Outbound;
}

/** @internal */
export const ChatbotMessages$inboundSchema: z.ZodType<
  ChatbotMessages,
  z.ZodTypeDef,
  unknown
> = z.object({
  chat_messages: z.array(z.lazy(() => ChatMessages$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "chat_messages": "chatMessages",
  });
});

/** @internal */
export type ChatbotMessages$Outbound = {
  chat_messages?: Array<ChatMessages$Outbound> | undefined;
};

/** @internal */
export const ChatbotMessages$outboundSchema: z.ZodType<
  ChatbotMessages$Outbound,
  z.ZodTypeDef,
  ChatbotMessages
> = z.object({
  chatMessages: z.array(z.lazy(() => ChatMessages$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    chatMessages: "chat_messages",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatbotMessages$ {
  /** @deprecated use `ChatbotMessages$inboundSchema` instead. */
  export const inboundSchema = ChatbotMessages$inboundSchema;
  /** @deprecated use `ChatbotMessages$outboundSchema` instead. */
  export const outboundSchema = ChatbotMessages$outboundSchema;
  /** @deprecated use `ChatbotMessages$Outbound` instead. */
  export type Outbound = ChatbotMessages$Outbound;
}
